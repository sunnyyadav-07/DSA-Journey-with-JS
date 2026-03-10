# Set Data Structure 

## 1. What is a Set?

A **Set** is a built‑in JavaScript data structure used to store **unique values**. It automatically removes duplicates and stores only one instance of each value.

Example:

```js
let set = new Set([1,2,2,3,3,4]);
console.log(set); // {1,2,3,4}
```

### Key Properties

• Stores **only unique elements**
• Maintains **insertion order**
• Provides **fast lookup operations**

### Why Set is Used in DSA

Set is commonly used when:

1. We need to **remove duplicates**
2. We need to **check existence quickly**
3. We need to **detect cycles or repeated states**
4. We want **unique characters or numbers**

Most operations in Set work in approximately:

**Time Complexity: O(1)**

because internally it uses **hashing**.

### Important Methods

| Method        | Purpose                      |
| ------------- | ---------------------------- |
| add(value)    | Inserts a value into the set |
| has(value)    | Checks if value exists       |
| delete(value) | Removes a value              |
| size          | Returns number of elements   |

Example:

```js
let set = new Set();
set.add(5);
set.add(10);

console.log(set.has(5)); // true

set.delete(5);

console.log(set);
```

---

# Question 1: Remove Duplicates From Array

## Problem

Given an array, remove all duplicate elements and keep only unique values.

Example

```
Input:  [1,2,3,1,5,2,3,8]
Output: [1,2,3,5,8]
```

## Approach

1. Convert the array into a **Set**.
2. Since Set only stores **unique values**, duplicates are automatically removed.

## Code

```js
let arr = [1, 2, 3, 1, 5, 2, 3, 8];

let set = new Set(arr);

console.log(set);
```

## Time Complexity

O(n)

We iterate through all elements once while creating the Set.

## Space Complexity

O(n)

Extra space is required to store unique elements.

---

# Question 2: Display Elements That Appear Only Once

## Problem

Find elements that appear **exactly once** in the array.

Example

```
Input:  [1,2,3,1,5,2,3,2,2,8,8]
Output: [5]
```

## Approach

We use a **Set to track duplicates**.

Logic:

• If element is seen first time → add to set
• If element appears again → remove it from set

At the end, only elements that appeared **once** remain in the set.

## Code

```js
let arr = [1, 2, 3, 1, 5, 2, 3, 2, 2, 8, 8];

let set = new Set();

for (let i = 0; i < arr.length; i++) {

  if (set.has(arr[i])) {
    set.delete(arr[i]);
  } else {
    set.add(arr[i]);
  }

}

console.log(set);
```

## Time Complexity

O(n)

## Space Complexity

O(n)

---

# Question 3: Check if Sentence is Pangram

## Problem

A **pangram** is a sentence that contains **every letter of the English alphabet at least once**.

Example:

```
thequickbrownfoxjumpsoverthelazydog
```

contains all 26 letters.

## Approach

1. Store all characters of the sentence inside a **Set**.
2. Iterate through the **alphabet string**.
3. Check if each letter exists in the set.
4. If any letter is missing → not a pangram.

## Code

```js
let sentence = "thequickbrownfoxjumpsoverthelazydog";

let set = new Set(sentence);

let isPangram = true;

let alphabets = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < alphabets.length; i++) {

  if (!set.has(alphabets[i])) {

    isPangram = false;
    break;

  }

}

console.log(isPangram);
```

## Time Complexity

O(n)

## Space Complexity

O(1)

Alphabet size is constant (26).

---

# Question 4: Jewels and Stones

## Problem

You are given two strings:

```
jewels = "aA"
stones = "aAAbbbb"
```

Each character in **stones** represents a stone you own.

Characters in **jewels** represent valuable stones.

Return the **number of stones that are jewels**.

## Approach

1. Store all jewels inside a **Set**.
2. Iterate through stones.
3. Check if the stone exists in the set.
4. If yes → increment counter.

## Code

```js
let jewels = "aA";

let stones = "aAAbbbb";

let set = new Set(jewels);

let count = 0;

for (let i = 0; i < stones.length; i++) {

  if (set.has(stones[i])) {

    count++;

  }

}

console.log(count);
```

## Time Complexity

O(n)

## Space Complexity

O(m)

Where **m = jewels length**.

---

# Question 5: First Letter That Appears Twice

## Problem

Return the **first character that appears twice** in a string.

Example

```
Input:  "abccbaacz"
Output: "c"
```

## Approach

1. Create an empty **Set**.
2. Traverse the string.
3. If character already exists in set → return it.
4. Otherwise add it to set.

## Code

```js
let string = "abccbaacz";

var repeatedCharacter = function (s) {

  let set = new Set();

  for (let i = 0; i < s.length; i++) {

    if (set.has(s[i])) {

      return s[i];

    }

    set.add(s[i]);

  }

};

console.log(repeatedCharacter(string));
```

## Time Complexity

O(n)

## Space Complexity

O(n)

---

# Question 6: Happy Number

## Problem

A number is called **Happy Number** if:

1. Replace number with **sum of squares of digits**
2. Repeat the process
3. If the process ends at **1 → Happy Number**
4. If numbers start repeating → Not Happy

Example

```
19

1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1

→ Happy Number
```

## Approach

1. Use **Set to detect cycles**.
2. Keep calculating square sum.
3. If sum becomes **1 → return true**.
4. If sum already exists in set → cycle detected → return false.

## Code

```js
let n = 19;

function isHappyNumber(n) {

  let set = new Set();

  while (true) {

    let sum = 0;

    while (n > 0) {

      let digit = n % 10;

      sum += digit * digit;

      n = Math.floor(n / 10);

    }

    if (sum == 1) return true;

    if (set.has(sum)) return false;

    set.add(sum);

    n = sum;

  }

}

console.log(isHappyNumber(n));
```

## Time Complexity

O(log n)

Digits reduce each iteration.

## Space Complexity

O(log n)

Used for storing intermediate sums.

---

# Common Interview Patterns Using Set

1. **Duplicate detection**
2. **Cycle detection**
3. **Unique character problems**
4. **Membership lookup problems**
5. **Hash based optimizations**

Whenever a problem asks:

• "find duplicates"
• "unique elements"
• "check existence"

A **Set is often the best data structure to use.**

---


