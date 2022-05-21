import md5 from 'md5';

const ts = 'ts';
const publicKey = 'key';
const privateKey = 'key';
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiKey = {
  ts,
  apikey: publicKey,
  hash,
};

export default apiKey;