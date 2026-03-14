/*

Question : Kth distinct string in an array

A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.

*/

let str = ["d", "b", "c", "b", "c", "a"];
let k=2

const kthDistinct = function (arr, k) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) === 1) {
      k--;
      if (k == 0) return arr[i];
    }
  }
  return "";
};
console.log(kthDistinct(str,k))