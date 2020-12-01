import { PublicKey } from '@solana/web3.js';

type Networks = { [label: string]: Network };

export type Network = {
  label: string;
  // Cluster.
  url: string;
  explorerClusterSuffix: string;

  // Mints and god accounts.
  srm: PublicKey;
  msrm: PublicKey;
  god: PublicKey;
  megaGod: PublicKey;

  // Programs.
  registryProgramId: PublicKey;
  stakeProgramId: PublicKey;
  lockupProgramId: PublicKey;
  retbufProgramId: PublicKey;
  metaEntityProgramId: PublicKey;

  // Program accounts.
  safe: PublicKey;
  registrar: PublicKey;
  rewardEventQueue: PublicKey;
  retbuf: PublicKey;

  // Misc.
  defaultEntity: PublicKey;
};

export const networks: Networks = {
  devnet: {
    // Cluster.
    label: 'Devnet',
    url: 'https://devnet.solana.com',
    explorerClusterSuffix: 'devnet',

    srm: new PublicKey('8Sxjus6yreTAp2DPXZ83bd8GD9i6hSzxLMr76Xt8C6ke'),
    msrm: new PublicKey('7Xi5bn5QXmKAFyJpytqUkZy7iQC65Hx2TEUiMZyNyv7k'),
    god: new PublicKey('GpJPnNrGpxdY9WJh5n49mG7LbzT2a7RFBPe9uTKkhZS7'),
    megaGod: new PublicKey('7zx5yNfd5G1v1UShZi1ALuvhaKmfonuo2tuZh1YChCmN'),
    registryProgramId: new PublicKey(
      'ARPaQYLwuJP3EYPpsauX2mrQPrJis6Rpuh9Fuy8r8pUd',
    ),
    stakeProgramId: new PublicKey(
      'HkFJbiTYuR3eaiHX9aLf9j3kopnz9qQhdmaFHfUGoUHg',
    ),
    lockupProgramId: new PublicKey(
      'Fm7SSYsgEdzVjMrqZ6LHGFDyu8FY6bB5m89p7qwhZsez',
    ),
    retbufProgramId: new PublicKey(
      '3w2Q6XjS2BDpxHVRzs8oWbNuH7ivZp1mVo3mbq318oyG',
    ),
    metaEntityProgramId: new PublicKey(
      'EEgUcMbGmEUA9RGHGjXziZSuyPxGZFX9JWGjmYB5vLs4',
    ),
    registrar: new PublicKey('A6FoLb75gNT3nXNfFbErb6BujeVvZhq3naGp2y7z34gY'),
    rewardEventQueue: new PublicKey(
      '7iv6ipiki1rWeMrMjzN7n6yZnsrRMDuJqzYsxcYsQkhL',
    ),
    safe: new PublicKey('5QkfDfNAyeA8WAkMDDJURfh1u2DrXcA9LJGzJPN7LJBt'),
    retbuf: new PublicKey('6LCcrt81XNj3xvRLNoQXMjG617c7Cn5Tsnrawm6r7TtS'),
    defaultEntity: new PublicKey(
      '6XxWax1K567xYHY63Ug9KsLCipWmUYzWshm7hEqDr8Wg',
    ),
  },

  // Fill in with your local cluster addresses.
  localhost: {
    // Cluster.
    label: 'Localhost',
    url: 'http://localhost:8899',
    explorerClusterSuffix: 'localhost',

    srm: new PublicKey('2cwt2zprhHEtWYyZ3wJDVxyXuGyK8v9dZeByax774CjX'),
    msrm: new PublicKey('ATdBFEbyi3YYvJyRmKx7u6Y6t9j8E3p9K1HpbTxAuDYa'),
    god: new PublicKey('5EHVN1WWZiqUsdVuvu96ftT5jTNLQfwgjC7mhBvauorX'),
    megaGod: new PublicKey('6hCxeSDuANpc3QFDj44pKznJyz2QkxF133ueBLaKwBzU'),
    registryProgramId: new PublicKey(
      '6k5Uk6nv6Vt9podP4MpBru6Lb8vnCo9RA1bj8b2eRXLE',
    ),
    stakeProgramId: new PublicKey(
      '4XddTfUWHgHWCkTDyqtbXGdfoqafinBtJaAHbVp4EDa8',
    ),
    lockupProgramId: new PublicKey(
      '44HnSQRNFVMd2BQDHoyp2PDeCLVdj57NmT1zHaqsNzmd',
    ),
    retbufProgramId: new PublicKey(
      'shmem4EWT2sPdVGvTZCzXXRAURL9G5vpPxNwSeKhHUL',
    ),
    metaEntityProgramId: new PublicKey(
      'B5DyuvjcZ2aVTCnmRC2sn3msJtrGR6igs1HVsfPgtbPr',
    ),
    registrar: new PublicKey('DroEuY7o4KUTk2FVsiMeAnjMDDDfQhSnKLFuNFeVxDrG'),
    rewardEventQueue: new PublicKey(
      'BCQ8N4njfnbstzmiP8aENsuPF4GyWwwsaV5kR8mShYtQ',
    ),
    safe: new PublicKey('EWKgfPY98P3aQnEw5mkHWjZRFny4g1aRuDUDWgSyhenj'),
    retbuf: new PublicKey('6qwALbhAYNTC8wazernhfm3tTtsNFW4EyQHs9BwDKrgn'),
    defaultEntity: new PublicKey(
      '5XMiLDnzuorg6dRit3MMm8wbAxmniEg6pMTLBnCnXMhZ',
    ),
  },
};
