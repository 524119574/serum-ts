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

    srm: new PublicKey('6jHHb8rdZi1QgBGZBocaWBHhjsa7KF71f6oS2L4mwqHp'),
    msrm: new PublicKey('CrAej8LoNbxQEMseJPuCDu1YczFEZdsSauGJQBeEeezC'),
    god: new PublicKey('9PmvYEZzbPJG5foxwoasfttYy3byy3s2Tw5E1X6AnviK'),
    megaGod: new PublicKey('9UNtsH721VXifiifgaVizGvuYCvmubxFJndRcubgudLT'),
    registryProgramId: new PublicKey(
      'Fdh9CPXkZwr94srE1HBZk2RVPdTa2VHbZBLYKEb6PeMp',
    ),
    stakeProgramId: new PublicKey(
      'EHTMFmexvyXJ6zYRPZ1LmKPzzyccPraNTP3dg6b9meaJ',
    ),
    lockupProgramId: new PublicKey(
      'ioKZXGwRwP4nAugYoGZFZRirNoSNe1h63gPxA51M1BX',
    ),
    retbufProgramId: new PublicKey(
      'shmem4EWT2sPdVGvTZCzXXRAURL9G5vpPxNwSeKhHUL',
    ),
    metaEntityProgramId: new PublicKey(
      'E195Ag6NU3UF5GNjWaH8ToFnF9oKoApR3NdQ9tJKnot4',
    ),
    registrar: new PublicKey('HoHuopAR9DjAurqbPVLArrcq7xAfZ483WWSU7gPBAZL1'),
    rewardEventQueue: new PublicKey(
      '9LMNdoFhQeL3Bukh4jvHWAqGNDq6qJ7Hx369gvBVP326',
    ),
    safe: new PublicKey('5hmkniQzGBAYrbBnBUisbLkRbKy7xn3JG1eS1tTYKarT'),
    retbuf: new PublicKey('2highpD452EMLwLVnApSamj1uQ4GHuABLkaUfL7s4Xuu'),
    defaultEntity: new PublicKey(
      'F5Ras1dCGhcPJ2rPbQotMLteX4hP5W8igsXdRXw6S8Ay',
    ),
  },
};
