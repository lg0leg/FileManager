import { dirname } from 'path';
import { chdir, cwd } from 'process';

export const up = async () => {
  const currentDir = cwd();
  const parentDir = dirname(currentDir);

  if (parentDir !== currentDir) {
    try {
      chdir(parentDir);
    } catch (err) {
      throw new Error('Operation failed');
    }
  } else {
    console.log("You're already in the root directory!");
  }
};
