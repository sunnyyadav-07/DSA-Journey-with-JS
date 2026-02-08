# 📘 String DSA Notes 

---

## 1️⃣ Reverse String (Without Built-in Methods)

###  Problem Statement

Reverse a given string **without using built-in methods** like `split`, `reverse`, or `join`.

###  Important Concept

* Strings in JavaScript are **immutable**
* You **cannot** change a character using index assignment
* To reverse a string, we must create a **new string**

### 🔹 Approach

* Take an empty string
* Traverse the original string from **right to left**
* Append each character to the new string

### 🔹 Code

```js
let string = "sunny";
let reverse = "";

for (let i = string.length - 1; i >= 0; i--) {
  reverse = reverse + string[i];
}

console.log(reverse); // ynnus
```

### 🔹 Time & Space Complexity

* Time: O(n)
* Space: O(n)

---

## 2️⃣ Check Palindrome String

###  Problem Statement

Check whether a given string is a **palindrome** (same forward and backward).

Example:

* `abcdcba` → Palindrome
* `hello` → Not Palindrome

### 🔹 Approach (Reverse Method)

* Reverse the string manually
* Compare original string with reversed string

###  Code

```js
let string = "abcdcba";
let reverse = "";

for (let i = string.length - 1; i >= 0; i--) {
  reverse = reverse + string[i];
}

if (string === reverse) {
  console.log("Palindrome string");
} else {
  console.log("Not palindrome string");
}
```

###  Time & Space Complexity

* Time: O(n)
* Space: O(n)

###  Optimizated code
```js

let i = 0;
let isPalindrome = true;
let j = string.length - 1;
while (i < j) {
  if (string[i] !== string[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}
if (isPalindrome) {
  console.log("Palindrome string");
} else {
  console.log("Not palindrome string");
}
```


---

## 3️⃣ Count Vowels & Consonants

###  Problem Statement

Count the number of **vowels** and **consonants** in a given string.

###  Vowels

`a, e, i, o, u`

###  Important Note

* Only alphabets should be counted
* Numbers & symbols should be ignored

###  Approach

* Traverse string character by character
* Convert each character to lowercase
* Check if it lies between `a` and `z`
* If vowel → vowel count
* Else → consonant count

###  Code

```js
let string = "elephant";
let vowels = 0;
let consonants = 0;

for (let i = 0; i < string.length; i++) {
  let ch = string[i].toLowerCase();

  if (ch >= 'a' && ch <= 'z') {
    if (
      ch === 'a' ||
      ch === 'e' ||
      ch === 'i' ||
      ch === 'o' ||
      ch === 'u'
    ) {
      vowels++;
    } else {
      consonants++;
    }
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
```

###  Time & Space Complexity

* Time: O(n)
* Space: O(1)

---

##  Summary

* Strings are **immutable** in JavaScript
* Manual traversal is important for DSA
* Avoid built-in methods when practicing logic
* Always consider **edge cases** (digits, symbols)

---


