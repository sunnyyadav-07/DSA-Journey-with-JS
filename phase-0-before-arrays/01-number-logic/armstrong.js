/*
🚀 Question: Check whether a number is Armstrong.
Approach: Extract digits, calculate power, compare with original
*/
let number = 0;
let copyNum = number;
let n=number
let digits = 0;
let sum = 0;

while (number > 0) {
  number = Math.floor(number / 10);
  digits++;
}
while (copyNum > 0) {
  sum = sum + power(copyNum % 10, digits);
  copyNum = Math.floor(copyNum / 10);
}
if(n===0){
  digits=1
  console.log('Armstrong')
}
if(n===sum)console.log('Armstrong')
  else console.log('Not armstrong')
function power(base, exp) {
  let result = 1;
  for (let i = 1; i <= exp; i++) {
    result *= base;
  }
  return result;
}

