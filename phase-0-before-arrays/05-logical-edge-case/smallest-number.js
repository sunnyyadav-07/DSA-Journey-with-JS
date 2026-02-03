/*

🚀Question : Find smallest number with same digits

*/
let number = 11130005; // 1000135
let count = new Array(10).fill(0);
let temp = number;
while (temp > 0) {
  let digit = temp % 10;
  count[digit]++;
  temp = Math.floor(temp / 10);
}
let result = 0;
// first non-zero digit
for (let i = 1; i <= 9; i++) {
  if (count[i] > 0) {
    result = i;
    count[i]--;
    break;
  }
}
// adding 0 digit
while (count[0] > 0) {
  result = result * 10;
  count[0]--;
}

// adding rest of the digits

for (let i = 0; i <= 9; i++) {
  while (count[i] > 0) {
    result = result * 10 + i;
    count[i]--;
  }
}
console.log(result);
