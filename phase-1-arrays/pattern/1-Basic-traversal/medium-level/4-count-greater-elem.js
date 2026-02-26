/*

Question : Count elements greater than X

*/



// time complexity O(n)
// space complexity O(1)
let arr = [4, 56, 75, 84, 52, 90, 22, 65, 44, 33];

let count = 0;
let elem = 60;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > elem) {
    count++;
  }
}
console.log(count, "elements are greater than ", elem);
