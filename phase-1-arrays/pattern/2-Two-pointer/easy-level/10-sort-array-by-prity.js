/*

Question : Sort Array By Parity

Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

*/

let nums = [3, 1, 2, 4];

const sortArrayByParity = function (nums) {
  let j = 0;
  if (nums.length <= 1) return nums;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }
  return nums;
};
console.log(sortArrayByParity(nums));
