/*

🚀Question : Remove duplicate characters

*/
let string = "ProgRamming";
let seen = {};
let result = "";
for (let i = 0; i < string.length; i++) {
  if (!seen[string[i].toLowerCase()]) {
    seen[string[i]] = true;
    result += string[i];
  }
}
console.log(result);


// Here, I am using an ASCII frequency array of fixed size 256 to track first occurrences in O(1) time and O(1) space.

// let seen = new Array(256).fill(false);
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   let code = str.charCodeAt(i);

//   if (!seen[code]) {
//     seen[code] = true;
//     result += str[i];
//   }
// }

// console.log(result);
