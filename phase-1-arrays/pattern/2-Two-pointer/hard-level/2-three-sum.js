/*

Question : 3Sum problem

*/

let num = [-1, 0, 1, 2, -1, -4];

// better than brute force but not optimal

// const threeSum = function (nums) {
//   let seenTriplet = new Set();
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let seen = new Set();
//     for (let j = i + 1; j < nums.length; j++) {
//       let third = -(nums[i] + nums[j]);
//       if (seen.has(third)) {
//         let triplet = [nums[i], nums[j], third].sort((a, b) => a - b);
//         let key = JSON.stringify(triplet);
//         if (!seenTriplet.has(key)) {
//           seenTriplet.add(key);
//           result.push(triplet);
//         }
//       }
//       seen.add(nums[j]);
//     }
//   }
//   return result;
// };

// optimal

var threeSum = function (nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1,
      k = nums.length - 1;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};
