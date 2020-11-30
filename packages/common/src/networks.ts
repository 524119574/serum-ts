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
