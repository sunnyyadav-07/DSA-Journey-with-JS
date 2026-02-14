/*

🚀Question :Print the count of subarrays whose sum is equal to the target.
example:- [1,2,3,7,5] , T=12 , so o/p should be 2 because [2,3,7] and [7,5] these both subarrays have sum 12

*/

let arr = [1, 2, 3, 7, 5];
let target = 12;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];
    if (sum === target) {
      count++;
      break;
    }
  }
}
console.log(count, 'subarrays have sum 12')