/*

Question : Find missing number (0 to n) in the array

*/

let arr = [0, 3, 1];
let missingNumber = null; // space complexity O(1)
let n = arr.length;
let totalSum = (n * (n + 1)) / 2;
let arrSum = 0;
for (let i = 0; i < arr.length; i++) {
  arrSum += arr[i];
}
console.log("missing number ", totalSum - arrSum);



// brute force solution 👇 inefficient ❌


// for (let i = 0; i < arr.length; i++) {
//   // time complexity O(n^2)
//   let key = arr[i];
//   let j = i - 1;
//   while (j >= 0 && arr[j] > key) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = key;
// }

// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] !== i) {
//     missingNumber = i;
//     break;
//   }
// }
// console.log(missingNumber);
