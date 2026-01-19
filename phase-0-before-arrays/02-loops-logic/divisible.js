/*
🚀Question : Count numbers divisible by both sum & product of digits.

*/
let count = 0;
for (let i = 1; i <= 100; i++) {
  let sum = 0;
  let product = 1;
  let num = i;
  while (num > 0) {
    let digit = num % 10;
    if (digit === 0) {
      product = 0;
      break;
    }
    product = product * digit;
    sum = sum + digit;
    num = Math.floor(num / 10);
  }
  if (product !== 0 && i % sum === 0 && i % product === 0) {
    count++;
  }
}
console.log("Valid numbers count : ", count);
