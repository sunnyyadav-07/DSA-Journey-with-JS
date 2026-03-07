# Matrix DSA Notes

These notes are designed so that during revision you can quickly recall:

- What the question asks
- The core idea to solve it
- The code pattern
- Time & Space complexity

---

# 1. Matrix Diagonal Sum

## Question

Given a square matrix, return the sum of its **primary diagonal** and **secondary diagonal** elements.

Example:

1 2 3
4 5 6
7 8 9

Primary diagonal → 1 + 5 + 9

Secondary diagonal → 3 + 5 + 7

Center element should **not be counted twice**.

---

## Key Idea

Two diagonal conditions:

Primary diagonal

```
i === j
```

Secondary diagonal

```
i + j === n - 1
```

Add elements satisfying these conditions.

---

## Code Pattern

```javascript
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (i === j || i + j === arr[i].length - 1) {
      sum += arr[i][j];
    }
  }
}
console.log(sum);
```

---

## Complexity

Time Complexity → O(n²)

Space Complexity → O(1)

---

# 2. Transpose Matrix

## Question

Convert rows into columns.

Example:

Original

2 4 -1
-10 5 11
18 -7 6

Transpose

2 -10 18
4 5 -7
-1 11 6

---

## Key Idea

Element position changes from

```
matrix[i][j]
```

to

```
transpose[j][i]
```

So rows become columns.

---

## Code Pattern

```javascript
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
```

---

## Complexity

Time Complexity → O(n²)

Space Complexity → O(n²) (new matrix created)

---

# 3. Flip and Invert Image

## Question

Two operations on a binary matrix:

1. Flip image horizontally
2. Invert the image (0 → 1 , 1 → 0)

Example

Original

1 1 0
1 0 1
0 0 0

After flip

0 1 1
1 0 1
0 0 0

After invert

1 0 0
0 1 0
1 1 1

---

## Key Idea

Step 1 → Reverse every row

Step 2 → Invert every element

---

## Code Pattern

### Reverse rows

```javascript
let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

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
```

### Invert values

```javascript
for (let i = 0; i < image.length; i++) {
  for (let j = 0; j < image[i].length; j++) {
    image[i][j] = image[i][j] === 0 ? 1 : 0;
  }
}
```

---

## Complexity

Time Complexity → O(n²)

Space Complexity → O(1)

---

# 4. Rotate Image (90° Clockwise In Place)

## Question

Rotate a square matrix by **90 degrees clockwise** without using extra space.

Example

Original

1 2 3
4 5 6
7 8 9

Rotated

7 4 1
8 5 2
9 6 3

---

## Key Interview Trick

Two steps:

1. Transpose matrix
2. Reverse every row

This combination results in **90° clockwise rotation**.

---

## Code Pattern

### Step 1 Transpose

```javascript
let image = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < image.length; i++) {
  for (let j = i; j < image.length; j++) {
    let temp = image[i][j];
    image[i][j] = image[j][i];
    image[j][i] = temp;
  }
}
```

### Step 2 Reverse rows

```javascript
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
```

---

## Complexity

Time Complexity → O(n²)

Space Complexity → O(1)

---

# 5. Set Matrix Zero

## Question

If any element in the matrix is **0**, set its **entire row and column** to 0.

Example

Original

0 1 2 0
3 4 5 2
1 3 1 5

Result

0 0 0 0
0 4 5 0
0 3 1 0

---

## Key Idea

We cannot immediately change rows/columns when we find 0 because it creates **new zeros** that break the logic.

So we solve in **two passes**.

Pass 1 → store which rows and columns contain 0

Pass 2 → convert those rows and columns to 0

---

## Code Pattern

```javascript
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

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (rowCheck[i] == i || colCheck[j] == j) {
      matrix[i][j] = 0;
    }
  }
}
```

---

## Complexity

Time Complexity → O(n × m)

Space Complexity → O(n + m)

---

# Important Matrix Patterns to Remember

Most interview matrix problems are built on these patterns:

1. Diagonal traversal
2. Transpose
3. Reverse rows / columns
4. Marker technique
5. Boundary traversal

