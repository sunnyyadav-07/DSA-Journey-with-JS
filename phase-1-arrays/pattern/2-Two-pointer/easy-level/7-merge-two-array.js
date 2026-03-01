/*

Question : Merge two sorted arrays

*/

// Space complexity O(m + n)
// Time complexity O(m + n)

let arr1 = [1, 4, 7];
let arr2 = [2, 3, 6];
let m = arr1.length;
let n = arr2.length;
let result = new Array(m + n);
let j = 0;
let i = 0;
let k = 0;
while (i < m && j < n) {
  if (arr1[i] < arr2[j]) {
    result[k] = arr1[i];
    i++;
  } else {
    result[k] = arr2[j];
    j++;
  }
  k++;
}

while (i < m) {
  result[k] = arr1[i];
  i++;
  k++;
}
while (j < n) {
  result[k] = arr2[j];
  j++;
  k++;
}
console.log(result);
