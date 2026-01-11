/*

🚀 Question : Print all divisors in sorted order.

*/

let number = 36;
let bigDivisorsArr = [];
for (let i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
  if (number % i === 0) {
    console.log(i);
    if (!(i === number / i)) {
      bigDivisorsArr.push(number / i);
    }
  }
}
for (let i = bigDivisorsArr.length - 1; i >= 0; i--) {
  console.log(bigDivisorsArr[i]);
}
