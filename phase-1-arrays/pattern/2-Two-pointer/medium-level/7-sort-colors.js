/*

Question : Sort colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

*/

let nums = [2, 0, 2, 1, 1, 0];

const sortColors = function (nums) {
  let j = 0,
    i = 0,
    k = nums.length - 1;
  while (i <= k) {
    if (nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
      i++;
    } else if (nums[i] === 2) {
      let temp = nums[i];
      nums[i] = nums[k];
      nums[k] = temp;
      k--;
    } else {
      i++;
    }
  }
  return nums
};
console.log(sortColors(nums));
