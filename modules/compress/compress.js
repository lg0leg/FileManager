import { cwd } from 'node:process';
import { isAbsolute, join, parse, resolve } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { pipeline } from 'stream/promises';

export const compress = async (...args) => {
  let pathToFile;

  if (isAbsolute(args[0])) {
    pathToFile = args[0];
  } else {
    pathToFile = resolve(cwd(), args[0]);
  }

  const fileName = parse(args[0]).name;

  const pathToDestination = join(args[1], `${fileName}.br`);

  try {
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(pathToDestination);
    const compressStream = createBrotliCompress();

    await pipeline(readStream, compressStream, writeStream);

    console.log('Successfully compressed');
  } catch (err) {
    throw new Error('Operation failed');
  }
};
