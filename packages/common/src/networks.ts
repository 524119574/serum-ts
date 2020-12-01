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

    srm: new PublicKey('2cF7c8G3BK5qKF8LNqM7faSeLEyQsGJHCHVwZFKWbJtc'),
    msrm: new PublicKey('5Q2W1rzEMiQCepQ3SHJXLYFEvy9Y6to5UzMheGQJ2kAg'),
    god: new PublicKey('Dk9ix6pNMSU1aAFXBJmQiJsj2VS4PUtqSYk8UCS6TTQy'),
    megaGod: new PublicKey('48wVG1CaRG3NdXk882BkWHpALxCNKgYuKie3cvnNceis'),
    registryProgramId: new PublicKey(
      'HnJT3fDpvoJRJs4Ep8KUobpUpGms59SM7VhijBpuHqaB',
    ),
    stakeProgramId: new PublicKey(
      'A6dAqQPjQifH51gTdyEe6N8K2Xi5E25FNMLnvpZurbDN',
    ),
    lockupProgramId: new PublicKey(
      'FsPCjwmPLQm1CLp3S78XHsHVEKiTLYBP75ogtWMRXKL',
    ),
    retbufProgramId: new PublicKey(
      '3w2Q6XjS2BDpxHVRzs8oWbNuH7ivZp1mVo3mbq318oyG',
    ),
    metaEntityProgramId: new PublicKey(
      '2qc6iMR7h8ghohhCeLWwdRa7pJ5xXYTi9fVrnKkbidwy',
    ),
    registrar: new PublicKey('9ULmsGTtk63RdKQT7QAKEr8Dtm5GdVZuCW4FazFpaDGE'),
    rewardEventQueue: new PublicKey(
      'FtDGWVjv21PAmsPZ64HkinwX5b1E6MnaVyHWg4MDawaz',
    ),
    safe: new PublicKey('6jtwucztF9ZLzoC1BnfArRF7Ep1xB4VvJGcYgX8UAriJ'),
    retbuf: new PublicKey('FdWnZT21N8dhxiUdAbtH4QdCkzwaJpFZhi1tS44sJbpk'),
    defaultEntity: new PublicKey(
      'BcsmPF7G7TN8TH2yZboxaLgmnC3NfYmEGjCnXyXDVJC7',
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
