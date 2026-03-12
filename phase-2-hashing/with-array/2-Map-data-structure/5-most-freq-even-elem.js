/*

Question : Most frequent even element

Given an integer array nums, return the most frequent even element.

If there is a tie, return the smallest one. If there is no such element, return -1.

*/


// Time complexity O(n)
// Space complexity O(n)

let nums = [1, 3, 2, 8, 2, 3, 8];

let map = new Map();
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 == 0) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
}
let mostFrequentElem = -1;
let freq = 0;
for (let key of map.keys()) {
  if (freq < map.get(key)) {
    freq = map.get(key);
    mostFrequentElem = key;
  } else if (freq == map.get(key)) {
    mostFrequentElem = Math.min(mostFrequentElem, key);
  }
}
console.log(mostFrequentElem)