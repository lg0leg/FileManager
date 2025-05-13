import { stat, unlink } from 'fs/promises';

export const del = async (path) => {
  try {
    const stats = await stat(path);

    if (stats.isFile()) {
      await unlink(path);
    }
  } catch (err) {
    throw new Error('Operation failed');
  }
};
