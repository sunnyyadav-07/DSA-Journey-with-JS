/*

🚀Question : Check if digits are strictly increasing.

*/
let number = 122345;
let copyNum = number;
let prevDigit = 0;
prevDigit = copyNum % 10;
copyNum = Math.floor(copyNum / 10);
let isIncreasing = true;

while (copyNum > 0) {
  let nextDigit = copyNum % 10;

  if (nextDigit >= prevDigit) {
    isIncreasing = false;
    break;
  }
  prevDigit = nextDigit;
  copyNum = Math.floor(copyNum / 10);
}

if (isIncreasing) {
  console.log("Digits are in strict increasing order in ", number);
} else {
  console.log("Digits are not in strict increasing order in ", number);
}
