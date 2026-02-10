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
# 📘 String DSA Notes (Day)

---

## 4️⃣ Find Longest Word in a Sentence

###  Problem Statement

Given a sentence, find the **longest word** present in it.

Example:

```
Input:  "My love is Javascript"
Output: "Javascript"
```

### 🔹 Core Concept

* Sentence is a string
* Word ends when we encounter a **space** or **end of string**
* We must traverse the string **manually** (no `split()`)

### 🔹 Approach

* Take two variables:

  * `currentWord` → builds the current word
  * `longestWord` → stores the longest word found so far
* Traverse the string character by character
* When space or end is found:

  * compare lengths
  * update longest word
  * reset current word

### 🔹 Code

```js
let sentence = "My love  is Javascript";
let currentWord = "";
let longestWord = "";
for (let i = 0; i <= sentence.length; i++) {
  if (
    (sentence[i] === " " && currentWord.length > 0) ||
    i === sentence.length
  ) {
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
    currentWord = "";
  } else {
    currentWord = currentWord + sentence[i];
  }
}
console.log(longestWord);
```

### 🔹 Complexity

* Time: O(n)
* Space: O(n)

---

## 2️5️⃣ Remove Duplicate Characters from String

###  Problem Statement

Given a string, remove **duplicate characters** and return a new string while **maintaining order**.

Example:

```
Input:  "programming"
Output: "progamin"
```

### 🔹 Core Concept

* Strings are **immutable** in JavaScript
* Use an extra data structure to track visited characters

### 🔹 Approach (Hashing)

* Use an object `seen` to track characters
* Traverse string left to right
* If character not seen before:

  * add it to result
  * mark it as seen

### 🔹 Code

```js
let string = "programming";
let seen = {};
let result = "";

for (let i = 0; i < string.length; i++) {
  if (!seen[string[i]]) {
    seen[string[i]] = true;
    result += string[i];
  }
}

console.log(result);
```

### 🔹 Complexity

* Time: O(n)
* Space: O(n)

### Optimized solution
Here, I am using an ASCII frequency array of fixed size 256 to track first occurrences in O(1) time and O(1) space.
```js
let seen = new Array(256).fill(false);
let result = "";

for (let i = 0; i < str.length; i++) {
  let code = str.charCodeAt(i);

  if (!seen[code]) {
    seen[code] = true;
    result += str[i];
  }
}
```
---

## 6️⃣ Toggle Case of String

###  Problem Statement

Toggle the case of each alphabet character in a string.

* Lowercase → Uppercase
* Uppercase → Lowercase
* Numbers & symbols remain unchanged

Example:

```
Input:  "SuNnY123aB"
Output: "sUnNy123Ab"
```

### 🔹 Core Concept

* Alphabets have fixed ASCII ranges
* Case conversion can be done using ASCII arithmetic

### 🔹 Approach (ASCII based – Interview Preferred)

* Traverse string character by character
* Check ASCII value:

  * `a–z (97–122)` → convert to uppercase
  * `A–Z (65–90)` → convert to lowercase
* Append converted character to result

### 🔹 Code

```js
let string = "SuNnY123aB";
let result = "";

for (let i = 0; i < string.length; i++) {
  let code = string.charCodeAt(i);

  if (code >= 97 && code <= 122) {
    result += String.fromCharCode(code - 32);
  } else if (code >= 65 && code <= 90) {
    result += String.fromCharCode(code + 32);
  } else {
    result += string[i];
  }
}

console.log(result);
```

### 🔹 Complexity

* Time: O(n)
* Space: O(n)

## ✅ Summary

* Strings are immutable in JavaScript
* Manual traversal builds strong DSA thinking
* ASCII-based logic is preferred in interviews
* Always handle edge cases (spaces, digits, symbols)

---

## 7️⃣ Check if Two Strings Are Anagrams

###  Meaning

Two strings are **anagrams** if:

* They contain the **same characters**
* With the **same frequency**
* Order does **not** matter

Example:

```
listen  → silent  ✅
aab     → abb     ❌
```

###  Approach (ASCII / Frequency Array)

* If lengths differ → not anagram
* Create an array of size **128 / 256**
* Increase count using first string
* Decrease count using second string
* If any count becomes zero before decrement → not anagram

###  Key Logic

* Array index = ASCII code of character
* Array value = frequency

###  Complexity

* **Time:** O(n)
* **Space:** O(1) (fixed size array)

---

## 8️⃣ Check if String Contains Only Digits

###  Meaning

Check whether a string contains **only numeric characters (0–9)**.

Examples:

```
"12345"    ✅
"12a45"    ❌
"123@"     ❌
```

###  Approach

* Traverse string character by character
* Each character must satisfy:

```
'0' <= ch <= '9'
```

###  ASCII Logic

* Digits ASCII range: **48–57**
* If any character lies outside this range → invalid

###  Complexity

* **Time:** O(n)
* **Space:** O(1)

---

## 9️⃣ Compress String (Run Length Encoding)

###  Meaning

Replace **consecutive repeating characters** with:

```
character + count
```

Example:

```
aaabb → a3b2
abab  → a1b1a1b1
```

### ⚠️ Important

Compression ≠ Frequency count
Order and consecutiveness **matter**.

###  Approach

* Traverse string once
* Count consecutive same characters
* When character changes → append result

###  Core Logic

Compare current character with next one:

* Same → increment count
* Different → append and reset count

###  Complexity

* **Time:** O(n)
* **Space:** O(1)

---

## 🔟 Count Frequency of Each Character

###  Meaning

Count how many times each character appears in a string.

Example:

```
elephant → e:2, l:1, p:1, h:1, a:1, n:1, t:1
```

###  Approach (Object Based)

* Use an object as a frequency map
* Increment count for each character

###  Common Pattern

```js
freq[ch] = (freq[ch] || 0) + 1
```

###  ASCII Variant

* Use array of size **128 / 256**
* Index = ASCII code

###  Complexity

* **Time:** O(n)
* **Space:** O(k) (unique characters)

---

##  Interview Takeaways

* Anagram → frequency matters
* Only digits → ASCII range check
* Compression → consecutive logic
* Frequency → base of many string problems

✅ These patterns help in:

* First non‑repeating character
* Max occurring character
* Remove duplicate characters
* String validation problems



