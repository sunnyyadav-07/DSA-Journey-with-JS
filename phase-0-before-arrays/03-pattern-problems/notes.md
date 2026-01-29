
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

## 2️⃣ Butterfly Pattern 🦋

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

## 3️⃣ Diamond Pattern 💎

###  Problem

Print a diamond shape using stars.

### 🔍 Example (n = 5)

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

