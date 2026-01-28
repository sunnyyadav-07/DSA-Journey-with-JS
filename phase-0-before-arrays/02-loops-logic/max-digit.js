/*

🚀Question : Find maximum digit in a number

*/
let number = 1004;
let copyNum = number;
let maxDigit = 0;
while (copyNum > 0) {
  let digit = copyNum % 10;
  if (digit > maxDigit) {
    maxDigit = digit;
  }
  copyNum = Math.floor(copyNum / 10);
}
console.log("Maximum digit in", number, "is ", maxDigit);
