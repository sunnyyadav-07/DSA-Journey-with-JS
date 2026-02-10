/*

🚀Question : Check if string contains only digits

*/
let string = "sunny231";
let isOnlyDigits = true;

for (let i = 0; i < string.length; i++) {
  let ch = string[i];
  if (!(ch >= '0' && ch <= '9')) {
    isOnlyDigits = false;
    break;
  }
}
if (isOnlyDigits) {
  console.log("string contains only digits");
} else {
  console.log("strings do not contains only digits");
}
