/*

🚀Question : Count vowels & consonants

*/

let string = "elephant56";
let consonants = 0;
let vowels = 0;
for (let i = 0; i < string.length; i++) {
  let ch = string[i].toLowerCase();
  if (ch >= "a" && ch <= "z") {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      vowels++;
    } else {
      consonants++;
    }
  }
}
console.log("Vowels ", vowels);
console.log("Consonants ", consonants);
