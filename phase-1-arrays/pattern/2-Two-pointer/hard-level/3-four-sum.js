/*

Question : 

*/
// let nums = [1, 0, -1, 0, -2, 2];
let nums = [-3, -1, 0, 2, 4, 5];

let target = 1;

// brute force approach
// let result = [];
// let seen = new Set();
// for (let i = 0; i < nums.length - 2; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     for (let k = j + 1; k < nums.length; k++) {
//       for (let l = k + 1; l < nums.length; l++) {
//         let sum = nums[i] + nums[j] + nums[k] + nums[l];
//         if (sum == target) {
//           let quadruplets = [nums[i], nums[j], nums[k], nums[l]].sort(
//             (a, b) => a - b,
//           );
//           let key = JSON.stringify(quadruplets);
//           if (!seen.has(key)) {
//             seen.add(key);
//             result.push(quadruplets);
//           }
//         }
//       }
//     }
//   }
// }
// console.log(result);

// Better Approach

// let result = [];
// let seenQuadruplets = new Set();
// for (let i = 0; i < nums.length - 2; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     let seen = new Set();
//     for (let k = j + 1; k < nums.length; k++) {
//       let fourth = -(nums[i] + nums[j] + nums[k] - target);
//       if (seen.has(fourth)) {
//         let quadruplets = [nums[i], nums[j], nums[k], fourth].sort(
//           (a, b) => a - b,
//         );
//         let key = JSON.stringify(quadruplets);
//         if (!seenQuadruplets.has(key)) {
//           seenQuadruplets.add(key);
//           result.push(quadruplets);
//         }
//       }
//       seen.add(nums[k]);
//     }
//   }
// }
// console.log(result);

// Optimal Approach ✅
let result = [];
nums.sort((a, b) => a - b);
let n = nums.length;
for (let i = 0; i < n - 2; i++) {
  if (i > 0 && nums[i - 1] == nums[i]) continue;
  if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
  if (nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) continue;

  for (let j = i + 1; j < n; j++) {
    if (j > i + 1 && nums[j - 1] == nums[j]) continue;
    if (nums[j] + nums[i] + nums[i + 1] + nums[i + 2] > target) break;
    if (nums[i] + nums[j] + nums[n - 1] + nums[n - 2] < target) continue;

    let left = j + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[j] + nums[left] + nums[right];
      if (sum === target) {
        result.push([nums[i], nums[j], nums[left], nums[right]]);
        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
}
console.log(result);
