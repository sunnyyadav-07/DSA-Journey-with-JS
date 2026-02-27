#  Array Traversal Pattern (Hard-level)

These 6 questions build the **core traversal, prefix, and suffix intuition**.
Goal: When you see the question, you should instantly know:

• What to find
• Where to start traversal
• What variable to maintain

---

# 1️⃣ Third Largest Element

## ✅ What you need to do

Find the **3rd largest distinct value** in the array.

Example:

```
[55, 20, 45, 63, 22, 10, 35, 70]
```

Sorted (conceptually):

```
70, 63, 55 ← answer
```

Output → **55**

##  What to maintain

Track top 3 values while traversing:

```
firstLargest
secondLargest
thirdLargest
```

##  Pattern

Running maximum tracking

##  Brain trigger

👉 "Keep updating top 3 maximum values"

---

# 2️⃣ Leaders in Array

## ✅ What you need to do

Find all elements that are **greater than everything on their right side**.

Example:

```
[16, 17, 4, 3, 5, 2]
```

Leaders:

```
17, 5, 2
```

Because nothing greater exists on their right.

##  Where to start

Start traversal from **RIGHT → LEFT**

##  What to maintain

```
maxRight
```

If current element > maxRight → leader

##  Pattern

Suffix maximum

##  Brain trigger

👉 "Right side ka maximum track karo"

---

# 3️⃣ Equilibrium Index

## ✅ What you need to do

Find index where:

```
sum of left side = sum of right side
```

Example:

```
[1, 3, 5, 2, 2]
```

Index 2:

```
Left sum = 1+3 = 4
Right sum = 2+2 = 4
```

Answer → **index 2**

##  What to maintain

```
totalSum
leftSum
```

Compute rightSum using formula.

##  Pattern

Prefix sum

##  Brain trigger

👉 "Left sum aur right sum equal find karo"

---

# 4️⃣ Product of Array Except Self (Naive)

## ✅ What you need to do

For every index, find:

```
product of all elements except current index
```

Example:

```
[1,2,3,4]
```

Output:

```
[24,12,8,6]
```

Because:

index 0 → 2×3×4 = 24
index 1 → 1×3×4 = 12

##  What to do

For each element → traverse full array and multiply others.

##  Pattern

Nested traversal

##  Brain trigger

👉 "Current index ko skip karke sab multiply karo"

---

# 5️⃣ Longest Increasing Prefix

## ✅ What you need to do

Find how many elements from the **start of array** are strictly increasing.

Example:

```
[2,5,7,9,3,4]
```

Increasing from start:

```
2 < 5 < 7 < 9
```

Stops at 3.

Answer → **length = 4**

##  Where to start

Start from **index 0 → forward**

##  What to check

```
arr[i] < arr[i+1]
```

##  Pattern

Prefix traversal

##  Brain trigger

👉 "Start se increasing count karo"

---

# 6️⃣ Longest Decreasing Suffix

## ✅ What you need to do

Find how many elements from the **end of array** are strictly decreasing.

Example:

```
[1,5,7,6,4,2]
```

Decreasing at end:

```
7 > 6 > 4 > 2
```

Answer → **length = 4**

##  Where to start

Start from **last index → backward**

##  What to check

```
arr[i-1] > arr[i]
```

##  Pattern

Suffix traversal

##  Brain trigger

👉 "From end count decreasing"

---

#  MASTER PATTERN SUMMARY

| Question            | What to find            | Direction      | Maintain     |
| ------------------- | ----------------------- | -------------- | ------------ |
| Third largest       | 3rd biggest value       | Left → Right   | 3 max values |
| Leaders             | Greater than right side | Right → Left   | maxRight     |
| Equilibrium         | Left sum = right sum    | Left → Right   | leftSum      |
| Product except self | Product excluding index | Full traversal | product      |
| Increasing prefix   | Increasing from start   | Left → Right   | count        |
| Decreasing suffix   | Decreasing from end     | Right → Left   | count        |

---

#  GOLDEN RULE (INTERVIEW SECRET)

If question says:

Prefix → start from index 0
Suffix → start from last index
Largest → maintain maximum
Balance / sum → use prefix sum

---

✅ If you instantly identify direction + variable → problem becomes easy.
