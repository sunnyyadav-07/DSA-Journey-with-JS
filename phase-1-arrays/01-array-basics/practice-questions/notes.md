# 📘 DSA Notes –  Array Problems

---

# 1️⃣ Sum of Absolute Differences (All Pairs)

##  Problem Statement

You are given a sequence of integers. Your task is to compute the **sum of absolute differences** between every pair of elements in the sequence where the first element appears before the second.

Formally:
For an array `arr` of length `n`, compute:

Σ |arr[i] - arr[j]|  such that  0 ≤ i < j < n

###  Important Points

* Only consider pairs where `i < j`
* Absolute difference is always non-negative
* Array order must NOT be changed
* Return a single integer (the total sum)

---

##  Brute Force Approach

### Logic

Use two loops:

```
for i from 0 to n-1:
    for j from i+1 to n-1:
        sum += |arr[i] - arr[j]|
```

###  JavaScript Code

```js
let arr = [1, 3, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    sum += Math.abs(arr[i] - arr[j]);
  }
}

console.log(sum);
```

###  Time Complexity

O(n²)

---

# 2️⃣ Minimum Value to Make Array Balanced

##  Problem Statement

You are given an array of even size. An array is said to be balanced if:

sum(left half) == sum(right half)

You may add a value to exactly ONE element (either in left half or right half). Only one addition operation is allowed.

Return the minimum value required to make the array balanced.

---

##  Approach

1. Calculate sum of left half
2. Calculate sum of right half
3. Return absolute difference of both sums

```
minimum value = |leftSum - rightSum|
```

---

###  JavaScript Code

```js
let arr = [1, 2, 1, 1, 2, 3];

let leftSum = 0;
let rightSum = 0;

for (let i = 0; i < arr.length / 2; i++) {
  leftSum += arr[i];
}

for (let i = arr.length / 2; i < arr.length; i++) {
  rightSum += arr[i];
}

let result = Math.abs(leftSum - rightSum);

console.log(result);
```

###  Time Complexity

O(n)

---

# 3️⃣ Replace Every Element with Product of Neighbours

##  Problem Statement

Given an array of integers, update every element with the multiplication of the previous and next elements with the following exceptions:

* The first element is replaced by multiplication of first and second elements.
* The last element is replaced by multiplication of last and second last elements.

---

##  Approach

For each index `i`:

* If `i == 0` → arr[0] * arr[1]
* If `i == n-1` → arr[n-2] * arr[n-1]
* Else → arr[i-1] * arr[i+1]

---

###  JavaScript Code

```js
let arr = [2, 3, 4];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (i === 0) {
    newArr[i] = arr[0] * arr[1];
  } else if (i === arr.length - 1) {
    newArr[i] = arr[arr.length - 2] * arr[arr.length - 1];
  } else {
    newArr[i] = arr[i - 1] * arr[i + 1];
  }
}

console.log(newArr);
```

###  Time Complexity

O(n)

---

#  Final Summary

| Problem                     | Concept Used      | Time Complexity |
| --------------------------- | ----------------- | --------------- |
| Sum of Absolute Differences | Nested Loop       | O(n²)           |
| Balanced Array              | Array Traversal   | O(n)            |
| Product of Neighbours       | Conditional Logic | O(n)            |

---

 These three problems cover:

* Nested loops
* Absolute difference logic
* Prefix-style thinking
* Half array processing
* Edge case handling


## 4️⃣ Remove Duplicates from Sorted Array

###  Problem Statement

Given a **sorted array**, remove the duplicates **in-place** such that each element appears only once and return the number of unique elements.

You must:

* Not use extra array
* Modify the same array
* Use O(1) extra space

---

###  Key Idea

Since the array is **sorted**, duplicate elements are always adjacent.

We use the **Two Pointer Technique**:

* `j` → Tracks last unique element position
* `i` → Traverses the array

---

###  Algorithm

1. Start `j = 0`
2. Traverse array using `i` from index 1
3. If `arr[i] !== arr[j]`

   * Increment `j`
   * Copy `arr[i]` to `arr[j]`
4. After loop, set `arr.length = j + 1`

---

###  Code

```js
let arr = [1, 1, 1, 2, 2, 3];

let j = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[j]) {
    j++;
    arr[j] = arr[i];
  }
}

arr.length = j + 1;
console.log(arr);
```

---

###  Complexity

* Time Complexity → **O(n)**
* Space Complexity → **O(1)**

---

# 5️⃣ Remove Duplicates Allowing At Most 2 Occurrences

###  Problem Statement

Given a sorted array, allow each element to appear **at most twice**.
Remove extra duplicates in-place.

Example:

Input:

```
[1,1,1,2,2,3]
```

Output:

```
[1,1,2,2,3]
```

---

###  Key Observation

If we allow at most **k duplicates**, we:

* Start pointer `j = k`
* Compare current element with `arr[j - k]`

If equal → skip (extra duplicate)
If different → copy

---

###  Algorithm (k = 2)

1. If array length <= 2 → return array
2. Start `j = 2`
3. Traverse from `i = 2`
4. If `arr[i] !== arr[j - 2]`

   * Copy `arr[i]` to `arr[j]`
   * Increment `j`
5. Set `arr.length = j`

---

###  Code

```js
let arr = [1, 1, 1, 2, 2, 3, 3];

let j = 2;
for (let i = 2; i < arr.length; i++) {
  if (arr[i] !== arr[j - 2]) {
    arr[j] = arr[i];
    j++;
  }
}

arr.length = j;
console.log(arr);
```

---

###  Complexity

* Time Complexity → **O(n)**
* Space Complexity → **O(1)**

---

#  General Formula (Very Important)

If allowing at most **k duplicates**:

```
Start j = k
If arr[i] !== arr[j - k]
```

This is a powerful pattern for sorted array problems.

---
