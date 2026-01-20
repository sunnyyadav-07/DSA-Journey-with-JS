# DSA loops Problems — Notes

> These notes document **my approach and understanding** while solving common beginner DSA problems. The focus is on **logic, step-by-step thinking, and edge cases**, not just final answers.

---

## 1. Print All Numbers Whose Reverse Is Same (Palindrome Numbers)

### 📌 Problem Statement

Print all numbers between **1 and 1000** whose **reverse is equal to the original number**.

Such numbers are called **Palindrome Numbers**.

### 🔍 Example

| Number | Reverse | Valid? |
| ------ | ------- | ------ |
| 121    | 121     | ✅      |
| 343    | 343     | ✅      |
| 123    | 321     | ❌      |

---

### 🧠 Approach

1. Loop from `1` to `1000`
2. For each number:

   * Store a copy
   * Reverse the number using modulo (`% 10`) and division (`/ 10`)
3. Compare reversed number with original
4. If equal → print

---

### 💻 JavaScript Code

```js
for (let i = 1; i <= 1000; i++) {
  let num = i;
  let reverse = 0;

  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  if (reverse === i) {
    console.log(i);
  }
}
```

---

### ⚠️ Edge Cases

* `0` is skipped (division by 0 is invalid)
* Single-digit numbers (1–9) are always valid

---

### ⏱ Time Complexity

* Outer loop: `n`
* Digit processing: `log10(n)`

**Total: O(n log n)**

---

## 2. Count Numbers Divisible by Both Sum & Product of Digits

### 📌 Problem Statement

Count how many numbers between **1 and 1000** are divisible by:

* The **sum of their digits**, and
* The **product of their digits**

---

### 🔍 Example

Number = `12`

* Digits → `1, 2`
* Sum = `3`
* Product = `2`

Check:

```
12 % 3 == 0 ✅
12 % 2 == 0 ✅
```

So, `12` is valid

---

### 🧠 Approach

1. Loop from `1` to `1000`
2. Extract digits using `% 10`
3. Calculate:

   * Sum of digits
   * Product of digits
4. Skip numbers where product = `0`
5. Check divisibility by both sum and product
6. Maintain a counter

---

### 💻 JavaScript Code

```js
let count = 0;

for (let i = 1; i <= 1000; i++) {
  let sum = 0;
  let product = 1;
  let num = i;

  while (num > 0) {
    let digit = num % 10;

    if (digit === 0) {
      product = 0;
      break;
    }

    sum += digit;
    product *= digit;
    num = Math.floor(num / 10);
  }

  if (product !== 0 && i % sum === 0 && i % product === 0) {
    count++;
  }
}

console.log("Valid numbers count :", count);
```

---

### ⚠️ Edge Cases

* Any number containing digit `0` is skipped (product becomes 0 → division invalid)
* Single-digit numbers (1–9) are valid

---

### ⏱ Time Complexity

**O(n log n)**

---

## 3. Print All Numbers Where Square Ends with the Number (Automorphic Numbers)

### 📌 Problem Statement

Print numbers between **1 and 100** whose **square ends with the number itself**.

Such numbers are called **Automorphic Numbers**.

---

### 🔍 Example

| Number | Square | Valid? |
| ------ | ------ | ------ |
| 5      | 25     | ✅      |
| 6      | 36     | ✅      |
| 25     | 625    | ✅      |
| 76     | 5776   | ✅      |

---

### 🧠 Approach

1. Loop from `1` to `100`
2. Calculate square
3. Count number of digits in the original number
4. Extract last `digits` from square using:

   ```
   square % (10 ^ digits)
   ```
5. Compare with original number

---

### 💻 JavaScript Code

```js
for (let i = 1; i <= 100; i++) {
  let square = i * i;
  let digits = 0;
  let num = i;

  while (num > 0) {
    digits++;
    num = Math.floor(num / 10);
  }

  if (i === square % Math.pow(10, digits)) {
    console.log(i);
  }
}
```
---

### ⚠️ Edge Cases

* Single-digit numbers work naturally
* Logic depends on digit count of the **original number**, not the square

---

### ⏱ Time Complexity

**O(n log n)**

---

## 🧠 Interview One-Liners

* **Palindrome Numbers:**

  > Numbers that remain the same when reversed

* **Divisible by Sum & Product:**

  > Skip numbers with digit 0 to avoid division by zero

* **Automorphic Numbers:**

  > Numbers whose square ends with the number itself

---
## 🏆 Final Note

**These problems improve:**

* Modulo & Division logic
* Edge case handling
* Interview-style problem solving
---

## 🛠 Learning Progress Note

> **Current Focus:** Working on **Loops (for / while)** and digit extraction logic.

### Why This Matters

* Loops + digit logic form the base of many **DSA & interview problems**
* Helps in building strong fundamentals for:

  * Palindrome checks
  * Number property problems
  * Pattern & math-based coding rounds

---

## 4. Find First K Prime Numbers

### 📌 Problem Statement  
Given a number **K**, print the **first K prime numbers** starting from 2.

---

### 🧠 Concept  
A **prime number** is a number greater than 1 that is divisible only by 1 and itself.

Instead of checking all numbers in a range, we:
- Start from 2
- Check each number for primality
- Keep a count of how many primes we have found
- Stop when count == K

---

### 🔁 Approach (Optimized Thinking)
1. Print `2` separately (only even prime)
2. Check only **odd numbers** after that
3. For each number, check divisibility from `3` to `√n`
4. If prime → print → increment count
5. Stop when count reaches K

---

### ⏱ Time Complexity  
- Prime check: **O(√n)**  
- Overall: Depends on how large the Kth prime is  
- Optimized by skipping even numbers

---

### ✅ Optimized JavaScript Code
```js
let K = 10;

if (K >= 1) {
  console.log(2);
}

let count = 1;
let num = 3;

while (count < K) {
  let isPrime = true;

  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
    count++;
  }

  num += 2; // skip even numbers
}
```
 **Example**
Input: K = 5
Output:
2
3
5
7
11

## 2. Count Numbers with Even Digit Count

 **Problem Statement**
- Count how many numbers in a given range (1 to N) have an even number of digits

🔹 Approach  Brute Force (Math Based)
🔁 Steps
1. Loop from 1 to N
2. Count digits of each number using division
3. If digit count is even → increment answer

 **Time Complexity**

O(N log N)
(Because digit counting takes log N time)

✅* JavaScript Code*
```js
let N = 1000;
let count = 0;

for (let i = 1; i <= N; i++) {
  let num = i;
  let digits = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    digits++;
  }

  if (digits % 2 === 0) {
    count++;
  }
  ```

> ✍️ *Note:* This repository reflects my daily practice and improvement in **loop-based problem solving and number theory fundamentals.*
