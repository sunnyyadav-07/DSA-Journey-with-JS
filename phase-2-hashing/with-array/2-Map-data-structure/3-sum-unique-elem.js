/*

Question : Sum of unique elements

You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.
*/

// Time complexity O(n)
// Space complexity O(n)

let numbers = [1, 2, 3, 2];
var sumOfUnique = function (nums) {
  let map = new Map();
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  for (let key of map.keys()) {
    if (map.get(key) == 1) {
      sum += key;
    }
  }
  return sum;
};
console.log(sumOfUnique(numbers))