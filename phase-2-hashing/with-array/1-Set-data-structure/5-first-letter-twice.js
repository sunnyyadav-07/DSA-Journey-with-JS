/*

Question : First letter appears twice

Given a string s consisting of lowercase English letters, return the first letter to appear twice.

*/

// Time complexity O(n)
// Space complexity O(n)

let string="abccbaacz";

var repeatedCharacter = function (s) {
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      return s[i];
    }
    set.add(s[i]);
  }
};
console.log(repeatedCharacter(string));