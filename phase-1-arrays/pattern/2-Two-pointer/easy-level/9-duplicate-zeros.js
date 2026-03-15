/*

Question : Duplicate zeros

Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

*/
let arr = [1, 0, 2, 3, 0, 4, 5, 0];

const duplicateZeros = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) count++;
  }
  let n = arr.length;
  let j = n + count - 1;
  let i = n - 1;
  while (i >= 0) {
    if (j < n) {
      arr[j] = arr[i];
    }
    if (arr[i] == 0) {
      j--;
      if (j < n) {
        arr[j] = 0;
      }
    }
    j--;
    i--;
  }
  return arr
};
console.log(duplicateZeros(arr))