/*

🚀Question : Hollow pyramid

*/
let n = 5;

// star pattern
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j == 2 * i - 1 || i === n) {
      process.stdout.write("* ");
    } else process.stdout.write("  ");
  }
  console.log();
}

// number pattern
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j == 2 * i - 1 || i === n) {
      process.stdout.write(`${j} `);
    } else process.stdout.write("  ");
  }
  console.log();
}
