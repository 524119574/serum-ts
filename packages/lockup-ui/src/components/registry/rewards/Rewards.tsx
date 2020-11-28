import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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

export default function Rewards() {
  const { rewardEventQueue, network } = useSelector((state: StoreState) => {
    return {
      rewardEventQueue: state.registry.rewardEventQueue,
			network: state.common.network,
    };
  });
  const rewards = rewardEventQueue!.account.messages().reverse();
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
        <div>
          <DropButton />
        </div>
      </div>
      <Paper>
        <List>
          {rewards.length > 0 ? rewards.map(r => {
            return <RewardListItem network={network} reward={r} />;
          }) : (
						<ListItem>
							<ListItemText primary={'No rewards found'} />
						</ListItem>
					)}
        </List>
      </Paper>
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
	network: Network;
};

function RewardListItem(props: RewardListItemProps) {
  const { reward, network } = props;
  if (reward.poolDrop !== undefined) {
    return <PoolDropReward poolDrop={reward.poolDrop} />;
  } else {
    return <LockedReward
						 lockedAlloc={reward.lockedAlloc!}
						 network={network} />;
  }
}

type PoolDropRewardProps = {
  poolDrop: registry.accounts.PoolDrop;
};

function PoolDropReward(props: PoolDropRewardProps) {
  const { poolDrop } = props;

  let amountLabel = `${poolDrop.totals[0].toString()} SRM`;
  if (poolDrop.totals.length === 2) {
    amountLabel += ` ${poolDrop.totals[1].toString()} MSRM`;
  }
  let lockedLabel = 'unlocked';
  let fromLabel = `${poolDrop.pool.toString()} | ${poolDrop.from.toString()}`;
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
};

function LockedReward(props: LockedRewardProps) {
	const { registryClient } = useWallet();
  const { lockedAlloc, network } = props;
  const [open, setOpen] = useState(false);
	let [vendor, setVendor] = useState<null | registry.accounts.LockedRewardVendor>(null);
  let amountLabel = `${lockedAlloc.total.toString()}`;
	if (lockedAlloc.mint.equals(network.srm)) {
		amountLabel += ' SRM';
	} else if (lockedAlloc.mint.equals(network.msrm)) {
		amountLabel += ' MSRM';
	} else {
		amountLabel += ` ${lockedAlloc.mint}`;
	}
  let lockedLabel = 'locked';
  let fromLabel = `${lockedAlloc.pool.toString()} | ${lockedAlloc.from.toString()}`;

  return (
    <>
    <ListItem button onClick={async () => {
			if (vendor === null) {
				let v = await registryClient.accounts.lockedRewardVendor(lockedAlloc.lockedVendor);
				setVendor(v.account);
			}
			setOpen((open) => !open);
		}}>
		<LockIcon style={{ marginRight: '16px'}} />
        <ListItemText
          primary={<>{`${amountLabel} ${lockedLabel}`}</>}
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
		<div style={{
			marginLeft: '56px',
		}}>
			<Typography variant="h6">
				Vendor
			</Typography>
			<Typography>
				Address: {vendor.publicKey.toString()}
			</Typography>
			<Typography>
				Vault: {vendor.account.vault.toString()}
			</Typography>
			<Typography>
				Pool token supply snapshot: {vendor.account.poolTokenSupply.toString()}
			</Typography>
			<Typography>
				Expiry: {(new Date(vendor.account.expiryTs.toNumber()*1000)).toLocaleDateString()}
			</Typography>
			<Typography>
				Expiry receiver: {vendor.account.expiryReceiver.toString()}
			</Typography>
		</div>
	);
}
