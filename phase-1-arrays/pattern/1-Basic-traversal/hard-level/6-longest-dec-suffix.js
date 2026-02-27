/*

Question : Longest decreasing suffix

*/

// space complexity O(1)
// time complexity O(n)
let arr = [1, 5, 7, 6, 4, 2];

let decreasingLength = 1;

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i - 1] > arr[i]) {
    decreasingLength++;
  } else {
    break;
  }
}
console.log(decreasingLength)