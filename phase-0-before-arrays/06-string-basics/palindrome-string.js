/*

🚀Question : Check palindrome string

*/

let string = "abcdcba";

// let reverse = "";
// for (let i = string.length - 1; i >= 0; i--) {
//   reverse = reverse + string[i];
// }
// if(string===reverse){
//   console.log('Palindrom string')
// }else{
//   console.log('Not palidrome string')
// }

// optimized solution becasue the space complexity is O(1)

let i = 0;
let isPalindrome = true;
let j = string.length - 1;
while (i < j) {
  if (string[i] !== string[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}
if (isPalindrome) {
  console.log("Palindrome string");
} else {
  console.log("Not palindrome string");
}
