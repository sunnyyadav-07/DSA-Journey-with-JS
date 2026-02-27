/*

Question :  Find equilibrium index

*/


// space complexity O(1)
// time complexity O(n)
let arr = [1, 3, 5, 2, 2];
let index = -1;
let totalSum = 0;
let leftSum = 0;
for (let i = 0; i < arr.length; i++) {
  totalSum = totalSum + arr[i];
}
for (let i = 0; i < arr.length; i++) {

  let rightSum = totalSum-leftSum-arr[i];
  if (leftSum == rightSum) {
    index = i;
    break;
  }
  leftSum = leftSum + arr[i];
}
if (index == -1) {
  console.log("Not have equilibrium index");
} else {
  console.log("Equilibrium index is : ", index);
}
