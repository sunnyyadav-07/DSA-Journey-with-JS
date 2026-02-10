/*

🚀Question : Compress string (aaabb → a3b2)

*/
let string = "aaabb";
let compressedStr = "";
let count = 1;
for (let i = 0; i < string.length; i++) {
  if (string[i] === string[i + 1]) {
    count++;
  } else {
    compressedStr += string[i] + count;
    count = 1;
  }
}

console.log(compressedStr);
