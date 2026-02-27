/*

Question : Product of array except self (no division naive)

*/

// space complexity O(1)
// time complexity O(n^2)
let arr = [1, 2, 3, 4];
let product = 1;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      product = product * arr[j];
    }
  }
  console.log(product);
  product = 1;
}
