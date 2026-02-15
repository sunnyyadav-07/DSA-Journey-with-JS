/*

Question : Given an array of integers, update every element with the multiplication of the previous and next elements with the following exceptions:

The first element is replaced by the multiplication of the first and second elements.

The last element is replaced by the multiplication of the last and second last elements.

Input Format:
First line: T (Number of test cases)
For each test case:
First line: N (Size of array)
Second line: A[0] A[1] ... A[N-1] (Integer array elements)

*/


let arr = [2, 3, 4];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (i === 0) {
    newArr[i] = arr[i] * arr[i + 1];
  } else if (i === arr.length - 1) {
    newArr[i] = arr[arr.length - 2] * arr[arr.length - 1];
  } else {
    newArr[i] = arr[i - 1] * arr[i + 1];
  }
}
console.log(newArr);