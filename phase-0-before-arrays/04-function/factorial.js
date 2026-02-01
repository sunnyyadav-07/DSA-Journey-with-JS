/*

🚀Question : Factorial function

*/

function factorial(number) {
  if (!Number.isInteger(number)) return "only integers allowed";
  if (number < 0) return "not possible";
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));
