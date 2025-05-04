import { chdir, cwd, stdin, stdout } from 'process';
import { homedir } from 'os';
import readline from 'readline';
import { ls } from './modules/nwd/ls.js';
import { up } from './modules/nwd/up.js';
import { cd } from './modules/nwd/cd.js';
import { read } from './modules/fs/read-file.js';

const args = process.argv.slice(2);
const username = args.find((arg) => arg.startsWith('--username=')).replace('--username=', '');

// chdir(homedir());

const printCurrentDir = () => {
  console.log(`You are currently in ${cwd()}`);
};

if (!username) {
  console.log('Please provide a username with --username=your_username');
  process.exit(1);
} else {
  console.log(`Welcome to the File Manager, ${username}!`);
  printCurrentDir();
  console.log('Print commands and wait for results');
}

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
  process.exit(0);
});

rl.on('line', async (line) => {
  const [command, ...args] = line.split(' ');

  try {
    // switch (line.trim()) {
    switch (command) {
      case '.exit':
        rl.close();
        break;

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

      default:
        console.log('Invalid input');
    }
  } catch (error) {
    console.log('Operation failed');
  } finally {
    printCurrentDir();
    rl.prompt();
  }

  // printCurrentDir();
  // rl.prompt();
});
