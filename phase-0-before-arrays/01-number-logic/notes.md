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

## 5️⃣ Strong Number

### 🔹 Definition

A **Strong Number** is a number whose **sum of factorials of its digits** is equal to the original number.

Example:

* `145` → `1! + 4! + 5! = 1 + 24 + 120 = 145` ✅

---

### 🔹 FLOW / APPROACH

1. Store the original number in a copy variable.
2. Initialize `sum = 0`.
3. Extract digits one by one using modulo (`% 10`).
4. For each digit:

   * Calculate factorial of the digit.
   * Add it to `sum`.
5. Remove the last digit (divide by 10).
6. After loop ends:

   * If `sum == original number` → Strong Number
   * Else → Not Strong Number

---

### 🔹 Key DSA Insight

* Digits are independent → factorial is applied **digit-wise**.
* This is a classic **digit extraction + accumulation** problem.

---

## 2️⃣ Sum of Prime Digits in a Number

### 🔹 Definition

Find the **sum of digits** in a number which are **prime**.

📌 Prime digits are **fixed**:

```
2, 3, 5, 7
```

---

### 🔹 FLOW / APPROACH

1. Initialize `sum = 0`.
2. Extract digits from the number one by one.
3. For each digit, check:

   * Is it one of `{2, 3, 5, 7}`?
4. If yes → add digit to `sum`.
5. Ignore non-prime digits.
6. After all digits processed:

   * If `sum > 0` → print sum
   * Else → no prime digits present

---

### 🔹 Example Dry Run

Number: `23745`

* Digits: `2, 3, 7, 4, 5`
* Prime digits: `2, 3, 7, 5`
* Sum = `17`

---

### 🔹 Key DSA Insight

* No range involved.
* Prime check is **not dynamic** here because digits are limited (0–9).

---

## 3️⃣ All Divisors in Sorted Order

### 🔹 Definition

Print **all divisors** of a number in **ascending (sorted) order**.

---

### 🔹 Core Concept (MOST IMPORTANT)

> **Divisors always come in pairs**

If `i` divides `n`, then `(n / i)` is also a divisor.

Example:

```
36 → (1,36), (2,18), (3,12), (4,9), (6,6)
```

The middle point is `√n`.

---

### 🔹 WHY √n is enough?

* After `√n`, divisor pairs repeat in reverse.
* So checking till `√n` gives **all divisors** efficiently.


---

### 🔹 FLOW / APPROACH (WITHOUT SORT)

1. Loop `i` from `1` to `√n`.
2. If `n % i == 0`:

   * `i` is a **small divisor** → print/store directly.
   * `n / i` is a **big divisor** → store separately.
3. Avoid duplicate when `i == n / i` (perfect square case).
4. After loop ends:

   * Print big divisors in **reverse order**.

This naturally produces sorted order.

---

### 🔹 Example

Number: `28`

* Small divisors: `1, 2, 4`
* Big divisors: `28, 14, 7`

Sorted output:

```
1, 2, 4, 7, 14, 28
```

---

### 🔹 Key DSA Insight

* Sorting is achieved by **logic**, not by `sort()`.
* This approach is **interview-preferred**.

---

## 4️⃣ Harshad Number (Niven Number)

### 🔹 Definition

A **Harshad Number** is a number that is **divisible by the sum of its digits**.

---

### 🔹 FLOW / APPROACH

1. Store original number in a copy variable.
2. Initialize `sum = 0`.
3. Extract digits one by one.
4. Add each digit to `sum`.
5. After loop:

   * If `original number % sum == 0` → Harshad Number
   * Else → Not Harshad Number

---

### 🔹 Example

Number: `18`

* Digit sum: `1 + 8 = 9`
* `18 % 9 == 0` → Harshad ✅

---

### 🔹 Key DSA Insight

* This is a **digit-sum + divisibility** problem.
* Similar pattern used in multiple number problems.

---

## 🔁 Common Pattern Across All Problems

1. Store original number.
2. Extract digits using `% 10`.
3. Reduce number using `/ 10`.
4. Apply condition / calculation on digits.
5. Compare final result with original number.

---

✅ *These notes reflect my learning journey and approach while starting DSA from basics.*