# 📘 Function Based DSA Notes




## 1️⃣ Prime Check Function (Optimized)

###  Concept

A **Prime Number** is a number greater than 1 that has only two divisors: **1 and itself**.

###  Optimization Idea

You only need to check divisibility up to **√n**, because if a number has a factor greater than √n, it must also have one smaller than √n.

###  Code

```js
function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2 || number === 3) return true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(15)); // false
console.log(isPrime(13)); // true
```

### ⏱ Complexity

* Time: **O(√n)**
* Space: **O(1)**

---

## 2️⃣ Count Digits in a Number

###  Concept

We divide the number by **10 repeatedly** to remove the last digit and count how many times we do this.

###  Code

```js
function countDigits(number) {
  number = Math.abs(number);

  if (number === 0) return 1;

  let digits = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    digits++;
  }
  return digits;
}

console.log(countDigits(10));   // 2
console.log(countDigits(0));    // 1
console.log(countDigits(-123)); // 3
```

### ⏱ Complexity

* Time: **O(n)** (n = number of digits)
* Space: **O(1)**

---

## 3️⃣ Reverse a Number

###  Concept

We extract the **last digit using `% 10`**, add it to the reversed number, and shrink the original number using `/ 10`.

###  Code

```js
function reverseTheNumber(number) {
  let sign = Math.sign(number);
  number = Math.abs(number);

  let reverse = 0;
  while (number > 0) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
  }

  return reverse * sign;
}

console.log(reverseTheNumber(1234)); // 4321
console.log(reverseTheNumber(-567)); // -765
```

### ⏱ Complexity

* Time: **O(n)**
* Space: **O(1)**

---

## 4️⃣ Power Function (a^b without Math.pow)

###  Concept

Multiply `a` by itself `b` times. If `b` is negative, compute power for positive `b` and return its reciprocal.

###  Code

```js
function power(a, b) {
  if (a === 0 && b === 0) return "not possible";
  if (b === 0) return 1;

  let isNegative = b < 0;
  b = Math.abs(b);

  let answer = 1;
  for (let i = 1; i <= b; i++) {
    answer *= a;
  }

  return isNegative ? 1 / answer : answer;
}

console.log(power(2, 3));   // 8
console.log(power(2, -3)); // 0.125
console.log(power(0, 0));  // not possible
```

### ⏱ Complexity

* Time: **O(b)**
* Space: **O(1)**

---

## 5️⃣ Armstrong Number Check

###  Concept

A number is **Armstrong** if:

> Sum of each digit raised to the power of total digits = Original number

### Example

153 → 1³ + 5³ + 3³ = 153 ✅

###  Code (Negative Not Allowed)

```js
function isArmstrong(number) {
  if (number < 0) return false;
  if (number === 0) return true;
  let temp = number;
  let copyNum = number;
  let digits = 0;

  while (copyNum > 0) {
    copyNum = Math.floor(copyNum / 10);
    digits++;
  }

  let sum = 0;
  

  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }

  return sum === number;
}

console.log(isArmstrong(153)); // true
console.log(isArmstrong(370)); // true
console.log(isArmstrong(123)); // false
```

### ⏱ Complexity

* Time: **O(n)**
* Space: **O(1)**

---

## 6️⃣ Factorial Function

###  Concept

Factorial of `n`:

```
n! = n × (n-1) × (n-2) ... × 1
0! = 1
```

###  Code

```js
function factorial(number) {
  if (!Number.isInteger(number)) return "only integers allowed";
  if (number < 0) return "not possible";

  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(-3)); // not possible
```

### ⏱ Complexity

* Time: **O(n)**
* Space: **O(1)**

---

##  Summary Table

| Function       | Concept Used        | Time Complexity |
| -------------- | ------------------- | --------------- |
| Prime Check    | √n Optimization     | O(√n)           |
| Count Digits   | Divide by 10 Loop   | O(n)            |
| Reverse Number | Modulo + Math       | O(n)            |
| Power (a^b)    | Loop Multiplication | O(b)            |
| Armstrong      | Digits + Power Sum  | O(n)            |
| Factorial      | Multiplication Loop | O(n)            |

---

##  Learning Outcome

* Loops mastery (`while`, `for`)
* Edge case handling (`0`, negative numbers)
* Math logic (`%`, `/`, powers, factorials)
* Time complexity awareness

---

## 7️⃣ Palindrome Check Function

###  Concept

A number is a **palindrome** if it reads the same **forward and backward**.

###  Idea

* Reverse the number using `% 10` and `/ 10`
* Compare reversed number with original

### ✅ Code

```js
function isPalindrome(number) {
  if (!Number.isInteger(number)) return "only integer allowed";
  if (number < 0) return "not possible";

  let temp = number;
  let reverse = 0;

  while (temp > 0) {
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
  }

  return number === reverse;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
console.log(isPalindrome(0));   // true
```

### ⏱ Complexity

* Time: **O(n)** (n = number of digits)
* Space: **O(1)**

---

## 8️⃣ Largest Digit in a Number

###  Concept

Extract each digit and keep track of the **maximum digit** seen so far.

###  Idea

* Use `Math.abs()` to ignore negative sign
* Use `% 10` to get last digit
* Use `/ 10` to shrink number

###  Code

```js
function findLargestDigit(number) {
  if (!Number.isInteger(number)) return "only integer allowed";

  number = Math.abs(number);

  if (number === 0) return 0;

  let temp = number;
  let largest = 0;

  while (temp > 0) {
    let digit = temp % 10;
    if (digit > largest) largest = digit;
    temp = Math.floor(temp / 10);
  }

  return largest;
}

console.log(findLargestDigit(14576)); // 7
console.log(findLargestDigit(-908));  // 9
console.log(findLargestDigit(0));     // 0
```

### ⏱ Complexity

* Time: **O(n)**
* Space: **O(1)**

---

## 9️⃣ Nth Fibonacci Function

###  Concept

Fibonacci sequence:

```
F(1) = 0
F(2) = 1
F(n) = F(n-1) + F(n-2)
```

###  Idea

* Use two variables to store last two Fibonacci numbers
* Iteratively compute next number

###  Code

```js
function fibonacci(number) {
  if (!Number.isInteger(number)) return "only integer allowed";
  if (number <= 0) return "not possible";

  if (number === 1) return 0;
  if (number === 2) return 1;

  let f1 = 0;
  let f2 = 1;

  for (let i = 3; i <= number; i++) {
    let nthFibonacci = f1 + f2;
    f1 = f2;
    f2 = nthFibonacci;
  }

  return f2;
}

console.log(fibonacci(1)); // 0
console.log(fibonacci(2)); // 1
console.log(fibonacci(5)); // 3
```

### ⏱ Complexity

* Time: **O(n)**
* Space: **O(1)**

---

## 🔟 GCD (Greatest Common Divisor)

###  Concept

**GCD** is the **largest number** that divides two numbers completely (no remainder).

###  Euclidean Algorithm

> Repeatedly replace:
> `a = b` and `b = a % b`
> until `b` becomes `0`. The last non-zero `a` is the GCD.

###  Code (Optimized)

```js
function gcd(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "only integers allowed";

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

console.log(gcd(12, 18));  // 6
console.log(gcd(8, 32));   // 8
console.log(gcd(-12, 18)); // 6
```

### ⏱ Complexity

* Time: **O(log n)**
* Space: **O(1)**

---

##  Summary Table

| Function      | Key Concept         | Time Complexity |
| ------------- | ------------------- | --------------- |
| Palindrome    | Reverse & Compare   | O(n)            |
| Largest Digit | Max Digit Scan      | O(n)            |
| Fibonacci     | Iterative DP        | O(n)            |
| GCD           | Euclidean Algorithm | O(log n)        |

---

##  Learning Outcome

* Digit extraction using `%` and `/`
* Edge case handling (0, negative numbers, invalid input)
* Space and time complexity awareness




