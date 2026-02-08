/*

🚀Question : Reverse string without built-in

*/

let string = "sunny";
let reverse = "";
for (let i = string.length - 1; i >= 0; i--) {
  reverse = reverse + string[i];
}
console.log(reverse);
