import { ls } from './modules/nwd/ls.js';
import { up } from './modules/nwd/up.js';
import { cd } from './modules/nwd/cd.js';
import { read } from './modules/fs/read-file.js';
import { add } from './modules/fs/create-file.js';
import { createDir } from './modules/fs/create-dir.js';
import { renameFile } from './modules/fs/rename-file.js';
import { copy } from './modules/fs/copy-file.js';
import { move } from './modules/fs/move-file.js';
import { del } from './modules/fs/delete-file.js';
import { eol } from './modules/os/eol.js';
import { cpusInfo } from './modules/os/cpus.js';
import { home } from './modules/os/homedir.js';
import { username } from './modules/os/username.js';
import { architecture } from './modules/os/architecture.js';
import { hash } from './modules/hash/hash.js';
import { compress } from './modules/compress/compress.js';

export async function commandHandler(command, args) {
  switch (command) {
    case 'up':
      await up();
      break;

    case 'cd':
      await cd(...args);
      break;

    case 'ls':
      await ls();
      break;

    case 'cat':
      await read(...args);
      break;

    case 'add':
      await add(...args);
      break;

    case 'mkdir':
      await createDir(...args);
      break;

    case 'rn':
      await renameFile(...args);
      break;

    case 'cp':
      await copy(...args);
      break;

    case 'mv':
      await move(...args);
      break;

    case 'rm':
      await del(...args);
      break;

    case 'EOL':
      await eol();
      break;

    case 'cpus':
      await cpusInfo();
      break;

    case 'homedir':
      await home();
      break;

    case 'username':
      await username();
      break;

    case 'architecture':
      await architecture();
      break;

    case 'hash':
      await hash(...args);
      break;

    case 'compress':
      await compress(...args);
      break;

    default:
      console.log('Invalid input');
  }
}
