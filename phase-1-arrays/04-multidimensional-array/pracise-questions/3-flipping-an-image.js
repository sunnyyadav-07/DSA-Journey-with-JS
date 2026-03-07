/*

Question : Flipping an image

*/

// Time complexity O(n^2)
// Space complexity O(1)

let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

// reverse the image
for (let i = 0; i < image.length; i++) {
  let newArr = image[i];
  let k = 0;
  let j = newArr.length-1;
  while (k < j) {
    let temp = newArr[k];
    newArr[k] = newArr[j];
    newArr[j] = temp;
    k++;
    j--;
  }
}
console.log(image);

// inver the image

for (let i = 0; i < image.length; i++) {
  for (let j = 0; j < image[i].length; j++) {
    image[i][j] = image[i][j] === 0 ? 1 : 0;
  }
}

console.log(image)