/*

🚀Question : Count trailing zeros in factorial

*/

let number = 10;

// brute-force approach

// let zeroCount = 0;
let fact = 1;
for (let i = 1; i <= number; i++) {
  fact = fact * i;
}
// let temp=fact

// let previousDigit = 0;
// while (temp > 0) {
//   let digit = temp % 10;
//   if ( digit === 0) {
//     zeroCount++;
//   } else break;
//   temp = Math.floor(temp / 10);
// }
// console.log(fact)
// console.log(zeroCount)

// DSA approach
let count = 0;
while (number > 0) {
  number = Math.floor(number / 5);
  count += number;
}
console.log(count)
console.log(fact)