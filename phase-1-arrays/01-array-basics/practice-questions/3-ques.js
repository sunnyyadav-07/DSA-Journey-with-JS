/*

Question : You are given an array of even size. An array is said to be balanced if:
sum(left half) == sum(right half).

Your task is to determine the minimum value that must be added to exactly ONE element (either in left half or right half) so that the array becomes balanced.

You may add the value to any single element, but only one addition operation is allowed.

Print the minimum value required to make the array balanced.

*/
let arr = [1, 2, 1, 1, 2, 3];
let sumLeftHalf = 0;
let sumRightHalf = 0;
for (let i = 0; i < arr.length / 2; i++) {
  sumLeftHalf += arr[i];
}
for (let i = arr.length / 2; i < arr.length; i++) {
  sumRightHalf += arr[i];
}
  let minElem = Math.abs(sumLeftHalf - sumRightHalf);
  
console.log(minElem)