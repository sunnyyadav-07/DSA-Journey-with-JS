/*

🚀Question :Array left rotation by 1

*/
let arr = [1, 2, 3, 4, 5];  // [2, 3, 4, 5, 1]

let temp = arr[0];
for (let i = 1; i < arr.length; i++) {
  arr[i - 1] = arr[i];
}
arr[arr.length - 1] = temp;
console.log(arr)
