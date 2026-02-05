/*

🚀Question : Find first non-repeating digit

 */
let number = 24373542;
let temp = number;
if (number <= 9) {
  console.log("non-repeating digit is ", number);
} else {
  let digitCount = 0;
  let count = new Array(10).fill(0);
  while (temp > 0) {
    let digit = temp % 10;
    count[digit]++;
    temp = Math.floor(temp / 10);
    digitCount++;
  }
  let copy=number
  let power = Math.pow(10, digitCount - 1);
  let nonRepeatingDigit = null;
  while (power > 0) {
    let digit = Math.floor(copy / power);

    if (count[digit] === 1) {
      nonRepeatingDigit = digit;
      break;
    }
    copy=copy%power
    power = Math.floor(power / 10);
  }
  if(nonRepeatingDigit!==null){
    console.log('The first non-repeating digit is ',nonRepeatingDigit)
  }else{
    console.log('Non-repeating digit does not exist')
  }
}
