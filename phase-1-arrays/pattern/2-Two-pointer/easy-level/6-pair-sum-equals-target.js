/*

Question : Pair sum equals target (sorted)

*/

// Space complexity O(1)
// Time complexity O(n)

let arr = [1, 2, 3, 4, 6];
let target = 6;

let left = 0;
let right = arr.length - 1;

while (left < right) {
  let sum = arr[left] + arr[right];
  if (sum === target) {
    console.log(arr[left], " and ", arr[right], " sum = ", target);
    break;
  } else if (sum > target) {
    right--;
  } else if (sum < target) {
    left++;
  }
}
