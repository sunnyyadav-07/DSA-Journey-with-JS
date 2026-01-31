/*

🚀Question : Floyd’s triangle

*/

let n = 5;
let count = 0;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    count++;
    process.stdout.write(`${count} `);
  }
  console.log();
}
