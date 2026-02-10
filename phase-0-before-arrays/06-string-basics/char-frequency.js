/*

🚀Question : Count frequency of each character

*/
let string = "elephant";
let frequency = new Array(128).fill(0);
for (let i = 0; i < string.length; i++) {
  let ch = string.charCodeAt(i);
  frequency[ch]++;
}
for (let i = 0; i < 128; i++) {
  if (frequency[i] > 0) {
    console.log(String.fromCharCode(i), "=>", frequency[i]);
  }
}
