import { basename, join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export const copy = async (...args) => {
  const fileName = basename(args[0]);
  const pathToFile = args[0];
  const pathToNewDirectory = join(args[1], fileName);

  try {
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(pathToNewDirectory);
    await pipeline(readStream, writeStream);
  } catch (err) {
    throw new Error('Operation failed');
  }
};
