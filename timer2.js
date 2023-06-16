const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const setTimer = (seconds) => {
  console.log(`Setting timer for ${seconds} seconds...`);
  setTimeout(() => {
    process.stdout.write('\x07'); // Beep
    console.log("Timer complete!");
  }, seconds * 1000);
};

const handleUserInput = (input) => {
  if (input === 'b') {
    process.stdout.write('\x07'); // Beep
    console.log("Immediate beep!");
  } else if (Number(input) >= 1 && Number(input) <= 9) {
    setTimer(Number(input));
  }
};

rl.on('line', (input) => {
  handleUserInput(input);
});

rl.on('close', () => {
  console.log("Thanks for using me, ciao!");
  process.exit();
});

console.log("Welcome to Timer App!");
console.log("Press 'a' for immediate beep or enter a number from 1 to 9 to set a timer.");
