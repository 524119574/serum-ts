import { u8, struct, Layout } from 'buffer-layout';
import { i64, publicKey, rustEnum, u64, vecU8 } from '@project-serum/borsh';
import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { WhitelistEntry, WHITELIST_ENTRY_LAYOUT } from './accounts/whitelist';

export type LockupInstruction =
  | Initialize
  | CreateVesting
  | Redeem
  | WhitelistWithdraw
  | WhitelistDeposit
  | WhitelistAdd
  | WhitelistDelete
  | SetAuthority;

type Initialize = {
  authority: PublicKey;
};

type CreateVesting = {
  beneficiary: PublicKey;
  endTs: BN;
  periodCount: BN;
  depositAmount: BN;
};

type Redeem = {};

type WhitelistWithdraw = {
  amount: BN;
  instructionData: Buffer;
};

type WhitelistDeposit = {
  instructionData: Buffer;
};

type WhitelistAdd = {
  entry: WhitelistEntry;
};

type WhitelistDelete = {
  entry: WhitelistEntry;
};

type SetAuthority = {
  newAuthority: PublicKey;
};

const LOCKUP_INSTRUCTION_LAYOUT: Layout<LockupInstruction> = rustEnum([
  struct([publicKey('authority')], 'initialize'),
  struct(
    [
      publicKey('beneficiary'),
      i64('endTs'),
      u64('periodCount'),
      u64('depositAmount'),
      u8('nonce'),
    ],
    'createVesting',
  ),
  struct([u64('amount')], 'redeem'),
  struct([u64('amount'), vecU8('instructionData')], 'whitelistWithdraw'),
  struct([vecU8('instructionData')], 'whitelistDeposit'),
  struct([WHITELIST_ENTRY_LAYOUT.replicate('entry')], 'whitelistAdd'),
  struct([WHITELIST_ENTRY_LAYOUT.replicate('entry')], 'whitelistDelete'),
  struct([publicKey('newAuthority')], 'setAuthority'),
]);

export function decode(data: Buffer): LockupInstruction {
  return LOCKUP_INSTRUCTION_LAYOUT.decode(data);
}

export function encode(i: LockupInstruction): Buffer {
  const buffer = Buffer.alloc(1000); // TODO: use a tighter buffer.
  const len = LOCKUP_INSTRUCTION_LAYOUT.encode(i, buffer);
  return buffer.slice(0, len);
}
