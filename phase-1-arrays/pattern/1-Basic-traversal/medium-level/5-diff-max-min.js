/*

Question : Find difference between max and min

*/

// time complexity O(n)
// space complexity O(1)

let arr = [4, 56, 75, 84, 52, 90, 22, 65, 44, 33];
let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(max, min);
console.log("difference of max and min is : ", max - min);
