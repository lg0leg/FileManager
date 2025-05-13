import { writeFile } from 'fs/promises';

export const add = async (name) => {
  try {
    await writeFile(name, '', { flag: 'wx' });
    console.log(`The ${name} file was created!`);
  } catch (err) {
    throw new Error('Operation failed');
  }
};
