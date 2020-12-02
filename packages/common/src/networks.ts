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

srm: new PublicKey('EFZ667XmHnBNNgyk7z5Sgnsyiz37rsFrukvHmQAFVbZC'), msrm: new PublicKey('EqZkmqbndtH1pd5GWVCECSUg2Ubxbh29UZjUBEuS7VjL'), god: new PublicKey('AcSDBw59uHp6b1zDnaZYD8tVJJJuDq8yyGMGd5spLA1s'), megaGod: new PublicKey('EZ166w2g55u7DWjcuRUwHymAadvveMmaXrdrdRtdRvzz'), registryProgramId: new PublicKey( '4izVhM6tHymJnQ1VQCCnGpW3oLKecZhLEgzVCgoP66yQ', ), stakeProgramId: new PublicKey( '3pXQkMQQ5kVtwJefkTV3PZ89dWcDrLME8ifdhhMVeHMc', ), lockupProgramId: new PublicKey( 'FnBJyALjHVq9iscXanDmDePzveJ4oe8evT6PhFamfsmx', ), retbufProgramId: new PublicKey( 'shmem4EWT2sPdVGvTZCzXXRAURL9G5vpPxNwSeKhHUL', ), metaEntityProgramId: new PublicKey( 'D6Eo4magtJ6ig6xn1NtdmpoLUDb4qex5ovYW9f4rx6TV', ), registrar: new PublicKey('58Juhb9KaRFZQQXRr3qx4w1Pyjt4pkmSHCvdm58nnoHc'), rewardEventQueue: new PublicKey('4xhCZqLv5KfZTPiDcJahLZsVNLwEhQ9dSAq6KGmeMfS8'), safe: new PublicKey('HgyKzKnRjKsbRGu2kUFEnFUvmMDccKpT5z7ExWb1hyy5'), retbuf: new PublicKey('4BowP8D9r96TJDRA6JYukFjzfKNA8Nd9JC3zFm4ZzaKA'), defaultEntity: new PublicKey( '4Ka1ccqAxK1BbZEkn8dtDT7ozcbbESUs6fUHYceEVETL', ), }
};
