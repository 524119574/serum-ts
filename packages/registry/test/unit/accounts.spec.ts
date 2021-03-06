import { accounts } from '../../src';
import BN from 'bn.js';
import { PublicKey } from '@solana/web3.js';

// TODO: remove these tests once we have end-to-end tests with the Rust
//       program. Will make changes much easier/more flexible.
describe('Accounts', () => {
  it('Serializes and deserializes a Rust Registrar', async () => {
    const pk = new PublicKey('HsQhg1k93vEA326SXxnGj1sZrdupG7rj5T6g5cMgk1ed');
    const registrar = {
      initialized: true,
      authority: pk,
      nonce: 0,
      rewardActivationThreshold: new BN(100),
      maxStakePerEntity: new BN(0),
      withdrawalTimelock: new BN(0),
      deactivationTimelock: new BN(0),
      vault: pk,
      megaVault: pk,
      pool: pk,
      megaPool: pk,
      poolProgramId: pk,
    };
    const data = accounts.registrar.encode(registrar);
    const buf = Buffer.from([
      1,
      250,
      164,
      212,
      146,
      235,
      177,
      143,
      158,
      100,
      199,
      142,
      62,
      68,
      41,
      200,
      125,
      27,
      90,
      42,
      14,
      236,
      238,
      81,
      32,
      41,
      163,
      158,
      120,
      231,
      70,
      240,
      238,
      0,
      100,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      250,
      164,
      212,
      146,
      235,
      177,
      143,
      158,
      100,
      199,
      142,
      62,
      68,
      41,
      200,
      125,
      27,
      90,
      42,
      14,
      236,
      238,
      81,
      32,
      41,
      163,
      158,
      120,
      231,
      70,
      240,
      238,
      250,
      164,
      212,
      146,
      235,
      177,
      143,
      158,
      100,
      199,
      142,
      62,
      68,
      41,
      200,
      125,
      27,
      90,
      42,
      14,
      236,
      238,
      81,
      32,
      41,
      163,
      158,
      120,
      231,
      70,
      240,
      238,
      250,
      164,
      212,
      146,
      235,
      177,
      143,
      158,
      100,
      199,
      142,
      62,
      68,
      41,
      200,
      125,
      27,
      90,
      42,
      14,
      236,
      238,
      81,
      32,
      41,
      163,
      158,
      120,
      231,
      70,
      240,
      238,
      250,
      164,
      212,
      146,
      235,
      177,
      143,
      158,
      100,
      199,
      142,
      62,
      68,
      41,
      200,
      125,
      27,
      90,
      42,
      14,
      236,
      238,
      81,
      32,
      41,
      163,
      158,
      120,
      231,
      70,
      240,
      238,
      250,
      164,
      212,
      146,
      235,
      177,
      143,
      158,
      100,
      199,
      142,
      62,
      68,
      41,
      200,
      125,
      27,
      90,
      42,
      14,
      236,
      238,
      81,
      32,
      41,
      163,
      158,
      120,
      231,
      70,
      240,
      238,
    ]);
    const registrar2 = accounts.registrar.decode(buf);

    expect(data).toStrictEqual(buf);
    expect(JSON.stringify(registrar)).toEqual(JSON.stringify(registrar2));
  });
});
