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

		srm: new PublicKey('DLRk8GWo1YF4Kc5DrVQkaMDQti27VVGzR3Y1Tm8Frpyj'), msrm: new PublicKey('CrtnNeZg3tnRKnxxYxjsnkYNk1xRjhEci8ZJhuRAU7WX'), god: new PublicKey('HtbxQ8ZfenVhw5G8GSVK5nymbNXXo37fwwp9sjAjaBEx'), megaGod: new PublicKey('DKmDLZUUkfaFEQ3PWYezmoL3BwaEt1QHHYrLGPWuCMiV'), registryProgramId: new PublicKey( 'G5W9X8gjf2v8QH3D7aQrFhHSxMK7sxB1wQQpKPue2Nnv', ), stakeProgramId: new PublicKey( 'APU8W2tEUhiAAeaiEtYKdaMtB3KrBQXqyiinvjGurvBf', ), lockupProgramId: new PublicKey( 'Bk9M7yycNZiKkFtKDzzLQAhvQjWMqxYSFJzxFspL9uJ', ), retbufProgramId: new PublicKey( '3w2Q6XjS2BDpxHVRzs8oWbNuH7ivZp1mVo3mbq318oyG', ), metaEntityProgramId: new PublicKey( 'H6PGzjRWMBd2dajxL5ZjDc9LU4onSB5PbrqHS94Hgoed', ), registrar: new PublicKey('2w6i8FLi7DJ2UrTTGeKwkotgvM2k9FtfcP7vLfzT5pnx'), rewardEventQueue: new PublicKey('ozD1sY1rdizmPkr29PCyrWVrUC73HLQurTnvtsFmC6P'), safe: new PublicKey('2u8tjVJuz8P7EYa4WL3x2oHndjZLZNfA4vkWaa3SP75f'), retbuf: new PublicKey('8PUeeTe22fHJqTVB5wahQmqZjaHzDPC7arYhWSnTLqZA'), defaultEntity: new PublicKey( 'GQmf9Ag2EHC6RyJuxyEkUMMRzB8zhhSEq8Bmae7Wxyhi', ), },

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
