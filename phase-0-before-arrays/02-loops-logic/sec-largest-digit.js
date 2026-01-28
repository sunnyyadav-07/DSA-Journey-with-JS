/*

🚀Question : Find second largest digit in a number.

*/
let number = 67426;
let copyNum = number;
let largestDigit = -1;
let secondLargestDigit = -1;
while (copyNum > 0) {
  let digit = copyNum % 10;
  if (digit > largestDigit) {
    largestDigit = digit;
  } else if (digit !== largestDigit && digit > secondLargestDigit) {
    secondLargestDigit = digit;
  }
  copyNum = Math.floor(copyNum / 10);
}

if (secondLargestDigit === -1) {
  console.log("Second largest digit does not exit!");
} else {
  console.log("First largest digit", largestDigit);
  console.log("Second largest digit", secondLargestDigit);
}
