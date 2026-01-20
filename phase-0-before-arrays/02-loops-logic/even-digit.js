/*
🚀Question:Count how many numbers have even digit count.

*/
let N = 1000;
let count = 0;
for (let i = 1; i <= N; i++) {
  let num = i;
  let digits = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    digits++;
  }
  if (digits % 2 === 0) {
    count++;
  }
}
console.log(count, "Number have even digit count");
