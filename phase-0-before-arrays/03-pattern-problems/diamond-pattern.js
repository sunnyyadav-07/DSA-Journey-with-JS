/*

🚀Question : Diamond pattern

 */
let n = 5;
// upper half diamond
for (let i = 1; i <= n; i++) {
  // spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  // right part
  for (let j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}
// lower half diamond
for (let i = 1; i <= n-1; i++) {
  // spaces
  for (let j = 1; j <= i; j++) {
    process.stdout.write(" ");
  }
  // right part
  for (let j = 1; j <= 2 * (n - i) - 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}
