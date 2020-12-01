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

    srm: new PublicKey('8eyJVkkhgx9RnBDb2M58AcyDRvSjc2nif4aGKEsdRbXz'),
    msrm: new PublicKey('BhKvUJDbV11Qhf9S5gGigNNxVwo5tvxRoAg2pH4toNQD'),
    god: new PublicKey('4emMGRkY2a7FvAerJjtVVsP9K4L8zREu9murqUDRKYJT'),
    megaGod: new PublicKey('XUACfr2jXp7UCLwYdCSBgz5BuBBgWwL91zRMgz6X3Hn'),
    registryProgramId: new PublicKey(
      'CeSyPxrUncwTrbaQcMiFF2fdRC5RhuRNoPTGnxYLzvJa',
    ),
    stakeProgramId: new PublicKey(
      'CQYZ98X4gxdDWnDGoqQsbnEivCjktYACst1UJH3WjU3F',
    ),
    lockupProgramId: new PublicKey(
      '72HyNuK8C8W8DyFrbWEUSEiwU1TBkBj3YLkrcuZbevpV',
    ),
    retbufProgramId: new PublicKey(
      'shmem4EWT2sPdVGvTZCzXXRAURL9G5vpPxNwSeKhHUL',
    ),
    metaEntityProgramId: new PublicKey(
      'Gm6sCeAeit1YbLDpWVEdnELALYzv3q8UiJoNhTfBVPHj',
    ),
    registrar: new PublicKey('CX3e6TQmowe8Q7EcA5yvgD2kCNy1HJGuHiNyhRzAWhox'),
    rewardEventQueue: new PublicKey(
      '29WFqyxHB6YetDAFxAnXoSQc6NqtPYcn31X7vDZqepBS',
    ),
    safe: new PublicKey('5yv3FGfEHT9LqwzGX2X8gpTCHPynwaeyQ22bFiooDARK'),
    retbuf: new PublicKey('2k2nH7H2of3Q3dicz8gRbq8Md3eUKftTD54H59me6Rqd'),
    defaultEntity: new PublicKey(
      '6R8XEot1PpDXAeuYhNg4ycnySZWDZe2XmLFLXmqzKVjv',
    ),
  },
};
