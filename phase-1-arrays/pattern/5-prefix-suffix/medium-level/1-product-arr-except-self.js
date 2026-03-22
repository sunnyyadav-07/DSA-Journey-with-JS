/*

Question : Product Of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

*/

let nums = [1, 2, 3, 4];

const productExceptSelf = function (nums) {
  if (nums.length <= 1) return nums;
  let left = 1;
  let right = 1;
  let ans = new Array(nums.length).fill(1);

  // find left product
  for (let i = 0; i < nums.length; i++) {
    ans[i] = left;
    left *= nums[i];
  }
  // find right product + combine into the ans
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= right;
    right *= nums[i];
  }
  return ans;
};

console.log(productExceptSelf(nums));
