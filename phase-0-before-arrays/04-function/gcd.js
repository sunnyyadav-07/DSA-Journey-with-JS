/*

🚀Question : GCD function

*/

function GCD(a,b){

  if (!Number.isInteger(a) || !Number.isInteger(b))
    return "only integers allowed";

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;

}