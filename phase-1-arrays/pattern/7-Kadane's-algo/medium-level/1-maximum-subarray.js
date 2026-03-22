/*

Question : Maximum Subarray

Given an integer array nums, find the subarray with the largest sum, and return its sum.

*/

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = function (nums) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};
console.log(maxSubArray(nums));
