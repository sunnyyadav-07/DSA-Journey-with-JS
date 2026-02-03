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