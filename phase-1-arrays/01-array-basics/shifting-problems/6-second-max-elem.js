/*

🚀Question :Find second max element from array

*/

// let arr = [10, 20, 50, 98, 56]; // case 1
let arr = [-5, -10, -20, -8, -6]; // case 2

let max = 0;
let secMax = 0;
if (arr[0] > arr[1]) {
  max = arr[0];
  secMax = arr[1];
} else {
  max = arr[1];
  secMax = arr[0];
}
for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    secMax = max;
    max = arr[i];
  } else if (max !== arr[i] && arr[i] > secMax) {
    secMax = arr[i];
  }
}
console.log(max);
console.log(secMax);
