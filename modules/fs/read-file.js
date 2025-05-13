import { resolve, isAbsolute } from 'path';
import { cwd } from 'process';
import { createReadStream } from 'fs';

export const read = async (path) => {
  let targetPath;

  if (isAbsolute(path)) {
    targetPath = path;
  } else {
    targetPath = resolve(cwd(), path);
  }

  const readStream = createReadStream(targetPath, 'utf8');

  readStream.on('data', (chunk) => {
    console.log(chunk);
  });

  readStream.on('error', (err) => {
    console.log('Operation failed');
  });

  readStream.on('end', () => {
    console.log('-------- end of file --------');
  });
};
