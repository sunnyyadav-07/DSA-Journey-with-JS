/*

Question : Transpose matrix

*/

// Time complexity O(n^2)
// Space complexity O(n^2)

let matrix = [
  [2, 4, -1],
  [-10, 5, 11],
  [18, -7, 6],
];

let transposeMatrix = Array.from({ length: matrix[0].length }, () =>
  new Array(matrix.length).fill(0),
);

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    transposeMatrix[j][i] = matrix[i][j];
  }
}
console.log(transposeMatrix);
