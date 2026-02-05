/*

🚀Question : Find first repeating digit

 */

let number = 14234532;
let temp = number;

if (number <= 10) {
  console.log("Repeating digit does not exit");
} else {
  let digits = 0;
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    digits++;
  }
  let power = Math.pow(10, digits - 1);
  let repeatingDigit = null;
  let seen = new Array(10).fill(false);

  while (power > 0) {
    let digit = Math.floor(number / power);
    if (seen[digit]) {
      repeatingDigit = digit;
      break;
    }
    seen[digit] = true;
    number = number % power;
    power = Math.floor(power / 10);
  }
  // for (let i = 1; i <= digits; i++) {
  //   let firstDigit = Math.floor(number / power);
  //   let restDigit = number % power;
  //   number = restDigit;
  //   while (restDigit > 0) {
  //     let digit = restDigit % 10;
  //     if (digit === firstDigit) {
  //       repeatingDigit = firstDigit;
  //       isFind = true;
  //       break;
  //     }
  //     restDigit = Math.floor(restDigit / 10);
  //   }
  //   power = Math.floor(power / 10);
  //   if (isFind) break;
  // }
  if (repeatingDigit !== null) {
    console.log("The first repeating digit is : ", repeatingDigit);
  } else {
    console.log("Repeating digit does not exist");
  }
}
