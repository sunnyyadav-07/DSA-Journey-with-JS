/*

🚀Question : Find digital root

*/

let number = 98755;
let temp = number;
let digitalRoot = null;
while (temp >= 10) {
  let sum = 0;

  while (temp > 0) {
    let digits = temp % 10;
    sum = sum + digits;
    temp = Math.floor(temp / 10);
  }
  temp = sum;
}
digitalRoot = temp;
console.log("Digital root is ", digitalRoot);
