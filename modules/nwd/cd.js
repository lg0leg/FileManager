import { chdir, cwd } from 'process';
import { resolve, isAbsolute } from 'path';
import { stat } from 'fs/promises';

export const cd = async (path) => {
  try {
    let targetPath;

    if (isAbsolute(path)) {
      targetPath = path;
    } else {
      targetPath = resolve(cwd(), path);
    }

    const stats = await stat(targetPath);

    if (stats.isDirectory()) {
      chdir(targetPath);
    }
  } catch (err) {
    throw new Error('Operation failed');
  }
};
