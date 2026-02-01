/*

🚀Question : Count digits function

*/
function countDigits(number) {
  number = Math.abs(number);
  if (number === 0) return 1;

  let digits = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    digits++;
  }
  return digits;
}
console.log(countDigits(310));
