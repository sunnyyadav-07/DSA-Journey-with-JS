/*

Question : Count frequency of the element in Array

*/

let arr = [1, 2, 5, 2, 4, 6, 4, 4, 1, 3, 5, 8, 9, 1];
let freq = {}; // space complexity O(n)
for (let i = 0; i < arr.length; i++) {  // time complexity O(n)
  freq[arr[i]] = (freq[arr[i]]  ||0)+ 1;
}
console.log(freq)