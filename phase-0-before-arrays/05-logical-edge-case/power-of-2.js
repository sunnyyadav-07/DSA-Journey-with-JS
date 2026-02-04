/*

🚀Question : Check if number is power of 2

*/

let number = 16;
let temp = number;
let isPowerOfTwo = true;
if (temp <= 0) {
  isPowerOfTwo = false;
} else {
  while (temp > 1) {
    if (temp % 2 !== 0) {
      isPowerOfTwo = false;
      break;
    }
    temp = Math.floor(temp / 2);
  }
}
let result = isPowerOfTwo ? "yes" : "no";
console.log(result);


// bitwise method
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(12)); // false