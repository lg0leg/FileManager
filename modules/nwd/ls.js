import { readdir } from 'fs/promises';
import { cwd } from 'process';

export const ls = async () => {
  try {
    const allFiles = await readdir(cwd(), { withFileTypes: true });
    const files = [];
    const folders = [];

    allFiles.forEach((item) => {
      if (item.isDirectory()) {
        folders.push({ Name: item.name, Type: 'directory' });
      } else {
        files.push({ Name: item.name, Type: 'file' });
      }
    });

    const sortFiles = files.sort((a, b) => a.Name.localeCompare(b.Name));
    const sortFolders = folders.sort((a, b) => a.Name.localeCompare(b.Name));
    const res = [...sortFolders, ...sortFiles];

    console.table(res);
  } catch (err) {
    throw new Error('Operation failed');
  }
};
