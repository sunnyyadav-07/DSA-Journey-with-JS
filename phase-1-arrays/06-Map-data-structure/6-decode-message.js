/*

Question : Decode the message

You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.

Align the substitution table with the regular English alphabet.

Each letter in message is then substituted using the table.

Spaces ' ' are transformed to themselves.

For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

Return the decoded message.

*/

let key = "the quick brown fox jumps over the lazy dog";
let message = "vkbs bs t suepuv";
// let map = new Map();
// let alphabets = "abcdefghijklmnopqrstuvwxyz";
// let alph = 0;
// for (let i = 0; i < key.length; i++) {
//   if (key[i] === " ") {
//     continue;
//   } else if (!map.has(key[i])) {
//     map.set(key[i], alphabets[alph]);
//     alph++;
//   }
// }
// let decodedMsg = "";
// for (let i = 0; i < message.length; i++) {
//   if (map.has(message[i])) {
//     decodedMsg += map.get(message[i]);
//   } else if (message[i] === " ") {
//     decodedMsg += " ";
//   }
// }
// console.log(decodedMsg)
let freq = new Array(26).fill(-1);
let chCode = "a".charCodeAt(0);
let ans=""
for (let i = 0; i < key.length; i++) {
  if (key[i] === "  ") {
    continue;
  }
  let index = key[i].charCodeAt() - "a".charCodeAt();
  if (freq[index] == -1) {
    freq[index] = String.fromCharCode(chCode);
    chCode++
  }
}
for (let it of message) {
  if (it === " ") {
    ans += " ";
  } else {
    let index = it.charCodeAt(0) - "a".charCodeAt(0);
    console.log(index)
    ans += freq[index];
    console.log(ans)
  }
}
console.log(freq);
console.log(ans)
