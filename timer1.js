let timeInput = process.argv.slice(2);



for (const time of timeInput) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
}
