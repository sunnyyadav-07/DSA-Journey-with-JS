/*

🚀Question : Check if digits can form a palindrome

*/
let number = 122233;
let count = new Array(10).fill(0);
let temp = number;
while (temp > 0) {
  let digit = temp % 10;
  count[digit]++;
  temp = Math.floor(temp / 10);
}
console.log(count);
let oddCount = 0;
for (let i = 0; i <= 9; i++) {
  if (count[i]%2!== 0) {
    oddCount++;
  }
}
let result=oddCount>1?false:true
console.log(result);
