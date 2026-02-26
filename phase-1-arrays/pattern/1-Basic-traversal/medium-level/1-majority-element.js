/*

Question : Majority element (Boyer-Moore)

*/
let arr = [2, 2, 1, 1, 1, 2, 2];

// let freq = {}; // space complexity O(n)   // time complexity O(n)
// let majorityElem = null;

// // find the frequency of the array elements
// for (let i = 0; i < arr.length; i++) {
//   freq[arr[i]] = (freq[arr[i]] || 0) + 1;
// }

// // find majority element
// for (let i in freq) {
//   if (freq[i] > arr.length / 2) {
//     majorityElem = Number(i);
//   }
// }
// console.log(majorityElem);



// space coplexity O(1) and time complexity O(n) ✅ Optimized
let count = 0;
let candidate = null;
for (let i = 0; i < arr.length; i++) {
  if (count == 0) {
    candidate = arr[i];
  }

  if (candidate === arr[i]) {
    count++;
  } else {
    count--;
  }
}
count = 0;
for (let i = 0; i<arr.length; i++) {
  if (arr[i] === candidate) {
    count++;
  }
}
if (count > arr.length / 2) {
  console.log("Majority element : ", candidate);
} else {
  console.log("No majority element exists");
}
