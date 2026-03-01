/*

Question : Move zeros to end

*/


// Space complexity O(1)
// Time complexity O(n)

let arr = [1, 0, 5, 0, 0, 40, 5, 6, 0];

let j = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
}

console.log(arr);
