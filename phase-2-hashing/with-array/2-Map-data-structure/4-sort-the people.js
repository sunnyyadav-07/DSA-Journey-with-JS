/*

Question :Sort the people

You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

*/

// Time complexity O(n log n)
// Space complexity O(n)

let names = ["Mary", "John", "Emma"];
let heights = [180, 165, 170];

var sortPeople = function (names, heights) {
  let map = new Map();
  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
  }
  let result = new Array(names.length);
  let sortedHeghts = heights.sort((a, b) => b - a);
  for (let i = 0; i < result.length; i++) {
    result[i] = map.get(sortedHeghts[i]);
  }
  return result;
};
console.log(sortPeople(names, heights));
