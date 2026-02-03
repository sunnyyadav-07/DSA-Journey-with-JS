/*

🚀Question : Check if number contains only 0s & 1s

*/

let number = 1010101;
let isValid = true;
if (number === 0 || number === 1) {
  console.log("number is valid");
 
}else{
while (number > 0) {
  let digit = number % 10;
  if (!(digit == 0 || digit == 1)) {
    isValid = false;
    break;
  }
  number = Math.floor(number / 10);
}
if (isValid) {
  console.log("Number is valid");
} else {
  console.log("Number is invalid");
}
}