/**
 
🚀Question : Zig-zag star pattern

 */
let n = 3;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 9; j++) {
    if ((i == 2 && j % 4 == 0) || (i + j) % 4 == 0) {
      process.stdout.write("*");
    } else process.stdout.write(" ");
  }

  console.log();
}
