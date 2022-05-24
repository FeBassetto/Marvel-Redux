import md5 from 'md5';

const ts = '1';
const publicKey = '';
const privateKey = '';
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiKey = {
  ts,
  apikey: publicKey,
  hash,
};

export default apiKey;