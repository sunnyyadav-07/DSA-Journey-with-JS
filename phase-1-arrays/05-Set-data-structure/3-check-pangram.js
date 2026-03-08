/*

Question : Check if the sentence is Pangram

*/
let sentence = "thequickbrownfoxjumpsoverthelazydog";
let set = new Set(sentence);
let isPangram = true;
let alphabets = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < alphabets.length; i++) {
  if (!set.has(alphabets[i])) {
    isPangram = false;
    break;
  }
}
console.log(isPangram);
