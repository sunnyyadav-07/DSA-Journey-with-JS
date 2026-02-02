/*

🚀Question : Largest digit function

*/

function findLargestDigit(number) {
  if (!Number.isInteger(number)) return "only integer allowed";
  number = Math.abs(number);
  if (number === 0) return 0;
  let temp = number;
  let largest = 0;
  while (temp > 0) {
    let digit = temp % 10;
    if (digit > largest) largest = digit;
    temp = Math.floor(temp / 10);
  }
  return largest;
}
console.log(findLargestDigit(8476));
