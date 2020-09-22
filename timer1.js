let timeInput = process.argv.slice(2);

let stringOrNo = "";

for (const items of timeInput) {
  if(typeof items === "string") {
    stringOrNo = true;
  } else {
    stringOrNo = false;
  }
 }

if (timeInput.length === 0) {
  console.log("There was no timer input");
} else if (timeInput < 0) {
  console.log("You have entered a negative number, please provide a positive number")
} else if (stringOrNo)
 {
  console.log("You didn't enter a number") 
} else {
  for (const time of timeInput) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}



