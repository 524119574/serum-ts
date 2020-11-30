import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { PublicKey } from '@solana/web3.js';
import { State as StoreState } from '../../store/reducer';

type Props = {
  style?: any;
  mint?: PublicKey | null;
  variant?: 'outlined' | 'standard';
  onChange: (from: PublicKey) => void;
};

export default function VestingAccountsSelect(p: Props) {
  const { mint, variant, onChange, style } = p;
  const vestings = useSelector((state: StoreState) => {
    if (!mint) {
      return [];
    }
    return state.lockup.vestings.filter(v => v.account.mint.equals(mint));
  });
  const [fromAccount, setFromAccount] = useState('');
  return (
    <Select
      style={style}
      variant={variant}
      fullWidth
      value={fromAccount}
      onChange={e => {
        const pk = e.target.value as string;
        setFromAccount(pk);
        onChange(new PublicKey(pk));
      }}
    >
      {vestings.length === 0 ? (
        <MenuItem value={''}>No vesting accounts found</MenuItem>
      ) : (
        vestings.map(v => {
          return (
            <MenuItem value={v.publicKey.toString()}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>{`${v.publicKey.toString()}`}</div>
                <div
                  style={{ float: 'right', color: '#ccc' }}
                >{`${v.account.balance.sub(v.account.whitelistOwned).toString()}`}</div>
              </div>
            </MenuItem>
          );
        })
      )}
    </Select>
  );
}
