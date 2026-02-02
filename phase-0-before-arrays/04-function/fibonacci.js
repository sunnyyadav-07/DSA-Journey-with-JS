/*

🚀Question : Nth Fibonacci function

*/

function fibonacci(number) {
  if (!Number.isInteger(number)) return "only integer allowed";
  if (number <= 0) return "note possible";
  if (number === 1) return 0;
  if (number === 2) return 1;
  let f1 = 0;
  let f2 = 1;

  for (let i = 3; i <= number; i++) {
    let nthFibonacci = f1 + f2;
    f1 = f2;
    f2 = nthFibonacci;
  }
  return f2;
}
console.log(fibonacci(5));
