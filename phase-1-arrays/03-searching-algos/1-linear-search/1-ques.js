/*

Question : Write a progrem that perform a linear search to find a target value in an integer array. If the target is found return its index, if the target is not present, return -1

*/

let arr = [1, 2, 3, 4, 5, 6];
let target = 3;
function linearSearch(arr, target) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
      break;
    }
  }
  return index;
}
console.log(linearSearch(arr, target));
