/*

Question : Find second largest element in the array

*/

let arr = [10, 35, 48, 96, 48, 58, 76];

 // space complexity O(1)
let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num;
  }
}
console.log(secondLargest)
