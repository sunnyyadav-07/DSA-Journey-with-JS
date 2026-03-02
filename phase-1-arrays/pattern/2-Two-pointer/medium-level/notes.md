# Two Pointer Pattern – Deep Understanding Notes 🚀

Goal of this file:
When you revise, you should clearly know for EACH question:

1. What the question is asking
2. Why Two Pointer is the BEST choice here
3. What exact thinking triggers Two Pointer

---

# 1️⃣ Container With Most Water

##  What Is The Question Asking?

We are given heights of vertical lines.
We must choose TWO lines such that they form a container holding maximum water.

Area formula:
area = min(height[left], height[right]) * (right - left)

---

##  Why Two Pointer HERE Specifically?

Reason breakdown:

✔ We must choose TWO lines.
✔ Width matters (distance between them).
✔ We want MAXIMUM area.
✔ Brute force would be O(n²) (try every pair).

Key Observation:
Area depends on:

* Width (right - left)
* Minimum of the two heights

Important Logic:
If one side is smaller, that side is limiting the area.
So we move the smaller height pointer.

👉 This is boundary shrinking optimization.
👉 We are eliminating impossible better answers smartly.

That’s why Two Pointer from BOTH ends is perfect.

---

##  Code

```js
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let left = 0;
let right = height.length - 1;
let firstLine=null
let secLine=null
let maxWater = 0;
let minHeight = null;
while (left < right) {
  if (height[left] < height[right]) {
    minHeight = height[left];
  } else {
    minHeight = height[right];
  }
  let width = right - left;
  let area = minHeight * width;
  if (area > maxWater) {
    firstLine=height[left]
    secLine=height[right]
    maxWater = area;
  }
  if (height[left] < height[right]) {
    left++;
  } else {
    right--;
  }
}
console.log(maxWater)

```

Time: O(n) | Space: O(1)

====================================================

# 2️⃣ Remove Element (In‑Place)

##  What Is The Question Asking?

Remove all occurrences of a given value without using extra space.
Modify array in-place.

---

##  Why Two Pointer HERE Specifically?

✔ We must MODIFY original array.
✔ No extra array allowed.
✔ We must keep valid elements together.

Idea:
One pointer scans (i).
One pointer maintains next correct position (j).

This is a FAST-SLOW pointer technique.

👉 We separate valid and invalid elements in one pass.
👉 Avoid shifting multiple times.

That’s why Two Pointer is optimal.

---

##  Code

```javascript
let nums = [3,2,2,3];
let val = 3;

let j = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== val) {
    nums[j] = nums[i];
    j++;
  }
}

nums.length = j;
```

Time: O(n) | Space: O(1)

====================================================

# 3️⃣ Sort 0s and 1s

##  What Is The Question Asking?

Sort array containing only 0 and 1 in linear time.

---

##  Why Two Pointer HERE Specifically?

✔ Only two types of elements.
✔ We want in-place sorting.
✔ Brute force sorting is unnecessary.

Logic:

* i scans array
* j tracks where next 0 should go

Whenever we see 0 → swap with j.

👉 This partitions array into:
[0s | unprocessed | 1s]

This is partition-based two pointer logic.

---

##  Code

```js

let arr = [1, 0, 1, 0, 1, 0, 0, 1];

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
console.log(arr)
```

Time: O(n) | Space: O(1)

====================================================

# 4️⃣ Intersection of Two Sorted Arrays

##  What Is The Question Asking?

Find common elements in two sorted arrays.

---

##  Why Two Pointer HERE Specifically?

✔ BOTH arrays are sorted.
✔ We must compare elements efficiently.
✔ Nested loop would be O(n²).

Since sorted:
If arr1[i] < arr2[j] → move i
If arr1[i] > arr2[j] → move j
If equal → record & move both

👉 We eliminate unnecessary comparisons.
👉 Each element is visited once.

Perfect example of linear merge-style two pointer.

---

##  Code

```js
let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 2, 3, 4, 6];

let i = 0;
let j = 0;
let n = arr1.length;
let m = arr2.length;
let result = new Array(Math.min(arr1.length, arr2.length));
let k = 0;

while (i < n && j < m) {
  if (arr1[i] === arr2[j]) {
    result[k] = arr1[i];
    j++;
    i++;
    k++;
  } else if (arr1[i] < arr2[j]) {
    i++;
  } else {
    j++;
  }
}
result.length = k;
console.log(result);

```

Time: O(n + m) | Space: O(k)

====================================================

# 5️⃣ Squares of Sorted Array

##  What Is The Question Asking?

Return sorted array of squares.
Array may contain negative numbers.

---

##  Why Two Pointer HERE Specifically?

✔ Array already sorted.
✔ Largest square could come from:

* Most negative number
* Most positive number

So maximum square lies at ends.

Idea:
Compare absolute values at left and right.
Place larger square at end of result.

👉 This avoids sorting again.
👉 Maintains O(n) instead of O(n log n).

---

##  Code

```javascript
let arr = [-4,-1,0,3,10];
let n = arr.length;
let result = new Array(n);

let left = 0;
let right = n - 1;
let k = n - 1;

while (left <= right) {
  if (Math.abs(arr[left]) > Math.abs(arr[right])) {
    result[k] = arr[left] * arr[left];
    left++;
  } else {
    result[k] = arr[right] * arr[right];
    right--;
  }
  k--;
}
```

Time: O(n) | Space: O(n)

====================================================

# 6️⃣ Two Sum (Sorted Array – Return Indices)

##  What Is The Question Asking?

Find two numbers whose sum equals target.
Array is sorted.

---

##  Why Two Pointer HERE Specifically?

✔ Array is sorted.
✔ We need a PAIR.
✔ If sum too big → decrease right
✔ If sum too small → increase left

Because:
Increasing left → increases sum
Decreasing right → decreases sum

👉 This works ONLY because array is sorted.
👉 Reduces O(n²) to O(n).

This is classic opposite direction two pointer.

---

##  Code

```js
let arr = [2, 7, 11, 15];
let target = 9;
let right = arr.length - 1;
let left = 0;
let i = -1;
let j = -1;

while (left < right) {
  let sum = arr[left] + arr[right];

  if (sum == target) {
    i = left;
    j = right;
    break;
  } else if (sum > target) {
    right--;
  } else if (sum < target) {
    left++;
  }
}
if (i == -1) {
  console.log("Do not have sum of two element that are equals to target");
} else {
  console.log("indices ", i, j);
}

```

Time: O(n) | Space: O(1)

====================================================

#  FINAL PATTERN RECOGNITION

Use Two Pointer When:

✔ Array is sorted
✔ Need pair
✔ Need boundary shrinking
✔ Need in-place modification
✔ Want O(n) instead of O(n²)

Ask yourself during exam/interview:

1. Can I eliminate half possibilities by moving one pointer?
2. Is data ordered so I can move intelligently?
3. Do I need to compare from both ends?

If YES → TWO POINTER 🔥
