/*

Question :  Remove duplicates (sorted array)

*/

let arr = [1, 1, 2, 2, 3, 3, 3, 4, 4, 5];

let j = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[j]) {
    j++;
    arr[j] = arr[i];
  }
}
arr.length = j+1 ;
console.log(arr, j);
