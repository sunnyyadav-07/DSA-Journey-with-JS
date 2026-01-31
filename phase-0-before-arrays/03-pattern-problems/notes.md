
# 🧩 Pattern Practice Notes 

## 1️⃣ Hollow Square Pattern

###  Problem

Print a square of size `n` where:

* Border is `*`
* Inside is empty (spaces)

###  Example (n = 5)

```
* * * * *
*       *
*       *
*       *
* * * * *
```

###  Logic

Print `*` when:

* First row → `i === 1`
* Last row → `i === n`
* First column → `j === 1`
* Last column → `j === n`

Else, print space.

###  Formula

* Rows = `n`
* Columns = `n`

###  Code

```js
let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n || j === 1 || j === n) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}
```

---

## 2️⃣ Butterfly Pattern 

###  Problem

Print a butterfly shape using stars and spaces.

###  Example (n = 5)

```
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *
```

###  Structure

Butterfly = **2 mirrored halves**

* Upper Half → Growing wings
* Lower Half → Shrinking wings

###  Formula

* Total rows = `2 * n - 1`

For each row `i`:

* Left stars = `i`
* Middle spaces = `2 * (n - i)`
* Right stars = `i`

###  Code

```js
let n = 5;

// Upper half
for (let i = 1; i <= n; i++) {
  // Left stars
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }

  // Spaces
  for (let j = 1; j <= 2 * (n - i); j++) {
    process.stdout.write(" ");
  }

  // Right stars
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }

  console.log();
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
  // Left stars
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }

  // Spaces
  for (let j = 1; j <= 2 * (n - i); j++) {
    process.stdout.write(" ");
  }

  // Right stars
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }

  console.log();
}
```
---

## 3️⃣ Diamond Pattern 

###  Problem

Print a diamond shape using stars.

###  Example (n = 5)

```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

###  Structure

Diamond = **2 Pyramids**

* Upper Pyramid → Growing
* Lower Pyramid → Shrinking

###  Formula

* Total rows = `2 * n - 1`

For each row `i`:

* Spaces = `n - i`
* Stars = `2 * i - 1`

###  Code

```js
let n = 5;
// upper half diamond
for (let i = 1; i <= n; i++) {
  // spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  // right part
  for (let j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}
// lower half diamond
for (let i = 1; i <= n-1; i++) {
  // spaces
  for (let j = 1; j <= i; j++) {
    process.stdout.write(" ");
  }
  // right part
  for (let j = 1; j <= 2 * (n - i) - 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}
```

##  Master Formula Cheat Sheet

| Pattern       | Spaces Formula | Stars Formula      |
| ------------- | -------------- | ------------------ |
| Hollow Square | Inside only    | Border only        |
| Butterfly     | `2 * (n - i)`  | `i` (left + right) |
| Diamond       | `n - i`        | `2 * i - 1`        |

---

## 4. X Pattern (Star Pattern)

###  Problem Statement

Print an **X shape** using stars (`*`) for a given size `n`.

Example for `n = 5`:

```
*   *
 * * 
  *  
 * * 
*   *
```

###  Core Logic

A star is printed on:

* **Left diagonal** → `row == column`
* **Right diagonal** → `row + column == n + 1`

All other positions print space.


###  JavaScript Code

```js
let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j || i + j === n + 1) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}
```
---

## 5. Zig-Zag Pattern (3 Rows Only)

### 🔹 Problem Statement

Print a **zig-zag / wave star pattern** using **3 rows** and `N` columns.

Example (`N = 9`):

```
*   *   *
 * * * * 
  *   *  
```

### ⚠️ Limitation

This logic works **only for 3 rows**.

To make it work for **any number of rows**, we need to use a **2D array + pointer + direction approach**, which is based on arrays (not studied yet).

---

### 🔹 Core Logic

Star is printed when:

* `(row + col) % 4 == 0`
* OR `row == 2 AND col % 4 == 0`

---

###  JavaScript Code

```js
let rows = 3;
let columns = 9;

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= columns; j++) {
    if ((i + j) % 4 === 0 || (i === 2 && j % 4 === 0)) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}
```
---

## 6. Hollow Pyramid (Star Pattern)

### 🔹 Problem Statement

Print a **hollow pyramid** where only borders and the base are filled with stars.

Example (`n = 5`):

```
        *
      *   *
    *       *
  *           *
* * * * * * * * *
```

### 🔹 Core Logic

For each row:

* Print left spaces → `n - i`
* Width of pyramid → `2 * i - 1`
* Print star when:

  * First column (`j == 1`)
  * Last column (`j == width`)
  * Last row (`i == n`)

---

###  JavaScript Code

```js
let n = 5;

for (let i = 1; i <= n; i++) {
  const width = 2 * i - 1;

  for (let s = 1; s <= n - i; s++) {
    process.stdout.write("  ");
  }

  for (let j = 1; j <= width; j++) {
    if (j === 1 || j === width || i === n) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }

  console.log();
}
```
---

## 7. Inverted Number Triangle

###  Problem Statement

Print a **number triangle** where rows decrease in size from top to bottom.

Example (`n = 5`):

```
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
```

###  Core Logic

* Total rows = `n`
* For each row, print numbers from `1` to `n - row + 1`

---
###  JavaScript Code

```js
let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}
```

## 8. Floyd’s Triangle

###  Problem Statement

Print a **continuous number triangle** where numbers increase row-wise.

Example (`n = 5`):

```
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

###  Core Logic

* Maintain a **counter** starting from 1
* Each row prints `row` numbers
* Increment counter after each print

---

###  JavaScript Code

```js
let n = 5;
let count = 1;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(count + " ");
    count++;
  }
  console.log();
}
```
---

## 9. Number Pyramid (Increment–Decrement)

###  Problem Statement

Print a **palindromic number pyramid** where numbers increase to the center and then decrease.

Example (`n = 5`):

```
    1
   121
  12321
 1234321
123454321
```

###  Core Logic

Each row has three parts:

1. Left spaces → `n - i`
2. Increasing numbers → `1 to i`
3. Decreasing numbers → `i - 1 to 1`

---
###  JavaScript Code

```js
let n = 5;

for (let i = 1; i <= n; i++) {
  for (let s = 1; s <= n - i; s++) {
    process.stdout.write(" ");
  }

  for (let j = 1; j <= i; j++) {
    process.stdout.write(j.toString());
  }

  for (let j = i - 1; j >= 1; j--) {
    process.stdout.write(j.toString());
  }

  console.log();
}
```



