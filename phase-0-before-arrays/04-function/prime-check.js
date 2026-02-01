/*

🚀Question : Prime check function (optimized)

*/

function isPrime(number) {
  if (number <= 1) return true;
  if (number === 2 || number === 3) return (isPrime = true);
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(15));
