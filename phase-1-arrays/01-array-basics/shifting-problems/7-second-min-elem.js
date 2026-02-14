/*

🚀Question :Find second min element from array

*/

let arr = [10, 20, 50, 98, 56]; // case 1
// let arr = [-5, -10, -20, -8, -6]; // case 2

let min = 0;
let secMin = 0;
if (arr[0] > arr[1]) {
  min = arr[1];
  secMin = arr[0];
} else {
  min = arr[0];
  secMin = arr[1];
}

for (let i = 2; i < arr.length; i++) {
  if (arr[i] < min) {
    secMin = min;
    min = arr[i];
  } else if (min !== arr[i] && arr[i] < secMin) {
    secMin = arr[i];
  }
}
console.log(min);
console.log(secMin);
