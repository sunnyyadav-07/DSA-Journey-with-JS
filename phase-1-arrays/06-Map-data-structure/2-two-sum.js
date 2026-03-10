/*

Question : Two sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// Time complexity O(n)
// Space complexity O(n)

let nums = [2, 7, 11, 15];
let target = 9;
let map = new Map();
let ans = [];
for (let i = 0; i < nums.length; i++) {
  if (map.has(target - nums[i])) {
    ans[0] = map.get(target - nums[i]);
    ans[1] = i;
  } else {
    map.set(nums[i], i);
  }
}
console.log(ans);
