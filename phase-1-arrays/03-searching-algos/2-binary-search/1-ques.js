let arr = [2, 5, 8, 19, 45, 67, 78, 88, 94];
let target = 88;
let st = 0,
  en = arr.length - 1,
  index = -1;

while (st <= en) {
  let mid = Math.floor((st + en) / 2);
  if (arr[mid] === target) {
    index = mid;
    break;
  } else if (arr[mid] < target) {
    st = mid + 1;
  } else {
    en = mid - 1;
  }
}
let result = index == -1 ? "Not found" : "Found at " + index + " index";
console.log(result);
