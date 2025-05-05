import { arch } from 'process';

export const architecture = async () => {
  try {
    console.log(`Architecture: ${arch}`);
  } catch (err) {
    throw new Error('Operation failed');
  }
};
