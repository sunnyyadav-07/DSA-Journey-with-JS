/*

Question : Reverse array

*/


// Space complexity O(1)
// Time complexity O(n)

let arr = [10, 25, 34, 40, 44, 55];

let j = arr.length - 1;
let i = 0;
while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  j--;
  i++;
}
console.log(arr)
