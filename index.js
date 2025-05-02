const args = process.argv.slice(2);
const username = args.find((arg) => arg.startsWith('--username=')).replace('--username=', '');

console.log(`Welcome to the File Manager, ${username}!`);
