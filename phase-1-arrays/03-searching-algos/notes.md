# 🔍 Searching Algorithms Notes (Linear Search & Binary Search)

## 1️⃣ Linear Search

###  What is Linear Search?

Linear search is the simplest searching algorithm.
We check each element one by one until the target is found.

###  How it works

1. Start from index 0
2. Compare each element with target
3. If found → return index
4. If loop ends → return -1 (not found)

###  Code (JavaScript)

```js
let arr = [1, 2, 3, 4, 5, 6];
let target = 3;

function linearSearch(arr, target) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(linearSearch(arr, target));
```

### ⏱ Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Best    | O(1)       |
| Worst   | O(n)       |
| Average | O(n)       |

###  Advantages

* Very easy to understand
* Works on sorted & unsorted array
* No special condition

###  Disadvantages

* Slow for large data
* Checks every element

---

## 2️⃣ Binary Search

###  What is Binary Search?

Binary search is a fast searching algorithm.
It works only on **sorted array**.

###  How it works

1. Find middle element
2. If target == mid → found
3. If target > mid → search right side
4. If target < mid → search left side
5. Repeat until found

###  Code (JavaScript)

```js
let arr = [2, 5, 8, 19, 45, 67, 78, 88, 94];
let target = 88;

let st = 0;
let en = arr.length - 1;
let index = -1;

while (st <= en) {
  let mid = Math.floor((st + en) / 2);

  if (arr[mid] === target) {
    index = mid;
    break;
  } else if (arr[mid] < target) {
    st = mid + 1;
  } else {
    en = mid - 1;
  }
}

let result = index == -1 ? "Not found" : "Found at " + index + " index";
console.log(result);
```

### ⏱ Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Best    | O(1)       |
| Worst   | O(log n)   |
| Average | O(log n)   |

###  Advantages

* Very fast for large data
* Efficient (log n)

###  Disadvantages

* Only works on sorted array
* Logic little complex

---

##  Linear vs Binary Search

| Feature    | Linear Search     | Binary Search |
| ---------- | ----------------- | ------------- |
| Works on   | Sorted & Unsorted | Only Sorted   |
| Speed      | Slow              | Fast          |
| Complexity | O(n)              | O(log n)      |
| Easy       | Very easy         | Medium        |

---


---

##  Final Summary

Linear search = simple but slow
Binary search = fast but needs sorted array

