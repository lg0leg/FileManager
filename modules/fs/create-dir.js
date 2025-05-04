import { mkdir } from 'fs/promises';

export const createDir = async (name) => {
  try {
    await mkdir(name);
    console.log(`The ${name} directory was created!`);
  } catch (err) {
    throw new Error('Operation failed');
  }
};
