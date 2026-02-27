/*

Question : Find third largest element.

*/

// space complexity O(1)
// time complexity O(n)

// let arr = [55, 20, 45, 63, 22, 10, 35, 70]; // case->1
let arr = [-20, -2, -22, -10, -15]; //case->2

if (arr.length < 3) {
  console.log("Third largest element not possible");
} else {
  let thirdLargest = -Infinity;
  let secLargest = -Infinity;
  let firstLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      thirdLargest = secLargest;
      secLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] !== firstLargest && arr[i] > secLargest) {
      thirdLargest = secLargest;
      secLargest = arr[i];
    } else if (
      arr[i] !== firstLargest &&
      arr[i] !== secLargest &&
      arr[i] > thirdLargest
    ) {
      thirdLargest = arr[i];
    }
  }

  console.log("Third largest element : ", thirdLargest);
}
