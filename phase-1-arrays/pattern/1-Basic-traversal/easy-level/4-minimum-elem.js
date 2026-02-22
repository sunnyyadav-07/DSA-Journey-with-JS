/*

Question : Find minimum element in the array

*/

let arr = [20, 42, 50, 10, 69, 89];

let min = arr[0]; // space complexity O(1)

for (let i = 1; i < arr.length; i++) {  // time complexity O(n)
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(min);
