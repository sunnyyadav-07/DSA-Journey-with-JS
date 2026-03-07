/*

Question : Set matrix zero(in place)

*/

// Time complexity O(n*m)
// Space complexity O(n+m)

let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

// first check the row and cols which contain 0
const rowCheck = {};
const colCheck = {};
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === 0) {
      rowCheck[i] = i;
      colCheck[j] = j;
    }
  }
}
// then change the rows and cols to 0
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (rowCheck[i] == i || colCheck[j] == j) {
      matrix[i][j] = 0;
    }
  }
}
console.log(matrix);
