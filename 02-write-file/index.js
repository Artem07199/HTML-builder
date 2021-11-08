const fs = require('fs');
const path = require('path');
const readline = require('readline');
const process = require('process');
const way = fs.createWriteStream(path.resolve('./02-write-file/text.txt'), {flags: 'a'});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});
rl.write('Please, write your text here:\n');
rl.prompt();
rl.on('line', line => {
  if (line === 'exit') {
    rl.close(); 
  } else {
    way.write(line + '\n');
    console.log('More: ');
    rl.prompt();
  }
});
process.on('exit', () => {
  console.log('Goodbye');
});

