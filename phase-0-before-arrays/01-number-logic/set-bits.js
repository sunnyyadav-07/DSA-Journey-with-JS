/*
🚀 Question : Count total set bits in a number.

*/

let num = 13;
let setBits = 0;
if (num === 0) {
  setBits = 0;
} else if (num === 1) {
  setBits = 1;
} else {
  let rem = "";
  while (num > 0) {
    rem = (num % 2) + rem;
    num = Math.floor(num / 2);
  }
  for (let i = 0; i < rem.length; i++) {
    if (rem[i] === "1") {
      setBits++;
    }
  }
}
console.log(setBits);

// Bitwise AND Method
// let num = 13;
// let setBits = 0;

// while (num > 0) {
//   setBits += num & 1;
//   num = num >> 1;
// }

// console.log(setBits); // 3



// optimized approach  ✅
// Brian Kernighan Algorithm (BEST)
// because the loop will run for total number of set bits available in the number, because  it clears the rightmost set bit by (n & n-1) formula
// let num = 13;
// let setBits = 0;

// while (num > 0) {
//   num = num & (num - 1);
//   setBits++;
// }

// console.log(setBits); // 3
