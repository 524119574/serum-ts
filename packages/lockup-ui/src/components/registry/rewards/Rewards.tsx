import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import CircularProgress from '@material-ui/core/CircularProgress';
import LockIcon from '@material-ui/icons/Lock';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import * as registry from '@project-serum/registry';
import { Network, ProgramAccount } from '@project-serum/common';
import { useWallet } from '../../../components/common/WalletProvider';
import { State as StoreState } from '../../../store/reducer';
import DropRewardDialog from './DropRewardDialog';
import * as notification from '../../common/Notification';

export default function Rewards() {
  const { registryClient } = useWallet();
  const snack = useSnackbar();
  const { rewardEventQueue, member, network } = useSelector(
    (state: StoreState) => {
      return {
        rewardEventQueue: state.registry.rewardEventQueue,
        member: state.registry.member!,
        network: state.common.network,
      };
    },
  );
  let tailCursor = rewardEventQueue!.account.tailCursor();
  const rewards = rewardEventQueue!.account
    .messages()
    .map((m, idx) => {
      let cursor = tailCursor + idx;
      return {
        item: m,
        needsClaim:
          m.lockedAlloc !== undefined && cursor >= member.account.rewardsCursor,
        cursor,
      };
    })
    .reverse();
  let showClaimButton = rewards.filter(r => r.needsClaim).length > 0;
  const claimNextReward = async () => {
    // The reward with min cursor that needs claim.
    let r = (() => {
      for (let k = rewards.length - 1; k >= 0; k -= 1) {
        let r = rewards[k];
        if (r.item.lockedAlloc && r.needsClaim) {
          return r;
        }
      }
      throw new Error('no reward to claim');
    })();

    let vendor = await registryClient.accounts.lockedRewardVendor(
      r.item.lockedAlloc!.lockedVendor,
    );
    let vendorSigner = await registryClient.accounts.lockedRewardVendorAuthority(
      vendor.publicKey,
      vendor.account.nonce,
    );
    notification.withTx(
      snack,
      `Claiming vendor reward ${vendor.publicKey.toString()}`,
      'Reward claimed',
      async () => {
        const { tx } = await registryClient.claimLockedReward({
          cursor: r.cursor,
          member: member.publicKey,
          vendor: vendor.publicKey,
          vendorVault: vendor.account.vault,
          vendorSigner,
          safe: network.safe,
          lockupProgramId: network.lockupProgramId,
          mint: r.item.lockedAlloc!.mint,
        });
        return tx;
      },
    );
  };

  return (
    <div style={{ width: '100%', marginTop: '24px' }}>
      <div
        style={{
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>
          Reward History
        </Typography>
        <div style={{ display: 'flex' }}>
          {showClaimButton && <ClaimButton onClick={claimNextReward} />}
          <DropButton />
        </div>
      </div>
      <Paper>
        <List>
          {rewards.length > 0 ? (
            rewards.map(r => {
              return (
                <RewardListItem
                  cursor={r.cursor}
                  needsClaim={r.needsClaim}
                  network={network}
                  reward={r.item}
                />
              );
            })
          ) : (
            <ListItem>
              <ListItemText primary={'No rewards found'} />
            </ListItem>
          )}
        </List>
      </Paper>
    </div>
  );
}

type ClaimButtonProps = {
  onClick: () => void;
};

function ClaimButton(props: ClaimButtonProps) {
  return (
    <div style={{ marginRight: '10px' }} onClick={props.onClick}>
      <Button variant="contained" color="primary">
        Claim Reward
      </Button>
    </div>
  );
}

function DropButton() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <div onClick={() => setShowDialog(true)}>
        <Button variant="contained" color="secondary">
          Drop Rewards
        </Button>
      </div>
      <DropRewardDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
      />
    </>
  );
}

type RewardListItemProps = {
  reward: registry.accounts.RewardEvent;
  needsClaim: boolean;
  cursor: number;
  network: Network;
};

function RewardListItem(props: RewardListItemProps) {
  const { reward, network, needsClaim, cursor } = props;
  if (reward.poolDrop !== undefined) {
    return <PoolDropReward cursor={cursor} poolDrop={reward.poolDrop} />;
  } else {
    return (
      <LockedReward
        cursor={cursor}
        needsClaim={needsClaim}
        lockedAlloc={reward.lockedAlloc!}
        network={network}
      />
    );
  }
}

type PoolDropRewardProps = {
  poolDrop: registry.accounts.PoolDrop;
  cursor: number;
};

function PoolDropReward(props: PoolDropRewardProps) {
  const { poolDrop, cursor } = props;

  let amountLabel = `${poolDrop.totals[0].toString()} SRM`;
  if (poolDrop.totals.length === 2) {
    amountLabel += ` ${poolDrop.totals[1].toString()} MSRM`;
  }
  let lockedLabel = 'unlocked';
  let fromLabel = `${poolDrop.pool.toString()} | ${poolDrop.from.toString()} | ${cursor}`;
  return (
    <>
      <ListItem button>
        <LockIcon style={{ visibility: 'hidden', marginRight: '16px' }} />
        <ListItemText
          primary={<>{`${amountLabel} ${lockedLabel}`}</>}
          secondary={fromLabel}
        />
      </ListItem>
    </>
  );
}

type LockedRewardProps = {
  lockedAlloc: registry.accounts.LockedAlloc;
  network: Network;
  needsClaim: boolean;
  cursor: number;
};

function LockedReward(props: LockedRewardProps) {
  const { cursor, lockedAlloc, network, needsClaim } = props;
  const { registryClient } = useWallet();
  const [open, setOpen] = useState(false);
  let [
    vendor,
    setVendor,
  ] = useState<null | registry.accounts.LockedRewardVendor>(null);
  let amountLabel = `${lockedAlloc.total.toString()}`;
  if (lockedAlloc.mint.equals(network.srm)) {
    amountLabel += ' SRM';
  } else if (lockedAlloc.mint.equals(network.msrm)) {
    amountLabel += ' MSRM';
  } else {
    amountLabel += ` ${lockedAlloc.mint}`;
  }
  let lockedLabel = 'locked';
  let fromLabel = `${lockedAlloc.pool.toString()} | ${lockedAlloc.from.toString()} | ${cursor}`;

  return (
    <>
      <ListItem
        button
        onClick={async () => {
          if (vendor === null) {
            let v = await registryClient.accounts.lockedRewardVendor(
              lockedAlloc.lockedVendor,
            );
            setVendor(v.account);
          }
          setOpen(open => !open);
        }}
      >
        <LockIcon style={{ marginRight: '16px' }} />
        <ListItemText
          primary={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: needsClaim ? '#54a15e' : '',
              }}
            >
              <div>{`${amountLabel} ${lockedLabel}`}</div>
            </div>
          }
          secondary={fromLabel}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {vendor === null ? (
          <CircularProgress />
        ) : (
          <LockedRewardDetails
            vendor={{ publicKey: lockedAlloc.lockedVendor, account: vendor }}
          />
        )}
      </Collapse>
    </>
  );
}

type LockedRewardDetailsProps = {
  vendor: ProgramAccount<registry.accounts.LockedRewardVendor>;
};

function LockedRewardDetails(props: LockedRewardDetailsProps) {
  let { vendor } = props;

  return (
    <div
      style={{
        marginLeft: '56px',
      }}
    >
      <Typography variant="h6">Vendor</Typography>
      <Typography>Address: {vendor.publicKey.toString()}</Typography>
      <Typography>Vault: {vendor.account.vault.toString()}</Typography>
      <Typography>
        Pool token supply snapshot: {vendor.account.poolTokenSupply.toString()}
      </Typography>
      <Typography>
        Expiry:{' '}
        {new Date(
          vendor.account.expiryTs.toNumber() * 1000,
        ).toLocaleDateString()}
      </Typography>
      <Typography>
        Expiry receiver: {vendor.account.expiryReceiver.toString()}
      </Typography>
    </div>
  );
}
