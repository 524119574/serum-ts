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

    srm: new PublicKey('H5wLXfiqtmGi4ev26tUdRZX72aCBMDV3Pvrhs8Y1kqAB'),
    msrm: new PublicKey('3Lik4QqQcVWxdbWMPq2TwkZtdJ6q2b8Leq3oJtJ7Kdvc'),
    god: new PublicKey('3kPUU1rNv2mgF2eHiQ9ASXW3h3oGLU2gd6Vko24zDGV8'),
    megaGod: new PublicKey('2FXpbTjXL19xR1wgTAYkbzezmaVBb8Nq36mEU4hLbei1'),
    registryProgramId: new PublicKey(
      '8cWE1kMSSsPARK8HDKPKn3CwiQNLY5BnMgeLkf9a7cf7',
    ),
    stakeProgramId: new PublicKey(
      '6SRAkzPewufqaksdyoi2Bm11fsdfEKQEUhqt39jP1xAH',
    ),
    lockupProgramId: new PublicKey(
      'Dpn2ocEBcw7Egq9zPqHs4KaoNSQ2hkp3Z17944i3JVVq',
    ),
    retbufProgramId: new PublicKey(
      'shmem4EWT2sPdVGvTZCzXXRAURL9G5vpPxNwSeKhHUL',
    ),
    metaEntityProgramId: new PublicKey(
      'HukhW7vi1qNtmUdwPpsMFxa4fcwDBKfChUyq6yVoB39f',
    ),
    registrar: new PublicKey('HkHT338nBQn9ykYsmUVhwBnoJqwJAcV5cKWHRJWRwRiF'),
    rewardEventQueue: new PublicKey(
      'A7esEQBbmZwCHZmPMecRS66UpvFFBzkcQyHkiZHYYQin',
    ),
    safe: new PublicKey('ERXnUzAfWdTAEsLh8nbJmr1CaBsJJZSGe7t9q3fShy49'),
    retbuf: new PublicKey('J3oASzmAYnGaFgkpj4w5wXxn82jX67YwnFJtarhTHy72'),
    defaultEntity: new PublicKey(
      '76uKR9Xw1Foert1EEhurdsTbYKWJ8GCTVBJyFUjN8okn',
    ),
  },
};
