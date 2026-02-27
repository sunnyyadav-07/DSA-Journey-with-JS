/*

Question : Longest increasing prefix

*/

// space complexity O(1)
// time complexity O(n)

let arr = [2, 5, 7, 9, 3, 4];

let length = 1;

for (let i = 0; i < arr.length-1; i++) {
  if (arr[i] < arr[i + 1]) {
    length++;
  }else{
    break
  }
}
console.log(length)