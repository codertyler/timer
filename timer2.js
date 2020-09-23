const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Press b for beep or enter alarm timer (1 - 9)   ', (input) => {
  if (input === "b") {
    process.stdout.write('\x07');
  } else if (input >= 1 && input <= 9) {
    console.log(`setting timer for ${input} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, input * 1000);
  } else {
    console.log("Invalid Entry!");
  }

 
  rl.on('SIGINT', () => {
    console.log("Thanks for using me, ciao!");
    rl.pause();
    });
  
});

