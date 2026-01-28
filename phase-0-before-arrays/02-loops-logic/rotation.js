/*

🚀Question : Check if a number is rotation of another number.

*/
let a = 1234;
let copyA = a;
let b = 4312;
let isRotation = false;
function countDigit(num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
let digitsInA = countDigit(a);
let digitsInB = countDigit(b);
let digts = digitsInA;
if (digitsInA !== digitsInB) {
  console.log("Not a rotation");
} else {
  let rotated = a;
  let power = Math.pow(10, digts - 1);
  for (let i = 1; i <= digts; i++) {
    let firstDigit = Math.floor(rotated / power);
    let restDigit = rotated % power;
    rotated = restDigit * 10 + firstDigit;
    if (rotated === b) {
      isRotation = true;
      break;
    }
  }
  if (isRotation) console.log("b is rotation of a");
  else console.log("b is not rotation of a");
}
