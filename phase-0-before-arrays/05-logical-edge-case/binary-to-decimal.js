/*

🚀Question : Convert binary to decimal (manual)

*/
let binaryNumber = 1110;
let copy = binaryNumber;
let isValidBinary = true;
while (copy > 0) {
  let bit = copy % 10;
  if (!(bit === 0 || bit === 1)) {
    isValidBinary = false;
  }
  copy = Math.floor(copy / 10);
}
if (isValidBinary) {
  let power = 0;
  let decimal = 0;
  let binaryCopy = binaryNumber;
  while (binaryCopy > 0) {
    let bit = binaryCopy % 10;
    decimal = decimal + Math.pow(2, power) * bit;
    power++;
    binaryCopy = Math.floor(binaryCopy / 10);
  }
  console.log("Binary to decimal ", decimal);
} else {
  console.log("This is not a binary number");
}
