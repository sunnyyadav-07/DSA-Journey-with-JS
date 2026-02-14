/*

🚀Question : Max element from array

*/

let arr = [10, 20, 50, 98, 56];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
