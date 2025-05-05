import { chdir, cwd, stdin, stdout } from 'process';
import { homedir } from 'os';
import readline from 'readline';
import { commandHandler } from './operations-list.js';

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
  if (line === '.exit') {
    rl.close();
  }

  const [command, ...args] = line.split(' ');

  try {
    await commandHandler(command, args);
  } catch (error) {
    console.log('Operation failed');
  } finally {
    printCurrentDir();
    rl.prompt();
  }
});
