# 🧠 Sorting Algorithms Notes (JavaScript)

Today i learned 3 important sorting algorithms:

* Bubble Sort
* Selection Sort
* Insertion Sort

These are fundamental sorting algorithms and very important for logic building and coding interviews.

---

# 1️⃣ Bubble Sort

## 🔹 Concept

In bubble sort, we compare **adjacent elements**.
If the left element is greater than the right element → we swap them.

After every pass, the **largest element moves to the end** of the array.
This is why it's called *bubble sort* — larger elements bubble up to the end.

## 🔹 Code Flow

```
for i = 0 to n-1
   for j = 0 to n-1-i
      if arr[j] > arr[j+1]
         swap
```

## 🔹 Example

Array: [3, 2, 9, 10, 5]

Pass 1 → biggest element goes to end
Pass 2 → second biggest fixed
Pass 3 → array sorted

## 🔹 Time Complexity

* Worst: O(n²)
* Best: O(n) (if optimized with flag)

## 🔹 Use Case

* Learning and basic understanding
* Very small arrays

---

# 2️⃣ Selection Sort

## 🔹 Concept

In selection sort, we find the **minimum element** and place it at the correct position.

For each pass:

* Find the smallest element
* Swap it with current index

## 🔹 Code Flow

```
for i = 0 to n-1
   min = i
   for j = i+1 to n
      if arr[j] < arr[min]
         min = j
   swap(arr[i], arr[min])
```

## 🔹 Example

Array: [3, 2, 9, 10, 5]

Pass 1 → smallest = 2 → first position
Pass 2 → next smallest = 3
Pass 3 → next smallest = 5

## 🔹 Time Complexity

* Best: O(n²)
* Worst: O(n²)

Selection sort always performs n² comparisons.

## 🔹 Use Case

* When number of swaps must be minimal
* Small datasets

---

# 3️⃣ Insertion Sort

## 🔹 Concept

Insertion sort works like arranging playing cards in hand.

We pick one element and insert it into its correct position
in the already sorted part of the array.

Left side of array always remains sorted.

## 🔹 Code Flow

```
for i = 1 to n
   key = arr[i]
   j = i-1
   while j >= 0 AND arr[j] > key
      shift element right
   insert key at correct position
```

## 🔹 Example

Array: [3, 2, 9, 5]

Step 1: [3]
Step 2: insert 2 → [2,3]
Step 3: insert 9 → [2,3,9]
Step 4: insert 5 → [2,3,5,9]

## 🔹 Time Complexity

* Best: O(n) (already sorted)
* Worst: O(n²)

## 🔹 Use Case

* Small arrays
* Nearly sorted arrays
* Used inside advanced sorting algorithms

---



These are fundamentals of DSA.



