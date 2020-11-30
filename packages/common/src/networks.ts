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

    srm: new PublicKey('4VpGGQLXPsMRrZ9uzK9UB7ZjZr2L7PEEG2vBBQPfEy8m'),
    msrm: new PublicKey('7XvRejisiA6Snz6tmj7Un1ekPfc8oewgZU9A8Gnxtyst'),
    god: new PublicKey('AZkZipte7s51RhqaJDu5nd51vCjjDyhcvc3PVu9PiRXY'),
    megaGod: new PublicKey('9a2g7PTw96Uk2Kk4tKUbQ9MuR1dkLWPV9pQQXDTdnVtR'),
    registryProgramId: new PublicKey(
      'tGzspKf6sqBgZ4fJzux6KpBxjq2kgBK4NW1UqKZMt6p',
    ),
    stakeProgramId: new PublicKey(
      'B8NQfz6YkTuMKtB3Pfa84b3RfVUnaiCGavysFw7bhMNJ',
    ),
    lockupProgramId: new PublicKey(
      '6GaQD6MtdsJsQv27w3xVxaSFTUiTb1uUracNtrtxBUxM',
    ),
    retbufProgramId: new PublicKey(
      'shmem4EWT2sPdVGvTZCzXXRAURL9G5vpPxNwSeKhHUL',
    ),
    metaEntityProgramId: new PublicKey(
      'FyAHR3upG2kd92itzn24U9YUXk6B1HB7DaMUoP8rjuY8',
    ),
    registrar: new PublicKey('Dm3PaBGxGWTyDDRvxw9NNWkYaTKjRo8DDsLJtjPorGDb'),
    rewardEventQueue: new PublicKey(
      '6Gv8C6mqVfyeAYVwN8K9Zx8cN8KG4vfVjdgGWMn3xMv8',
    ),
    safe: new PublicKey('DKE4P2qMhoL3CZGeNsZZ2Kuz7rU3UwT3UySiou1v5AAz'),
    retbuf: new PublicKey('4KFD4ey2vFRdvrq9VsctLsXSrrhS6LxxKXc4CdFynXQZ'),
    defaultEntity: new PublicKey(
      'ARHqRH1oTt79YnRqtNPPdnMhRmCpnz678Nr74DEyHys8',
    ),
  },
};
