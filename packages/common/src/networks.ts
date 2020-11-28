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

    srm: new PublicKey('8kSodHgaRdMCv8q5GEGiQi1ZknHjMN8bA6vszJwa4Y4k'),
    msrm: new PublicKey('5KsKoWUGMH3HaA1peYDamgtCyHy657iKtJKb837teubq'),
    god: new PublicKey('22aTXdUHcrAGbqNQYqAej8CzbtTmmP4HCAf9scH8BdhU'),
    megaGod: new PublicKey('CHhfbKzdiMZHBqNbutnqdMWd2B65GLwmccTnufpR9MZG'),
    registryProgramId: new PublicKey(
      '3F7wc2FTjH1cUKjSC1exx6whvymnRJL7DXPUmxdJyba5',
    ),
    stakeProgramId: new PublicKey(
      '4HpLCmkFC5LDJTuJVDWYoUgHxpqaYTmUAnCUREns5tHe',
    ),
    lockupProgramId: new PublicKey(
      '7D8BYZo12HQKPMhrXf4mJDyQ1b6emquQ14tiP9yx7Bpx',
    ),
    retbufProgramId: new PublicKey(
      'shmem4EWT2sPdVGvTZCzXXRAURL9G5vpPxNwSeKhHUL',
    ),
    metaEntityProgramId: new PublicKey(
      'Fzht2rymtc6W9NofHnxnhvZD8dc8CihbnhfGc4Lu6XtY',
    ),
    registrar: new PublicKey('A1Qeou7x69auhy1nSkMcvr1hh2cJTCotKKpujxFuQocL'),
    rewardEventQueue: new PublicKey(
      'MM6j5E5zbanQofZeDYp14Wvivw3BUVNgN3NUJ4AXLHG',
    ),
    safe: new PublicKey('2Lp4gPjho7r9we84xHD2hpRKAQDauF5sdZyXxTsfWQWn'),
    retbuf: new PublicKey('69zeA9UJW5sbtg3d8k75m1HNvQzT8ahQdnZnSUdaRawU'),
    defaultEntity: new PublicKey(
      '698ZS6tsutrcDNmEwXzdbDTxM2YkSMNU1ygHyG2eDpSx',
    ),
  },

  // Fill in with your local cluster addresses.
  localhost: {
    // Cluster.
    label: 'Localhost',
    url: 'http://localhost:8899',
    explorerClusterSuffix: 'localhost',

    srm: new PublicKey('CuiSBskzyi1mZamZSDnhZcrKHJBdh7mvDhQ27qnJGM2g'),
    msrm: new PublicKey('HcfvBxy2fkvCVEEwhgKdioXMJ9J3aSTJXZapFT8AfwRm'),
    god: new PublicKey('2kry6C5H6vQP2pkV7x8aiCmWXB1yYqRzbj3KsSd4XCHf'),
    megaGod: new PublicKey('FVp6qxJtyPDNqiZ9Eg8DB7wTP64YddcyRn7Gu1ofsMpn'),
    registryProgramId: new PublicKey(
      'CZxvc5cTpmg5ae2keRmjeYAwyhGJhohygKeX9SzjWJFY',
    ),
    stakeProgramId: new PublicKey(
      'MUMoWYKqf4hPDNSR1S8drZSahJ8mWCn7Wo1GRf2h5uG',
    ),
    lockupProgramId: new PublicKey(
      '7TjHrBTww1mCfHDAJ61jig9M2V8DDVQj7odgh1RdcrJU',
    ),
    retbufProgramId: new PublicKey(
      'shmem4EWT2sPdVGvTZCzXXRAURL9G5vpPxNwSeKhHUL',
    ),
    metaEntityProgramId: new PublicKey(
      '7GA1fyNYUcCuq8P3anX1FuaguyMr13zaCowpZcc63JBN',
    ),
    registrar: new PublicKey('44VeSn4DUacUoxjb3MW1fqUosVo7XwWau8EwzLSHUjdU'),
    rewardEventQueue: new PublicKey(
      '6ZMCMkrA9xVZPfMa1CL9d1H2h83cqDpmBQFuRsArnDq3',
    ),
    safe: new PublicKey('7FwHhR74Gd59K9LmHfVYpctCratZMBfv3vVYbxrFXWXJ'),
    retbuf: new PublicKey('Day2MEJLuSQf27Wj28fwTBQaVPdDmG3y2myWEYV12uvS'),
    defaultEntity: new PublicKey(
      'D7fbXbd9qutM28NkTMFBaGAgPTGkcdQSVCk3Cx2ZiZPQ',
    ),
  },
};
