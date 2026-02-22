#  ARRAY PATTERN 1 —  REVISION NOTES

> Goal: When you open this file, concepts should instantly "click" in your brain.

---

# 1️⃣ Find Largest Element

##  Core Idea

Traverse the array and keep updating the maximum.

## ✅ Pattern

* Initialize `largest = arr[0]`
* Compare each element
* Update if bigger found

##  Complexity

* Time: O(n)
* Space: O(1)

##  Code

```js
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
```

##  Interview Trigger

If question says:

* "maximum element"
* "highest value"
  → Use linear traversal

---

# 2️⃣ Find Second Largest Element

##  Core Idea

Track two variables while traversing.

## ✅ Pattern

* Use `largest = -Infinity`
* Use `secondLargest = -Infinity`
* Update carefully

## Complexity

* Time: O(n)
* Space: O(1)

## Code

```js
let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num;
  }
}
```

## ⚠ Important

Never initialize with 0 (fails for negative arrays).

---

# 3️⃣ Check if Array is Sorted

##  Core Idea

Compare current element with next element.

## ✅ Pattern

If `arr[i] > arr[i+1]` → Not sorted

##  Complexity

* Time: O(n)
* Space: O(1)

##  Code

```js
let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}
```

##  Interview Trigger

If question says:

* "increasing order"
* "non-decreasing"
  → Use adjacent comparison

---

# 4️⃣ Find Minimum Element

##  Core Idea

Same as largest, but reverse comparison.

##  Complexity

* Time: O(n)
* Space: O(1)

##  Code

```js
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
```

---

# 5️⃣ Count Frequency of Elements

##  Core Idea

Use HashMap / Object to count occurrences.

##  Complexity

* Time: O(n)
* Space: O(n)

##  Code

```js
let freq = {};

for (let num of arr) {
  freq[num] = (freq[num] || 0) + 1;
}
```

##  Interview Trigger

If question says:

* "count occurrences"
* "frequency"
* "duplicates"
  → Think HashMap

---

# 6️⃣ Find Missing Number (0 to n)

##  Core Idea (Best Approach: XOR)

### Why XOR?

* a ^ a = 0 (cancels duplicates)
* a ^ 0 = a
* No overflow issue

## ✅ Pattern

1. XOR all numbers from 0 to n
2. XOR all elements of array
3. Final XOR gives missing number

##  Complexity

* Time: O(n)
* Space: O(1)

##  Code

```js
let xor1 = 0;
let xor2 = 0;

for (let i = 0; i <= arr.length; i++) {
  xor1 ^= i;
}

for (let num of arr) {
  xor2 ^= num;
}

let missingNumber = xor1 ^ xor2;
```

##  Interview Trigger

If question says:

* "numbers from 0 to n"
* "one number missing"
  → Think XOR or Sum Formula

---

#  MASTER PATTERN SUMMARY

| Problem Type   | Pattern Used          |
| -------------- | --------------------- |
| Largest / Min  | Linear traversal      |
| Second Largest | Two variable tracking |
| Sorted Check   | Adjacent comparison   |
| Frequency      | HashMap               |
| Missing Number | XOR / Math Formula    |

---

#  What You Learned Today

✅ Basic Array Traversal Pattern
✅ Variable Tracking Pattern
✅ Hashing Pattern
✅ XOR Cancellation Pattern

---

#  Final Mental Shortcut

When you see array questions:

1. Can I solve with one loop? → Try O(n)
2. Can I use two variables? → Tracking pattern
3. Is counting needed? → HashMap
4. Is there "missing" or "single element"? → XOR

---

