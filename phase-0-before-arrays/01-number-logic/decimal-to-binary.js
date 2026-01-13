/*

🚀 Question : Convert decimal to binary (without built-in)

*/
let number = 8;
let binary = "";
if (number === 0) {
  binary = "0";
}
while (number > 0) {
  binary = (number % 2) + binary;
  number = Math.floor(number / 2);
}
console.log(binary);
