/*

Question :  Squares of sorted array

*/
// Time complexity O(n)
// Space complexity O(n)

let arr = [-4, -1, 0, 3, 10];
let n = arr.length;
let result = new Array(n);
let k = n - 1;
let left = 0;
let right = n - 1;
while (left <= right) {
  if (Math.abs(arr[left]) > Math.abs(arr[right])) {
    result[k] = arr[left] * arr[left];
    left++;
  } else {
    result[k] = arr[right] * arr[right];
    right--;
  }
  k--;
}

console.log(result);
