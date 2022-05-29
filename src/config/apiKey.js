import md5 from 'md5';

const ts = '1';
const publicKey = '5bc77f3e7b994f6b70ee94c67f7a2633';
const privateKey = 'c1607fc578e4a23331d2bad331e03d5ef443dba4';
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiKey = {
  ts,
  apikey: publicKey,
  hash,
};

export default apiKey;