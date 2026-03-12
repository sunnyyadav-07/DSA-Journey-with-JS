/*

Question : Check if the sentence is Pangram

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

*/

// Time complexity O(n)
// Space complexity O(1)

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
