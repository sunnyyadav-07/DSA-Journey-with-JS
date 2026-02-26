# Array Patterns (Basic Traversal)

This file contains **common array interview patterns**, intuition, dry logic, and complexity. Designed for fast revision 

---

# 1. Majority Element (Boyer–Moore Voting Algorithm)

## Problem

Find the element that appears **more than n/2 times**.

Example:

```
[2,2,1,1,1,2,2]
Output → 2
```

## Core Intuition 

Think like **voting and cancelling**:

* Same element → vote increases
* Different element → vote cancels
* Majority element survives cancellation

Because majority element frequency > n/2.

## Steps

### Phase 1: Find candidate

```
count = 0
candidate = null

for each element:

    if count == 0
        candidate = element

    if element == candidate
        count++
    else
        count--
```

### Phase 2: Verify candidate

Count its frequency again.

## Why verification needed?

Because Boyer‑Moore always gives a candidate even if no majority exists.

## Complexity

Time: O(n)
Space: O(1)

## Visual

```
2 count=1
2 count=2
1 count=1
1 count=0
1 candidate reset
2 survives
```

---

# 2. Rearrange Positive & Negative (Partition Technique)

## Problem

Move negatives to left and positives to right.

Example

```
[1, -5, 2, 7, -8, -4, 10]

Output
[-5, -8, -4, 7, 2, 1, 10]   (order may vary)
```

## Core Intuition 

Use pointer:

```
j → position to place next negative
```

When negative found → swap with j

## Steps

```
j = 0

for i from 0 to n‑1

    if arr[i] < 0
        swap arr[i], arr[j]
        j++
```

## Result

All negatives on left
All positives on right

## Complexity

Time: O(n)
Space: O(1)

---

# 3. Replace Each Element with Square

## Problem

Convert every element into its square.

Example

```
[2,4,6]

Output
[4,16,36]
```

## Logic

Simply traverse and square each element.

```
for each element
    arr[i] = arr[i] * arr[i]
```

## Complexity

Time: O(n)
Space: O(1)

---

# 4. Count Elements Greater than X

## Problem

Count numbers greater than given value.

Example

```
arr = [4,56,75,84,52,90]
X = 60

Output → 3
```

## Logic

Traverse and count.

```
count = 0

for each element

    if element > X
        count++
```

## Complexity

Time: O(n)
Space: O(1)

---

# 5. Difference Between Max and Min

## Problem

Find

```
max − min
```

Example

```
[4,56,75,84,52,90]

max = 90
min = 4

answer = 86
```

## Core Intuition 

Track both in one traversal.

## Steps

```
max = arr[0]
min = arr[0]

for each element

    if element > max
        max = element

    else if element < min
        min = element
```

## Complexity

Time: O(n)
Space: O(1)

---

# Key Interview Patterns Summary

| Pattern   | Used in                         |
| --------- | ------------------------------- |
| Voting    | Majority element                |
| Partition | Rearranging positives/negatives |
| Traversal | Count, square                   |
| Tracking  | max/min problems                |

---

# Interview Tips 

Always think:

• Can I solve in one traversal?

• Can I reduce space to O(1)?

• Can I reuse partition or voting logic?

These patterns appear in FAANG / product‑based interviews frequently.

---

