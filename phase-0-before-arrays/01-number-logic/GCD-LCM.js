/*
🚀 Question: Find GCD & LCM of two numbers.


*/
let num1 = 25;
let num2 = 15;

function gcd(n1, n2) {
  if (n1 <= 0 || n2 <= 0) {
    return "GCD/LCM is not defined";
  }
  while (n2 !== 0) {
    let temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }
  return n1;
}
let GCD = gcd(num1, num2);
let LCM = (num1 * num2) / GCD;
console.log("GCD : ", GCD);
console.log("LCM : ", LCM);
