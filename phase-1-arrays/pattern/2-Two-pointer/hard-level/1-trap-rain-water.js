/*

Question : Trapping rain water 

*/

// let height = [1, 2, 0, 3, 6, 5];
let height = [4, 2, 0, 3, 2, 5];
let n = height.length;
let maxWater = 0;

// better approach ✅
// Time Complexity O(n)
// Space Complexity O(n)

// let leftMax = new Array(n).fill(0);
// let rightMax = new Array(n).fill(0);
// leftMax[0] = height[0];
// rightMax[n - 1] = height[n - 1];
// for (let i = 1; i < n; i++) {
//   leftMax[i] = Math.max(leftMax[i - 1], height[i]);
// }

// for (let i = n - 2; i >= 0; i--) {
//   rightMax[i] = Math.max(rightMax[i + 1], height[i]);
// }
// console.log(leftMax);
// console.log(rightMax);

// for (let i = 0; i < n; i++) {
//   maxWater += Math.min(leftMax[i], rightMax[i]) - height[i];
// }
// console.log(maxWater);

// optimal approach ✅
// Time complexity O(n)
// Space complexity O(1)

let leftPointer = 0;
let rightPointer = n - 1;
let leftMax = 0;
let rightMax = 0;
while (leftPointer < rightPointer) {
  leftMax = Math.max(leftMax, height[leftPointer]);
  rightMax = Math.max(rightMax, height[rightPointer]);

  if (leftMax < rightMax) {
    maxWater += leftMax - height[leftPointer];
    leftPointer++;
  } else {
    maxWater += rightMax - height[rightPointer];
    rightPointer--;
  }
}
console.log(maxWater);
