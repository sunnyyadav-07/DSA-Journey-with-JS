/*

Question : 3Sum Closest

Given an integer array nums of length n and an integer target, find three integers at distinct indices in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.



*/

let nums = [-1, 2, 1, -4],
  target = 1;

const threeSumClosest = function (nums, target) {
  if (nums.length == 3) return nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);
  if (target <= nums[0] + nums[1] + nums[2]) return nums[0] + nums[1] + nums[2];
  let closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if (sum == target) return sum;
      if (sum > target) {
        right--;
      }
      if (sum < target) {
        left++;
      }
    }
  }

  return closest;
};
console.log(threeSumClosest(nums));
