/*

🚀 Question : Find sum of prime digits in a number.

*/
let number = 23745;
let copyNum = number;
let sum = 0;

while (number > 0) {
  let digit = number % 10;
  if (digit === 2 || digit === 3 || digit === 5 || digit === 7) {
    sum += digit;
  }
  number = Math.floor(number / 10);
}
if (sum === 0) {
  console.log("No prime digits");
} else {
  console.log("Prime digits sum : ", sum);
}
