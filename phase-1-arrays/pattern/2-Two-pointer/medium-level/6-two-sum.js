/*

Question : Two sum sorted (return indices)

*/

// Time complexity O(n)
// Space complexity O(1)

let arr = [2, 7, 11, 15];
let target = 9;
let right = arr.length - 1;
let left = 0;
let i = -1;
let j = -1;

while (left < right) {
  let sum = arr[left] + arr[right];

  if (sum == target) {
    i = left;
    j = right;
    break;
  } else if (sum > target) {
    right--;
  } else if (sum < target) {
    left++;
  }
}
if (i == -1) {
  console.log("Do not have sum of two element that are equals to target");
} else {
  console.log("indices ", i, j);
}
