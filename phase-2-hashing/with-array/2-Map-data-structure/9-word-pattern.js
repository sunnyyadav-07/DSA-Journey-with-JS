/*

Question : Word pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.

*/

let pattern="abba";
let s="dog cat cat dog";

const wordPattern = function (pattern, s) {
  let map1 = new Map();
  let map2 = new Map();
  let words = s.split(" ");
  if (pattern.length !== words.length) return false;
  for (let i = 0; i < words.length; i++) {
    let p = pattern[i];
    let w = words[i];
    if (!map1.has(p) && !map2.has(w)) {
      map1.set(p, w);
      map2.set(w, p);
    } else {
      if (map1.get(p) !== w || map2.get(w) !== p) {
        return false;
      }
    }
  }
  return true;
};

console.log(wordPattern(pattern,s))