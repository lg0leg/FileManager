import { userInfo } from 'os';

export const username = async () => {
  try {
    console.log(`Username: ${userInfo().username}`);
  } catch (err) {
    throw new Error('Operation failed');
  }
};
