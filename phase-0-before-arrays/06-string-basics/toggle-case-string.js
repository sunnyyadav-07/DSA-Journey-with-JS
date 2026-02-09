/*

🚀Question : Toggle case of string

*/
let string = "SuNnY123aB";
let result = "";
for (let i = 0; i < string.length; i++) {
  let ch = string[i];
  if (ch >= "a" && ch <= "z") {
    result += ch.toUpperCase();
  } else if (ch >= "A" && ch <= "Z") {
    result += ch.toLowerCase();
  } else {
    result += ch;
  }
}
console.log(result);

// with ASCII code method
for (let i = 0; i < string.length; i++) {
  let code = string.charCodeAt(i);
  if (code >= 97 && code <= 122) {
    result += String.fromCharCode(code-32)
  } else if (code >= 65 && code <= 90) {
   result += String.fromCharCode(code + 32);
  } else {
    result += string[i];
  }
}
console.log(result);
