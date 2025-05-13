import { cwd } from 'node:process';
import { isAbsolute, resolve } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'stream/promises';

export const decompress = async (...args) => {
  let pathToFile;

  if (isAbsolute(args[0])) {
    pathToFile = args[0];
  } else {
    pathToFile = resolve(cwd(), args[0]);
  }

  const pathToDestination = args[1];

  try {
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(pathToDestination);
    const decompressStream = createBrotliDecompress();

    await pipeline(readStream, decompressStream, writeStream);

    console.log('Successfully decompressed');
  } catch (err) {
    throw new Error('Operation failed');
  }
};

//format: decompress file file
