import { basename, join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { stat, unlink } from 'fs/promises';

export const move = async (...args) => {
  const fileName = basename(args[0]);
  const pathToFile = args[0];
  const pathToNewDirectory = join(args[1], fileName);

  try {
    const stats = await stat(pathToFile);

    if (stats.isFile()) {
      const readStream = createReadStream(pathToFile);
      const writeStream = createWriteStream(pathToNewDirectory);
      await pipeline(readStream, writeStream);

      await unlink(pathToFile);
    }
  } catch (err) {
    throw new Error('Operation failed');
  }
};
