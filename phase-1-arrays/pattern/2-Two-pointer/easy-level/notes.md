# Two Pointer Pattern – Easy Level 

## What is Two Pointer Pattern?

Two pointer pattern means using **two indices (left & right)** to traverse the array instead of using nested loops.

**Why use it?**

* Reduces time complexity from **O(n²) → O(n)**
* Mostly used in **sorted arrays**, reversing, palindrome, partition problems
* Usually works with **O(1) extra space**

---

# 1. Reverse Array

### Problem

Reverse the entire array in‑place.

Example:

```
Input:  [10, 25, 34, 40]
Output: [40, 34, 25, 10]
```

### Logic

* One pointer at start
* One pointer at end
* Swap both
* Move inward

### Code

```js
let arr = [10, 25, 34, 40];
let left = 0;
let right = arr.length - 1;

while (left < right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  left++;
  right--;
}
```

### Why this works

Each swap puts correct element in its final position.

**Time:** O(n)
**Space:** O(1)

---

# 2. Move Zeros to End

### Problem

Move all zeros to end without changing order of non‑zeros.

Example:

```
Input:  [1,0,5,0,3]
Output: [1,5,3,0,0]
```

### Logic

* j tracks position for next non‑zero
* i scans array
* swap when non‑zero found

### Code

```js
let j = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
}
```

**Time:** O(n)
**Space:** O(1)

---

# 3. Move Zeros to Start

### Problem

Move all zeros to beginning.

Example:

```
Input:  [1,0,5,0,3]
Output: [0,0,1,5,3]
```

### Logic

Same as above, but swap when element is zero.

**Time:** O(n)
**Space:** O(1)

---

# 4. Check Palindrome Array

### Problem

Check if array reads same from both sides.

Example:

```
[1,2,3,2,1] → Palindrome
```

### Logic

* Compare first and last
* Move inward
* If mismatch → not palindrome

### Code

```js
let arr = [1, 2, 3, 2, 1];
let isPalindrome = true;
let right = arr.length - 1;
let left = 0;
while (left < right) {
  if (arr[left] !== arr[right]) {
    isPalindrome = false;
    break;
  }
  left++;
  right--;
}
if (isPalindrome) {
  console.log("Array is palindrome");
} else {
  console.log("Array is not palindrome");
}

```

**Time:** O(n)
**Space:** O(1)

---

# 5. Remove Duplicates (Sorted Array)

### Problem

Remove duplicates in‑place.

Example:

```
Input:  [1,1,2,2,3]
Output: [1,2,3]
```

### Logic

* j stores last unique index
* i scans array

### Code

```js
let j = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[j]) {
    j++;
    arr[j] = arr[i];
  }
}

arr.length = j + 1;
```

**Time:** O(n)
**Space:** O(1)

---

# 6. Pair Sum Equals Target (Sorted)

### Problem

Find two numbers whose sum equals target.

Example:

```
[1,2,3,4,6]
target = 6
Output: 2,4
```

### Logic

If sum too large → move right pointer left
If sum too small → move left pointer right

### Code

```js
let arr = [1, 2, 3, 4, 6];
let target = 6;

let left = 0;
let right = arr.length - 1;

while (left < right) {
  let sum = arr[left] + arr[right];
  if (sum === target) {
    console.log(arr[left], " and ", arr[right], " sum = ", target);
    break;
  } else if (sum > target) {
    right--;
  } else if (sum < target) {
    left++;
  }
}
```

**Time:** O(n)
**Space:** O(1)

---

# 7. Merge Two Sorted Arrays

### Problem

Merge two sorted arrays into one sorted array.

Example:

```
[1,3,5]
[2,4,6]

Output:
[1,2,3,4,5,6]
```

### Logic

Compare both pointers and insert smaller element.

### Code

```js
let arr1 = [1, 4, 7];
let arr2 = [2, 3, 6];
let m = arr1.length;
let n = arr2.length;
let result = new Array(m + n);
let j = 0;
let i = 0;
let k = 0;
while (i < m && j < n) {
  if (arr1[i] < arr2[j]) {
    result[k] = arr1[i];
    i++;
  } else {
    result[k] = arr2[j];
    j++;
  }
  k++;
}

while (i < m) {
  result[k] = arr1[i];
  i++;
  k++;
}
while (j < n) {
  result[k] = arr2[j];
  j++;
  k++;
}
console.log(result);

```

**Time:** O(n+m)
**Space:** O(n+m)

---

# 8. Reverse Subarray

### Problem

Reverse portion of array between given indices.

Example:

```
Input:
[5,10,15,20,25,30]
start=1 end=4

Output:
[5,25,20,15,10,30]
```

### Logic

Same as reverse array but limited range.

### Code

```js
let arr = [5, 10, 15, 20, 25, 30];
let start = 1;
let end = 4;
let left = start;
let right = end;
while (left < right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  left++;
  right--;
}
console.log(arr);
```

**Time:** O(n)
**Space:** O(1)

---

# Interview Recognition Tips

If problem says:

Reverse
Palindrome
Sorted array pair
Remove duplicates
Partition array

→ Think TWO POINTER immediately

---

# Mental Shortcut

Two pointer mostly used for:

Start + End processing
Comparisons
Swapping
Sorted arrays

**Golden rule:**

If nested loop can be avoided using left & right → use TWO POINTER

---

END OF EASY LEVEL
