/*

Question :  Replace each element with square

*/
// time complexity O(n)
let arr = [2, 4, 6, 3, 8];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * arr[i];
}
console.log(arr)