/*

Question : You are given a sequence of integers. Your task is to compute the sum of      absolute differences between every pair of elements in the sequence where the first      element appears before the second.

*/

let arr = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    let ans = arr[i] - arr[j];
    sum = sum + Math.abs(ans);
  }
}
console.log(sum);


