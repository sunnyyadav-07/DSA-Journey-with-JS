/*

🚀Question :Move all -ve to left and all +ve to right;

*/
let arr = [-1, 5, 6, -5, 4, -2, -9, 7];
let i = 0;
let j = 0;
while (i < arr.length) {
  if (arr[i] < 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++
}
console.log(arr);
