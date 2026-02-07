#  DSA Notes — Logical Edge-Case Problems

---

## 1️⃣ Check if Number Contains Only 0s & 1s

###  Problem Statement
Given a number, check whether **all its digits are either 0 or 1**.  
If any digit other than 0 or 1 appears, the number is **invalid**.

This is also known as checking whether a number is a **binary number**.

---

###  Approach (DSA Logic)
1. Take the number.
2. Extract digits one by one using `% 10`.
3. If any digit is **not 0 and not 1**, return `false`.
4. If all digits are checked and valid, return `true`.

---

###  Example
**Input:** `10101`  
Digits: `1, 0, 1, 0, 1`  
All digits are 0 or 1 → ✅ Valid

**Input:** `101201`  
Digit `2` found → ❌ Invalid

---

###  Code 
```js
let number = 1010101;
let isValid = true;
if (number === 0 || number === 1) {
  console.log("number is valid");
 
}else{
while (number > 0) {
  let digit = number % 10;
  if (!(digit == 0 || digit == 1)) {
    isValid = false;
    break;
  }
  number = Math.floor(number / 10);
}
if (isValid) {
  console.log("Number is valid");
} else {
  console.log("Number is invalid");
}
}
```

**Complexity**

Time: O(N) → N = number of digits
Space: O(1)

## 2️⃣ Find Smallest Number With Same Digits

 **Problem Statement**
- Given a number, rearrange its digits to form the smallest possible number using the same digits.
- Leading zero is not allowed.

### Approach (Frequency Method)

- Count frequency of digits (0–9) using an array `count[10]`.
- Find the smallest non-zero digit and place it first.
- Place all `0s` after it.
- Place remaining digits in ascending order.

### Example
Input: 3102
Digits: 3, 1, 0, 2
Smallest arrangement → 1023

Input: 1005
Smallest arrangement → 1005

### Code
```js

let number = 11130005; // 1000135
let count = new Array(10).fill(0);
let temp = number;
while (temp > 0) {
  let digit = temp % 10;
  count[digit]++;
  temp = Math.floor(temp / 10);
}
let result = 0;
// first non-zero digit
for (let i = 1; i <= 9; i++) {
  if (count[i] > 0) {
    result = i;
    count[i]--;
    break;
  }
}
// adding 0 digit
while (count[0] > 0) {
  result = result * 10;
  count[0]--;
}

// adding rest of the digits

for (let i = 0; i <= 9; i++) {
  while (count[i] > 0) {
    result = result * 10 + i;
    count[i]--;
  }
}
console.log(result);
```
### Complexity

Time: O(N)
Space: O(1) (fixed size array of 10)

## 3️⃣ Check if Digits Can Form a Palindrome

### Problem Statement
- Given a number, check whether its digits can be rearranged to form a palindrome.
- A palindrome reads the same from left to right and right to left

### Golden Rule

- At most 1 digit can have an odd frequency
- If odd frequency digits > 1 → ❌ Palindrome not possible

### Example

Input: 1221
Counts: 1 → 2, 2 → 2
Odd digits = 0 → ✅ Possible

Input: 12223
Counts: 1 → 1, 2 → 3, 3 → 1
Odd digits = 3 → ❌ Not possible

### Code
```js

let number = 122233;
let count = new Array(10).fill(0);
let temp = number;
while (temp > 0) {
  let digit = temp % 10;
  count[digit]++;
  temp = Math.floor(temp / 10);
}
console.log(count);
let oddCount = 0;
for (let i = 0; i <= 9; i++) {
  if (count[i]%2!== 0) {
    oddCount++;
  }
}
let result=oddCount>1?false:true
console.log(result);
```
### Complexity

- Time: O(N)
- Space: O(1)

---

## 4️⃣ Count Trailing Zeros in Factorial

###  Problem Statement:

Given a number `N`, find how many **trailing zeros** are there in `N!` (factorial of N).

###  What are Trailing Zeros?

Trailing zeros are the number of `0`s at the **end of the factorial result**.

###  Example:

```
10! = 3628800
Trailing Zeros = 2
```

---

##  Core Idea

Trailing zeros are formed by the factor:

```
10 = 2 × 5
```

In a factorial, there are **more factors of 2 than 5**, so:

> The **number of trailing zeros depends only on the count of factor 5**.

---

##  Formula

```
count = floor(N / 5) + floor(N / 25) + floor(N / 125) + ...
```

Keep dividing by `5` until the result becomes `0`.

---

##  Example (N = 10)

```
10 / 5 = 2
2 / 5 = 0

Total Trailing Zeros = 2
```

---

##  Optimized Code

```js
let n=10
  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }


console.log(count); // 2
```
---

## Time Complexity

```
O(log₅ N)
```
##  Space Complexity

```
O(1)
```
---

##  Key Notes

* You **do NOT need to calculate the factorial**.
* Only count how many times `5` appears as a factor.
* This is the **fastest and interview-preferred approach**.

---

## Same answer with brute force 
```js
let number=10
let zeroCount = 0;
let fact = 1;
for (let i = 1; i <= number; i++) {
  fact = fact * i;
}
let temp=fact

let previousDigit = 0;
while (temp > 0) {
  let digit = temp % 10;
  if ( digit === 0) {
    zeroCount++;
  } else break;
  temp = Math.floor(temp / 10);
}
console.log(fact)
console.log(zeroCount)
```
The problem with this solution is, if the number is big like 50, 100 and etc, it can surpass the integer range, so after that calculating of 0s will not be possible. That's why divide by 5 logic is optimal.


## 5️⃣ Check if a Number is Power of 2

###  Problem Statement:

Check whether a given number `N` can be written in the form:

```
N = 2^k
```

for some integer `k ≥ 0`.

---

##  Examples

| Number | Result   |
| ------ | -------- |
| 1      | Yes (2⁰) |
| 2      | Yes (2¹) |
| 4      | Yes (2²) |
| 8      | Yes (2³) |
| 10     | No       |

---

##  Binary Insight

In binary representation:

> A **power of 2 has exactly one `1` bit**, and all other bits are `0`.

### Examples:

```
1  = 0001
2  = 0010
4  = 0100
8  = 1000
16 = 10000
```

---

## 🔥 Bitwise Trick

### Formula:

```
N & (N - 1)
```

### Rule:

| Result | Meaning        |
| ------ | -------------- |
| 0      | Power of 2     |
| ≠ 0    | Not Power of 2 |

This works because `N & (N - 1)` removes the **lowest set bit**. If only one `1` existed, the result becomes `0`.

---

## ✅ Optimized Code 

```js
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(10)); // false
```

---

##  Dry Run (N = 16)

```
16 = 10000
15 = 01111
AND = 00000 → Power of 2
```

---

##  Time Complexity

```
O(1)
```
##  Space Complexity

```
O(1)
```
---

##  Key Notes

* `n > 0` is required because `0` is **not** a power of 2.
* This is a **constant-time, interview-level optimized solution**.
* Works by checking if the number has **only one set bit in binary**.

---
## Same question with brute force
```js
let number = 16;
let temp = number;
let isPowerOfTwo = true;
if (temp <= 0) {
  isPowerOfTwo = false;
} else {
  while (temp > 1) {
    if (temp % 2 !== 0) {
      isPowerOfTwo = false;
      break;
    }
    temp = Math.floor(temp / 2);
  }
}
let result = isPowerOfTwo ? "yes" : "no";
console.log(result);
```
#  Summary Table

| Problem                     | Approach           | Time      | Level                |
| --------------------------- | ------------------ | --------- | -------------------- |
| Trailing Zeros in Factorial | Count factors of 5 | O(log₅ N) | Intermediate         |
| Power of 2 Check            | Bitwise Trick      | O(1)      | Advanced / Interview |

---

## 6️⃣ Find First Repeating Digit

### 🔹 Problem Statement

Given a number, find the **first repeating digit**.

 *First repeating digit* means **the digit whose second occurrence appears first when traversing from left to right**.

###  Approach (How it works)

1. Count total digits in the number.
2. Use an array of size `10` to track visited digits.
3. Traverse the number **from left to right** using powers of 10.
4. If a digit is already marked as seen, that digit is the answer.

###  Time & Space Complexity

* Time: `O(n)`
* Space: `O(1)` (array size fixed to 10)

###  Code

```js
let number = 12434532;

// count digits
let temp = number;
let digits = 0;
while (temp > 0) {
  digits++;
  temp = Math.floor(temp / 10);
}

let power = Math.pow(10, digits - 1);
let seen = new Array(10).fill(false);
let repeatingDigit = null;
let copy = number;

// left to right traversal
while (power > 0) {
  let digit = Math.floor(copy / power);

  if (seen[digit]) {
    repeatingDigit = digit;
    break;
  }

  seen[digit] = true;
  copy = copy % power;
  power = Math.floor(power / 10);
}

if (repeatingDigit !== null) {
  console.log("First repeating digit:", repeatingDigit);
} else {
  console.log("Repeating digit does not exist");
}
```

---

## 7️⃣ Find First Non-Repeating Digit

###  Problem Statement

Given a number, find the **first digit (from left)** that does **not repeat** anywhere in the number.

###  Approach (How it works)

1. Traverse the number from right to left and count frequency of each digit.
2. Count total digits.
3. Traverse again from **left to right** using powers of 10.
4. The first digit whose frequency is `1` is the answer.

###  Time & Space Complexity

* Time: `O(n)`
* Space: `O(1)`

###  Code

```js
let number = 24373542;

if (number <= 9) {
  console.log("First non-repeating digit:", number);
} else {
  let count = new Array(10).fill(0);
  let temp = number;
  let digits = 0;

  // frequency count
  while (temp > 0) {
    let digit = temp % 10;
    count[digit]++;
    temp = Math.floor(temp / 10);
    digits++;
  }

  let power = Math.pow(10, digits - 1);
  let copy = number;
  let nonRepeatingDigit = null;

  // left to right traversal
  while (power > 0) {
    let digit = Math.floor(copy / power);

    if (count[digit] === 1) {
      nonRepeatingDigit = digit;
      break;
    }

    copy = copy % power;
    power = Math.floor(power / 10);
  }

  if (nonRepeatingDigit !== null) {
    console.log("First non-repeating digit:", nonRepeatingDigit);
  } else {
    console.log("Non-repeating digit does not exist");
  }
}
```

---

## 8️⃣ Convert Binary to Decimal (Manual Method)

###  Problem Statement

Given a binary number (in numeric form), convert it to its decimal equivalent **without using built-in functions**.

###  Approach (How it works)

1. First validate whether the number is a valid binary (only `0` and `1`).
2. Traverse the binary number from right to left.
3. Multiply each bit with `2^power` and add to result.
4. Increment power after each step.

###  Time & Space Complexity

* Time: `O(n)`
* Space: `O(1)`

###  Code

```js
let binaryNumber = 1110;
let temp = binaryNumber;
let isValidBinary = true;

// validation
if (binaryNumber === 0) {
  console.log("Binary to decimal:", 0);
} else {
  while (temp > 0) {
    let bit = temp % 10;
    if (bit !== 0 && bit !== 1) {
      isValidBinary = false;
      break;
    }
    temp = Math.floor(temp / 10);
  }

  if (isValidBinary) {
    let decimal = 0;
    let power = 0;
    temp = binaryNumber;

    while (temp > 0) {
      let bit = temp % 10;
      decimal += bit * Math.pow(2, power);
      power++;
      temp = Math.floor(temp / 10);
    }

    console.log("Binary to decimal:", decimal);
  } else {
    console.log("This is not a binary number");
  }
}
```

---

##  Key Takeaways

* Prefer **mathematical digit extraction** in DSA instead of string conversion.
* Always clarify problem definition: *first repeating* vs *leftmost repeating*.
* Frequency array of size 10 is optimal for digit-based problems.
* Write clean code with correct edge-case handling.

---

## 9️⃣ Digital Root

###  What is Digital Root?

Digital root is the **single digit number** obtained by **repeatedly adding the digits** of a number until only **one digit** remains.

###  Example

```
98755 → 9+8+7+5+5 = 34
34 → 3+4 = 7
Digital Root = 7
```
---

###  Logic (How it works)

1. Keep summing digits of the number
2. Replace the number with the sum
3. Repeat until the number becomes a **single digit**

---

###  Code 

```js
let number = 98755;
let temp = number;
let digitalRoot = null;

while (temp >= 10) {
  let sum = 0;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  temp = sum;
}
digitalRoot = temp;
console.log("Digital Root is", digitalRoot);
```
---

###  Key Notes

* Loop condition should be `temp >= 10`
* Single digit means **digital root found**
* Time Complexity: **O(d)** where d = number of digits

---

## 🔟 Automorphic Number

###  What is an Automorphic Number?

A number is **automorphic** if its **square ends with the same digits** as the number itself.

---

###  Examples

```
5²  = 25   → ends with 5  ✅
25² = 625  → ends with 25 ✅
76² = 5776 → ends with 76 ✅
13² = 169  → ends with 13 ❌
```
---

###  Logic (How it works)

1. Find square of the number
2. Count number of digits in the original number
3. Extract last digits from square using modulo
4. Compare with original number
---

###  Code 

```js
let number = 25;
if (number === 0 || number === 1) {
  console.log("Automorphic");
} else if (number < 0) {
  console.log("Not automorphic");
} else {
  let square = number * number;
  let temp = number;
  let digits = 0;
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    digits++;
  }
  let lastDigit = square % Math.pow(10, digits);
  if (lastDigit === number) {
    console.log("Automorphic");
  } else {
    console.log("Not automorphic");
  }
}
```
---

###  Key Notes

* `% Math.pow(10, digits)` extracts last digits
* Time Complexity: **O(d)**

---