/*

🚀Question : Power(a, b) without Math.pow

*/

function power(a, b) {
  if (a === 0 && b === 0) return "not possible";
  if (b == 0) return 1;
  let isNegative = b < 0;
  b = Math.abs(b);
  let answer = 1;
  for (let i = 1; i <= b; i++) {
    answer = answer * a;
  }
  return isNegative ? 1 / answer : answer;
}
console.log(power(2, 3));
