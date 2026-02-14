# 📘 Array Basic Problems – Notes (JavaScript)

These notes explain  fundamental array problems step‑by‑step. Each problem includes:

* Concept
* Logic Explanation
* Code
* Time & Space Complexity

---

# 1️⃣ Sum of Array Elements

##  Concept

Calculate the total sum of all elements in an array.

##  Logic

1. Initialize a variable `sum = 0`.
2. Traverse the array using a loop.
3. Add each element to `sum` during every iteration.
4. After the loop ends, `sum` contains the final result.

##  Code

```js
let arr = [10, 20, 30, 5, 48, 15];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
```

##  Complexity

* Time: O(n)
* Space: O(1)

---

# 2️⃣ Maximum Element in Array

##  Concept

Find the largest element in an array.

##  Logic

1. Assume the first element is the maximum.
2. Start looping from the second element.
3. If the current element is greater than `max`, update `max`.
4. After the loop ends, `max` is the answer.

##  Code

```js
let arr = [10, 20, 50, 98, 56];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
```

##  Complexity

* Time: O(n)
* Space: O(1)

---

# 3️⃣ Minimum Element in Array

##  Concept

Find the smallest element in an array.

##  Logic

1. Assume the first element is the minimum.
2. Traverse the entire array.
3. If the current element is smaller than `min`, update `min`.
4. After traversal, `min` holds the answer.

##  Code

```js
let arr = [10, 50, 8, 56, 2];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(min);
```

##  Complexity

* Time: O(n)
* Space: O(1)

---

# 4️⃣ Move Negative Elements to Left & Positive to Right

##  Concept

Rearrange the array so that:

* All negative numbers appear on the left
* All positive numbers appear on the right

⚠️ Preserving order is not required.

##  Logic (Two Pointer Approach)

1. Pointer `i` traverses the entire array.
2. Pointer `j` keeps track of the position where the next negative element should be placed.
3. If `arr[i] < 0`:

   * Swap `arr[i]` with `arr[j]`
   * Increment `j`
4. Continue until the array ends.

##  Code

```js
let arr = [-1, 5, 6, -5, 4, -2, -9, 7];
let i = 0;
let j = 0;

while (i < arr.length) {
  if (arr[i] < 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}

console.log(arr);
```

##  Complexity

* Time: O(n)
* Space: O(1)

👉 This works similarly to the partition step in Quick Sort.

---

# 5️⃣ Reverse an Array

##  Concept

Reverse the elements of an array.

Example:
[10, 20, 30] → [30, 20, 10]

---

## ✅ Method 1: Using Extra Space

###  Logic

1. Create a new array.
2. Traverse the original array from the end.
3. Store elements in the new array.

###  Code

```js
let arr = [10, 20, 30, 56, 90];
let temp = [];
let i = arr.length - 1;

for (let j = 0; j < arr.length; j++) {
  temp[j] = arr[i];
  i--;
}

console.log(temp);
```

###  Complexity

* Time: O(n)
* Space: O(n)

---

## ✅ Method 2: Without Extra Space (Two Pointer)

###  Logic

1. One pointer at the start (`i = 0`)
2. One pointer at the end (`j = arr.length - 1`)
3. Swap elements while `i < j`
4. After each swap:

   * Increment `i`
   * Decrement `j`

### 💻 Code

```js
let arr = [10, 20, 30, 56, 90];
let i = 0;
let j = arr.length - 1;

while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}

console.log(arr);
```

###  Complexity

* Time: O(n)
* Space: O(1)

👉 This is the optimal approach.

---

---

# 6️⃣ Second Maximum Element in Array

##  Concept

Find the second largest distinct element in the array.

⚠️ Important: It should handle negative numbers correctly.

##  Logic

1. Compare the first two elements and initialize:

   * `max`
   * `secMax`
2. Traverse the array from index 2.
3. If current element is greater than `max`:

   * Update `secMax = max`
   * Update `max`
4. Else if element is not equal to `max` and greater than `secMax`:

   * Update `secMax`

##  Code

```js
let arr = [-5, -10, -20, -8, -6];

let max = 0;
let secMax = 0;

if (arr[0] > arr[1]) {
  max = arr[0];
  secMax = arr[1];
} else {
  max = arr[1];
  secMax = arr[0];
}

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    secMax = max;
    max = arr[i];
  } else if (max !== arr[i] && arr[i] > secMax) {
    secMax = arr[i];
  }
}

console.log(max);
console.log(secMax);
```

##  Complexity

* Time: O(n)
* Space: O(1)

---

# 7️⃣ Second Minimum Element in Array

##  Concept

Find the second smallest distinct element in the array.

## 🔁 Logic

1. Compare first two elements to initialize:

   * `min`
   * `secMin`
2. Traverse from index 2.
3. If current element is smaller than `min`:

   * Update `secMin = min`
   * Update `min`
4. Else if element is not equal to `min` and smaller than `secMin`:

   * Update `secMin`

##  Code

```js
let arr = [10, 20, 50, 98, 56];

let min = 0;
let secMin = 0;

if (arr[0] > arr[1]) {
  min = arr[1];
  secMin = arr[0];
} else {
  min = arr[0];
  secMin = arr[1];
}

for (let i = 2; i < arr.length; i++) {
  if (arr[i] < min) {
    secMin = min;
    min = arr[i];
  } else if (min !== arr[i] && arr[i] < secMin) {
    secMin = arr[i];
  }
}

console.log(min);
console.log(secMin);
```

##  Complexity

* Time: O(n)
* Space: O(1)

---

# 8️⃣ Move All Zeros to Left & Ones to Right

##  Concept

Rearrange a binary array so that:

* All `0`s appear on the left
* All `1`s appear on the right

This is similar to partition logic.

##  Logic (Two Pointer Approach)

1. Pointer `i` traverses the array.
2. Pointer `j` tracks where the next `0` should go.
3. If `arr[i] == 0`:

   * Swap `arr[i]` with `arr[j]`
   * Increment `j`
4. Continue until the array ends.

##  Code

```js
let arr = [0, 1, 1, 0, 1, 0, 0, 1];

let i = 0;
let j = 0;

while (i < arr.length) {
  if (arr[i] == 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}

console.log(arr);
```

##  Complexity

* Time: O(n)
* Space: O(1)

---

