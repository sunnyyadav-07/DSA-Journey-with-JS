/*

Question : Container with most water

*/


// Time complexity O(n)
// Space complexity O(1)

// 0  1  2  3  4  5  6  7  8

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let left = 0;
let right = height.length - 1;
let firstLine=null
let secLine=null
let maxWater = 0;
let minHeight = null;
while (left < right) {
  if (height[left] < height[right]) {
    minHeight = height[left];
  } else {
    minHeight = height[right];
  }
  let width = right - left;
  let area = minHeight * width;
  if (area > maxWater) {
    firstLine=height[left]
    secLine=height[right]
    maxWater = area;
  }
  if (height[left] < height[right]) {
    left++;
  } else {
    right--;
  }
}
console.log(maxWater,firstLine,secLine)
