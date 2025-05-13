import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

export const hash = async (path) => {
  const hash = createHash('sha256');
  const readStream = createReadStream(path);

  try {
    await pipeline(readStream, hash);

    console.log(hash.digest('hex'));
  } catch (err) {
    throw new Error('Operation failed');
  }
};
