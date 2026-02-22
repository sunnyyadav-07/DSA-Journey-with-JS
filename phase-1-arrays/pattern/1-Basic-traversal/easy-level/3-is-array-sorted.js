/*

Question : Check if array is sorted

*/

let arr = [1, 2, 4, 5, 7, 8];

let isSorted = true;  // space complexity O(1)
for (let i = 0; i < arr.length-1; i++) {  // time complexity O(n)
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}
if (isSorted) {
  console.log("Array is sorted");
} else {
  console.log("Array is not sorted");
}
