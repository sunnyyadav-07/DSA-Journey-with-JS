/*

🚀Question :Reverse the array elements

*/
// method-1 solve with extra space
let arr = [10, 20, 30, 56, 90];
// let temp = [];
// let i = arr.length - 1;

// for (let j = 0; j < arr.length; j++) {
//   temp[j] = arr[i];
//   i--;
// }
// console.log(arr)
// console.log(temp)

// method-2 solve without extra space(2 pointer method)

let i = 0;
let j = arr.length - 1;
while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
console.log(arr);
