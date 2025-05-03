export const cd = async (path) => {
  try {
    console.log(path);
  } catch (err) {
    throw new Error('Operation failed');
  }
};
