/*

Question : Rearrange Positive & Negative

 */


// time complexity O(n) and space complexity O(1)
let arr = [1, -5, 2, 7, -8, -4, 10];
let j = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++
  }
}
console.log(arr)