import { rename } from 'fs/promises';

export const renameFile = async (...args) => {
  try {
    const pathToFile = args[0];
    const newFilename = args[1];
    await rename(pathToFile, newFilename);
  } catch (err) {
    throw new Error('Operation failed');
  }
};
