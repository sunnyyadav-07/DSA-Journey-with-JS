/*
🚀Question:Print all numbers whose reverse is same (1–1000).

*/
for (let i = 1; i <= 1000; i++) {
  let reverse = 0;
  let num = i;
  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (reverse === i) {
    console.log(i);
  }
}
