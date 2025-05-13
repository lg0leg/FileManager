import { EOL } from 'os';

export const eol = async () => {
  try {
    console.log(`${JSON.stringify(EOL)}`);
  } catch (err) {
    throw new Error('Operation failed');
  }
};
