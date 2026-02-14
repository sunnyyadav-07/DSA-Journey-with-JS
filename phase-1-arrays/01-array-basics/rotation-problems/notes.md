# 📘 Array Rotation & Subarray Problems – Notes (JavaScript)

These notes cover  important array problems:

1. Left rotation by 1
2. Right rotation by 1
3. Left rotation by k
4. Right rotation by k
5. Count subarrays with given sum

Each problem includes:

* Concept
* Logic Explanation
* Code
* Time & Space Complexity

---

# 1️⃣ Array Left Rotation by 1

##  Concept

Move the first element of the array to the end.

Example:
[1, 2, 3, 4, 5] → [2, 3, 4, 5, 1]

##  Logic

1. Store the first element in a temporary variable.
2. Shift all elements one position to the left.
3. Put the stored element at the last index.

##  Code

```js
let arr = [1, 2, 3, 4, 5];

let temp = arr[0];
for (let i = 1; i < arr.length; i++) {
  arr[i - 1] = arr[i];
}
arr[arr.length - 1] = temp;

console.log(arr);
```

##  Complexity

* Time: O(n)
* Space: O(1)

---

# 2️⃣ Array Right Rotation by 1

##  Concept

Move the last element of the array to the beginning.

Example:
[1, 2, 3, 4, 5] → [5, 1, 2, 3, 4]

##  Logic

1. Store the last element in a temporary variable.
2. Shift all elements one position to the right.
3. Place the stored element at index 0.

##  Code

```js
let arr = [1, 2, 3, 4, 5];

let temp = arr[arr.length - 1];

for (let i = arr.length - 2; i >= 0; i--) {
  arr[i + 1] = arr[i];
}

arr[0] = temp;

console.log(arr);
```

##  Complexity

* Time: O(n)
* Space: O(1)

---

# 3️⃣ Array Left Rotation by k

##  Concept

Rotate the array to the left by k positions.

Example:
[1, 2, 3, 4, 5], k = 2 → [3, 4, 5, 1, 2]

##  Logic

1. Normalize k using: `k = k % arr.length`.
2. Perform left rotation by 1 exactly k times.
3. Each rotation shifts elements and moves first element to the end.

##  Code

```js
let arr = [1, 2, 3, 4, 5];

let k = 2;
k = k % arr.length;

for (let j = 1; j <= k; j++) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
}

console.log(arr);
```

##  Complexity

* Time: O(n × k)
* Space: O(1)

⚠️ This is not optimal for large k. (Can be optimized using reversal algorithm in O(n))

---

# 4️⃣ Array Right Rotation by k

##  Concept

Rotate the array to the right by k positions.

Example:
[1, 2, 3, 4, 5], k = 2 → [4, 5, 1, 2, 3]

##  Logic

1. Normalize k using: `k = k % arr.length`.
2. Perform right rotation by 1 exactly k times.
3. Each rotation shifts elements and moves last element to the front.

##  Code

```js
let arr = [1, 2, 3, 4, 5];

let k = 2;
k = k % arr.length;

for (let j = 1; j <= k; j++) {
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = temp;
}

console.log(arr);
```

##  Complexity

* Time: O(n × k)
* Space: O(1)

---

# 5️⃣ Count Subarrays with Sum Equal to Target

##  Concept

Find how many contiguous subarrays have a sum equal to the given target.

Example:
arr = [1, 2, 3, 7, 5]
Target = 12

Valid subarrays:

* [2, 3, 7]
* [7, 5]

Output: 2

##  Logic (Brute Force Approach)

1. Fix starting index `i`.
2. Initialize `sum = 0`.
3. Expand subarray using inner loop from `i`.
4. Add elements to `sum`.
5. If `sum === target`, increment count and break.
6. Repeat for all starting positions.

##  Code

```js
let arr = [1, 2, 3, 7, 5];
let target = 12;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];
    if (sum === target) {
      count++;
      break;
    }
  }
}

console.log(count, "subarrays have sum 12");
```

##  Complexity

* Time: O(n²)
* Space: O(1)

⚠️ This is brute force. It can be optimized using:

* Prefix Sum
* HashMap (for O(n) solution)

---
