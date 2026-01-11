/*

🚀 Question : Check whether a number is Strong Number

*/

let number = 0;
let copyNum = number;
let sum = 0;
if (number<=0) {
  console.log("Not strong number");
} else {
  while (number > 0) {
    let digit = number % 10;
    let fact = 1;
    for (let i = 1; i <= digit; i++) {
      fact = fact * i;
    }
    sum = sum + fact;
    number = Math.floor(number / 10);
  }

  if (copyNum === sum) {
    console.log("Strong number");
  } else {
    console.log("Not strong number");
  }
}

// Optimized approach
// Precompute the factorial of (0-9) digits

// let number = 145;
// let copyNum = number;
// let sum = 0;

// let factArr = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

// while (number > 0) {
//   let digit = number % 10;
//   sum += factArr[digit]; 
//   number = Math.floor(number / 10);
// }

// if (copyNum === sum) {
//   console.log("Strong number");
// } else {
//   console.log("Not strong number");
// }
