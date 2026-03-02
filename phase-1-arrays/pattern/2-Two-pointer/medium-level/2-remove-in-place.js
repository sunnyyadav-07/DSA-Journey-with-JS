/*

Question : Remove element in‑place

*/

// Time complexity O(n)
// Space complexity O(1)

let nums = [3, 2, 2, 3];
let val = 3;

let j = 0;
let i = 0;
while (i < nums.length) {
  if (nums[i] !== val) {
    nums[j] = nums[i];
    j++;
  }
  i++;
}
nums.length=j
console.log(nums)