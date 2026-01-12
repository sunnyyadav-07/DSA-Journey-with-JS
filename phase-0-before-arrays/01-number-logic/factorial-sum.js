/*

🚀 Question : Find sum of factorial of digits.

*/
let number = 2;
let sum = 0;
let fact=1
if (number === 0 || number === 1) {
  sum = 1;
  console.log(sum);
} else {
  while (number > 0) {
     fact = 1;
    let digit = number % 10;
    for (let i = 1; i <= digit; i++) {
      fact = fact * i;
    }
    sum += fact;
    number = Math.floor(number / 10);
  }
  console.log(sum);
}



// We can also use this method 

// let factArr = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
// sum += factArr[digit];