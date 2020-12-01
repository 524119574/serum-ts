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

    srm: new PublicKey('EbFoysDhRKBxNK3zMjtVSB4wNQCG8S3FffPWYSXeNrUa'),
    msrm: new PublicKey('6BmXE68gnJSYRcjs5dmvHRgncN3dndXQcbNebsAFZoHR'),
    god: new PublicKey('22HAnLA1ejZYpqLVBjW552zMoJf8Vx1CFQPFeN6jedxG'),
    megaGod: new PublicKey('A5ycgvqFSfTkgBQ49JoT2nEK9NcYeBfqvR6i2vS66TXW'),
    registryProgramId: new PublicKey(
      '4uLtWikmLUCUJSwZnaqpMswrpXGvzSyYtypB4CvbkoTd',
    ),
    stakeProgramId: new PublicKey(
      '8JCNRkECN5MTxAbtxW9k3irT3sReihe14riCzDWGnjny',
    ),
    lockupProgramId: new PublicKey(
      '3WYFLzHqkXze5axsEB8Nw4LeA5Z5cxd8B5sadk4XCotA',
    ),
    retbufProgramId: new PublicKey(
      'shmem4EWT2sPdVGvTZCzXXRAURL9G5vpPxNwSeKhHUL',
    ),
    metaEntityProgramId: new PublicKey(
      'HAHxo9su9iexY43eeaucgpNm3M6MhZ91AhCr3kAotPSC',
    ),
    registrar: new PublicKey('FPoWPBvF8SobZAWFYfdo4vpRWpBK458UFnA95R7YkGWK'),
    rewardEventQueue: new PublicKey(
      'F3W5RVa76iA7HigapNbfXSycZXUViBa2akYyJo5vfv6',
    ),
    safe: new PublicKey('iYXP6gAbCDEow5K92e2bL8NsDcEjgihrnzutkmWBsWP'),
    retbuf: new PublicKey('2GNweTvjNduKdDTa8CRZSvCQp9CqvW6xVuut5wisTT1v'),
    defaultEntity: new PublicKey(
      '7ePnkmxzxEUe9Z71bgzCDj7gSSzBt3Wbr5GdiVakLP9t',
    ),
  },
};
