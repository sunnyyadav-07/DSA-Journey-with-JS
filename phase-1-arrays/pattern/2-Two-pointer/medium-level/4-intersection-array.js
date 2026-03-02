/*

Question : Intersection of two sorted arrays

*/

// Time complexity O(n+m)
// Space complexity O(k)

let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 2, 3, 4, 6];

let i = 0;
let j = 0;
let n = arr1.length;
let m = arr2.length;
let result = new Array(Math.min(arr1.length, arr2.length));
let k = 0;

while (i < n && j < m) {
  if (arr1[i] === arr2[j]) {
    result[k] = arr1[i];
    j++;
    i++;
    k++;
  } else if (arr1[i] < arr2[j]) {
    i++;
  } else {
    j++;
  }
}
result.length = k;
console.log(result);
