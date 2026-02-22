/*

Question : Find largest element in the array

*/

let arr = [20, 42, 50, 10, 69, 89];
let largest = arr[0]; // space complexity O(1)

for (let i = 1; i < arr.length; i++) {    // time complexity O(n)
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);
