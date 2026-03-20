/*

Question : Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

*/

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
intervals.sort((a, b) => a[0] - b[0]);

// Time complexity O(n log n)
// Space complexity O(n)

// let ans = [intervals[0]];
// for (let i = 0; i < intervals.length; i++) {
//   let prev = ans[ans.length - 1];
//   let curr = intervals[i];
//   if (prev[1] < curr[0]) {
//     ans.push(curr);
//   } else {
//     ans[ans.length - 1][1] = Math.max(prev[1], curr[1]);
//   }
// }
// console.log(intervals);

/*-------------------------------------*/

// Time complexity O(n log n)
// Space complexity O(1)

let index = 0;

for (let i = 0; i < intervals.length; i++) {
  let prev = intervals[index];
  let curr = intervals[i];
  if (prev[1] < curr[0]) {
    index++;
    intervals[index] = curr;
  } else {
    prev[1] = Math.max(prev[1], curr[1]);
  }
}

console.log(intervals.slice(0, index + 1));
