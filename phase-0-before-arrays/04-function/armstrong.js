/*

🚀Question : Armstrong check function

*/

function isArmstrong(number) {
  if (number < 0) return false;
  if (number === 0) return true;
  let temp = number;
  let copyNum = number;
  let digits = 0;
  while (copyNum > 0) {
    copyNum = Math.floor(copyNum / 10);
    digits++;
  }
  let sum = 0;
  while (temp > 0) {
    sum = sum + Math.pow(temp % 10, digits);
    temp = Math.floor(temp / 10);
  }
  return number === sum;
}
console.log(isArmstrong(153));
