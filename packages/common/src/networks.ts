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

    srm: new PublicKey('97tFkA5tsntMGWTeV7PtBRpbpTqrUJT4y7Z8wg1T9gAy'),
    msrm: new PublicKey('E8AxpTWP4qcAwPU6YZB4V6kN9B6Zqwz4HP1LDGrR4PD9'),
    god: new PublicKey('ETpCXKaiMiV3QmQZGXxRN6xE3ftb3iiM4de18wESaCTs'),
    megaGod: new PublicKey('4JJ4WweY6jG7iC4nczopTS7haHEmtuMxNbLQutqQweS5'),
    registryProgramId: new PublicKey(
      'G2nCKEnUtJT3aAfs384QtEgjuAR6cMz1zzC1TDhUagi7',
    ),
    stakeProgramId: new PublicKey(
      '41bT6MA5WXMVYQqjtky8xDUCVrmbRdn3my4qbmRJx5qr',
    ),
    lockupProgramId: new PublicKey(
      '4tsVY9MLHzbEzQsdoPxmfyXmBncpEzqmD1Ez8nStBMAp',
    ),
    retbufProgramId: new PublicKey(
      '3w2Q6XjS2BDpxHVRzs8oWbNuH7ivZp1mVo3mbq318oyG',
    ),
    metaEntityProgramId: new PublicKey(
      '7VongTv4khBPzfJViwdFBZy4N8XgminX83aj62PGbRcF',
    ),
    registrar: new PublicKey('6saEKF16BkrjtoFGQJrC3rySqHXEFDBzTCHr95vaJT3'),
    rewardEventQueue: new PublicKey(
      '62jcwL3QXyRfeKDgQRtnHL7aPwspLkr1fx6EEoFDojNa',
    ),
    safe: new PublicKey('3dnSc2faom3F5WeHZmCDHk71B6SxGmJQ17fevXcF3Smi'),
    retbuf: new PublicKey('7CdA1K2Y1V2hFZ4GS9uQBGZSyEGCaSSBaQeTfVyBGkXf'),
    defaultEntity: new PublicKey(
      'JEJxrWz7EDMEMX7aGm9f5pSrz9gougMkDf48UBPHR7uV',
    ),
  },

  // Fill in with your local cluster addresses.
  localhost: {
    // Cluster.
    label: 'Localhost',
    url: 'http://localhost:8899',
    explorerClusterSuffix: 'localhost',

    srm: new PublicKey('7pFfZSf5cPorNUGzhtBQhB98k9nzSJ39vp9i8Lxp3oWT'),
    msrm: new PublicKey('24dKGH3sPzZUWp9Ryh4PCGjPJ5UoeV3uZ7VfYFPbaKhZ'),
    god: new PublicKey('BdiuGsLUHt5urV7FzoaepW2uqCv8uDhTPEBFdZ5wbwez'),
    megaGod: new PublicKey('DfBnzq9iUhNVBHhWx8xWUS9yG5JL3BpT6ZRskpmY8frx'),
    registryProgramId: new PublicKey(
      '77KpPBv9YMbnCbPFQXstsvg4aw3qmg6cdop1vWd36HFA',
    ),
    stakeProgramId: new PublicKey(
      'HazFwVyS5q78RSiUdKRKSi1aCu34GaZeUCDkjte3s2uf',
    ),
    lockupProgramId: new PublicKey(
      '58bWMk9syC1J2x3PDFnMHXHHav5qrXsnvugeKLUqm8rM',
    ),
    retbufProgramId: new PublicKey(
      'shmem4EWT2sPdVGvTZCzXXRAURL9G5vpPxNwSeKhHUL',
    ),
    metaEntityProgramId: new PublicKey(
      'GjtoF3h5pbmmgq3fJVHCTmmgAXS51EdjhqrJ5MZvwqmA',
    ),
    registrar: new PublicKey('8jkeW6RDoTS4c3eBBdjg8MGKi5WgdYWSCZtPZRr172GK'),
    rewardEventQueue: new PublicKey(
      '9yYpivP725GWuD1sWDBpMit3jCHKxK8eT4BMWrtC4fHr',
    ),
    safe: new PublicKey('CuHHKugPNCAA6pCAGZCB88YD1W2uSL5ZJ8LNjU6UiwKc'),
    retbuf: new PublicKey('6WLY4kbSPEy6kj1zBtLdzZr8WKjULzcrShwELKoj95jz'),
    defaultEntity: new PublicKey(
      '3ZjMX9pdUHTYPY8xGVaidm2b4Jp1rDq2n69wmnA34KEm',
    ),
  },
};
