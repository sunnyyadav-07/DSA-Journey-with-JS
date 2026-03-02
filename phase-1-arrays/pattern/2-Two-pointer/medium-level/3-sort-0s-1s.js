/*

Question : Sort 0s and 1s

*/

// Time complexity O(n)
// Space complexity O(1)

let arr = [1, 0, 1, 0, 1, 0, 0, 1];

let i = 0;
let j = 0;

while (i < arr.length) {
  if (arr[i] == 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}
console.log(arr)