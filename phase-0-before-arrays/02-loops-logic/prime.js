/*
🚀Question:Find first K prime numbers.

*/
let KthPrime = 10;
let count = 1;
let num = 3;
if(KthPrime>=1){
  console.log(2)
}
while (count < KthPrime) {
  let isPrime = true;

  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i+=2) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if(isPrime){
    console.log(num)
    count++
  }
  num+=2
}

