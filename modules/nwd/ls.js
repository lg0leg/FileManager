import { readdir } from 'fs/promises';
import { cwd } from 'process';

export const ls = async () => {
  try {
    const files = await readdir(cwd());

    console.table(files);
  } catch (err) {
    throw new Error('Operation failed');
  }
};
