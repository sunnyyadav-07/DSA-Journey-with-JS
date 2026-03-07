/*

Question : Rotate image(in place)

*/


// Time complexity O(n^2)
// Space complexity O(1)

let image = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < image.length; i++) {
  for (let j = i; j < image[i].length; j++) {
    let temp = image[i][j];
    image[i][j] = image[j][i];
    image[j][i] = temp;
  }
}
for (let i = 0; i < image.length; i++) {
  let arr = image[i];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
}
console.log(image);
