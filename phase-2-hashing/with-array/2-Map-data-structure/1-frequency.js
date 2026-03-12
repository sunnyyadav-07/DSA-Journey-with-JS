/*

Question : Find the frequency of the elements in array

*/

// Time complexity O(n)
// Space complexity O(n)

let arr = [1, 2, 3, 4, 5, 2, 1, 3, 4, 1, 4, 5, 2];

let map = new Map();

for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}
console.log(map)