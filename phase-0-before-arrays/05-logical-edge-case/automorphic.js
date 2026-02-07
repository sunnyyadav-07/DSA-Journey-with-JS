/*

🚀Question : Check if number is automorphic

*/
let number = 25;
if (number === 0 || number === 1) {
  console.log("Automorphic");
} else if (number < 0) {
  console.log("Not automorphic");
} else {
  let square = number * number;
  let temp = number;
  let digits = 0;
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    digits++;
  }
  let lastDigit = square % Math.pow(10, digits);
  if (lastDigit === number) {
    console.log("Automorphic");
  } else {
    console.log("Not automorphic");
  }
}
