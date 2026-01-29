/*

🚀Question: Butterfly pattern.

*/
let n = 5;
// upper half stars
for (let i = 1; i <= n; i++) {
  // left stars
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }

  // spaces
  for (let j = 1; j <= 2 * (n - i); j++) {
    process.stdout.write(" ");
  }
  // right stars
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

// lower half stars
for (let i = 1; i <= n; i++) {
  // left stars
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("*");
  }

  // spaces
  for (let j = 1; j <= 2 * i; j++) {
    process.stdout.write(" ");
  }
  // right stars
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
