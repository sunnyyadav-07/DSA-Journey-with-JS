/*

Question : Check palindrome array

*/


// Space complexity O(1)
// Time complexity O(n)

let arr = [1, 2, 3, 2, 1];
let isPalindrome = true;
let right = arr.length - 1;
let left = 0;
while (left < right) {
  if (arr[left] !== arr[right]) {
    isPalindrome = false;
    break;
  }
  left++;
  right--;
}
if (isPalindrome) {
  console.log("Array is palindrome");
} else {
  console.log("Array is not palindrome");
}
