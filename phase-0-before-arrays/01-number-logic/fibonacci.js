/*

🚀 Question : Find Nth Fibonacci number (iterative)

*/
let number = 5;
let f0 = 0;
let f1 = 1;
if (number === 0) {
  console.log(f0);
} else if (number === 1) {
  console.log(f1);
} else {
  for (let i = 2; i <= number; i++) {
    let nextTerm = f0 + f1;
    f0 = f1;
    f1 = nextTerm;
  }
  console.log(f1);
}
