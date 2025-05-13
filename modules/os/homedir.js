import { homedir } from 'os';

export const home = async () => {
  try {
    console.log(`Home directory: ${homedir()}`);
  } catch (err) {
    throw new Error('Operation failed');
  }
};
