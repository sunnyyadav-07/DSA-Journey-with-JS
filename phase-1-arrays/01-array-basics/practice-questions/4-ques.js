  /*

  Question : Remove duplicates from sorted array

  */

  let arr = [1, 1, 1, 2, 2, 3];

  let i = 1;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
    i++;
  }
  arr.length = j + 1;
  console.log(arr);
