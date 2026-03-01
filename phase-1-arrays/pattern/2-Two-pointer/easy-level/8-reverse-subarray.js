/*

Question :  Reverse subarray

*/


// Space complexity O(1)
// Time complexity O(n)

let arr = [5, 10, 15, 20, 25, 30];
let start = 1;
let end = 4;
let left = start;
let right = end;
while (left < right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  left++;
  right--;
}
console.log(arr);
