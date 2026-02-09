/*

🚀Question : Find longest word in sentence

*/
let sentence = "My love  is Javascript";
let currentWord = "";
let longestWord = "";
for (let i = 0; i <= sentence.length; i++) {
  if (
    (sentence[i] === " " && currentWord.length > 0) ||
    i === sentence.length
  ) {
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
    currentWord = "";
  } else {
    currentWord = currentWord + sentence[i];
  }
}
// if (currentWord.length > longestWord.length) {
//   longestWord = currentWord;
// }
console.log(longestWord);
