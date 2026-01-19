/*
🚀Question:Print all numbers where square ends with the number.

*/
for (let i = 1; i <= 100; i++) {
  let square = i * i;
  let digit = 0;
  let num = i;
  while (num > 0) {
    digit++;
    num = Math.floor(num / 10);
  }
  if (i === square % Math.pow(10, digit)) {
    console.log(i);
  }
}
