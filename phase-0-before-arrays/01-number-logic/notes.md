# 📘 DSA Basics – Notes 

These notes document **my approach and understanding** while solving common beginner DSA problems. The focus is on **logic, step-by-step thinking, and edge cases**, not just final answers.

---

## 🔢 1. Armstrong Number

### 🔍 Definition

An **Armstrong number** is a number whose value is equal to the **sum of its digits each raised to the power of the total number of digits**.

**Example:**

* 153 → 1³ + 5³ + 3³ = 153 ✅

---

### 🧠 Approach I Followed

1. Store the original number.
2. Count the total number of digits.
3. Extract digits one by one using modulo (`% 10`).
4. Raise each digit to the power of digit count.
5. Add all powered digits.
6. Compare the final sum with the original number.
7. Implemented own power function also.

---

### ⚠️ Edge Cases Considered

* Single-digit numbers are Armstrong numbers.
* Negative numbers are **not** Armstrong numbers.

---

## 🔢 2. Perfect Number

### 🔍 Definition

A **Perfect number** is a positive integer that is equal to the **sum of its proper divisors** (excluding the number itself).

**Example:**

* 6 → 1 + 2 + 3 = 6 ✅
* 28 → 1 + 2 + 4 + 7 + 14 = 28 ✅

---

### 🧠 Approach I Followed

1. Initialize sum = 0.
2. Loop from `1` to `number / 2`.
3. If `number % i === 0`, add `i` to sum.
4. After loop, compare sum with the original number.

---

### ⚠️ Edge Cases Considered

* 0 → Not a perfect number
* 1 → Not a perfect number
* Perfect numbers are defined only for **numbers > 1**

---

## 🔢 3. GCD & LCM

### 🔍 Definitions

* **GCD (Greatest Common Divisor):** Largest number that divides both numbers.
* **LCM (Least Common Multiple):** Smallest number divisible by both numbers.

---

### 🧠 GCD Approach (Euclidean Algorithm)

1. Take two numbers `n1` and `n2`.
2. Repeatedly replace `(n1, n2)` with `(n2, n1 % n2)`.
3. Stop when `n2` becomes 0.
4. The remaining `n1` is the GCD.

---

### 🧠 LCM Approach

Used the mathematical relation:

```
LCM × GCD = a × b
```

So:

```
LCM = (a × b) / GCD
```

---

### ⚠️ Edge Cases Considered

* If any number is 0 → GCD/LCM not defined
* If both numbers are same → GCD = LCM = that number

---

## 🔢 4. Set Bits in a Number

### 🔍 Definition

**Set bits** are the number of `1`s present in the binary representation of a number.

**Example:**

* 13 → Binary: 1101 → Set bits = 3

---

### 🧠 Initial Learning Approach (Binary Conversion)

1. Convert decimal number to binary using repeated division by 2.
2. Store remainders.
3. Count the number of `'1'`s in the binary value.

This helped me **understand the concept clearly**.

---

### 🔥 Optimized DSA Approach (Brian Kernighan Algorithm)

1. Use the operation `n = n & (n - 1)`.
2. Each operation removes **one set bit**.
3. Count how many times the loop runs.

---

### ⚠️ Why This Works

* `n & (n - 1)` clears the **rightmost set bit**.
* Loop runs only for the number of set bits.

---

### ⏱️ Complexity

* Time: `O(number of set bits)`
* Space: `O(1)`


---

✅ *These notes reflect my learning journey and approach while starting DSA from basics.*
