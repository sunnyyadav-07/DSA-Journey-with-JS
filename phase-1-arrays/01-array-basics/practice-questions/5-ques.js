/*

  Question : Allow at most 2 duplicates in sorted array

  */

let arr = [1, 1,1, 2, 2, 3,3];

let j = 2;
for (let i = 2; i < arr.length; i++) {
  if (arr[i] !== arr[j - 2]) {
    arr[j] = arr[i];
    j++;
  }
}
arr.length=j
console.log(arr);
