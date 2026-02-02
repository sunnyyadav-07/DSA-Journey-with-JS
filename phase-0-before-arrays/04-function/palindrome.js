/*

🚀Question : Palindrome check function

*/

function isPalindrome(number) {
  if (!Number.isInteger(number)) return "only integer allowed";
  if (number < 0) return "not possible";
  let temp = number;
  let reverse = 0;
  while (temp > 0) {
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  return number === reverse;
}
console.log(isPalindrome(121));
