/*

🚀Question : Inverted number triangle

*/
let n = 5;

// 1 pattern

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(`${j}`);
  }
  console.log();
}


// 2 pattern

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i - 1; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(`${j}`);
  }

  console.log();
}


// 3 pattern
for (let i = 1; i <= n; i++) {
  for (let j = n - i + 1; j >=1 ; j--) {
    process.stdout.write(`${j}`);
  }
  console.log();
}