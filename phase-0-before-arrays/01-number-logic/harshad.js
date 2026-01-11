/*

🚀 Question : Check whether a number is Harshad

*/
let number = 45;
let copyNum = number;
let sum = 0;

while (number > 0) {
  sum = sum + (number % 10);
  number = Math.floor(number / 10);
}
if (copyNum % sum === 0) {
  console.log("Harshad number");
} else {
  console.log("Not Harshad number");
}
