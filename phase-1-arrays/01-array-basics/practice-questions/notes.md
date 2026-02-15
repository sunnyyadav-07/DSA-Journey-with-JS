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

