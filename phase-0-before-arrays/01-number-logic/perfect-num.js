/*
🚀 Question: Check whether a number is Perfect number.
Approach: find the proper divisor then, sum of it then, finaly compare sum and number
*/
let number = 4;
let sum = 0;
if (number <= 1) {
  console.log("Not perfect number");
} else {
  for (let i = 1; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  if (sum === number) {
    console.log("Perfect number");
  } else {
    console.log("Not perfect number");
  }
}
