/*

🚀Question : Reverse number function

*/

function reverseTheNumber(number) {
  let sign = Math.sign(number);
  number = Math.abs(number);
  let reverse = 0;
  while (number > 0) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
  }
  return reverse * sign;
}
console.log(reverseTheNumber(1234));
