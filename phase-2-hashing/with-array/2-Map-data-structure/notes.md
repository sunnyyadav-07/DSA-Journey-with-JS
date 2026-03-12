# Map Data Structure 

## 1. What is a Map?

A **Map** is a built‑in JavaScript data structure that stores data in **key–value pairs**.

Each key is **unique**, and every key maps to a value.

Example:

```js
let map = new Map();

map.set("a", 1);
map.set("b", 2);

console.log(map);
```

Output conceptually:

```
{
  "a" => 1,
  "b" => 2
}
```

---

# Why Map is Used in DSA

Map is mainly used for:

• **Frequency counting**
• **Fast lookup operations**
• **Key‑value storage**
• **Optimizing brute force solutions**

Most operations in Map take approximately:

**Time Complexity: O(1)**

because internally Map uses **hashing**.

---

# Important Map Methods

| Method         | Purpose                    |
| -------------- | -------------------------- |
| set(key,value) | Insert or update value     |
| get(key)       | Retrieve value of key      |
| has(key)       | Check if key exists        |
| delete(key)    | Remove key                 |
| keys()         | Returns iterator of keys   |
| values()       | Returns iterator of values |

Example:

```js
let map = new Map();

map.set(1,"apple");
map.set(2,"banana");

console.log(map.get(1));

console.log(map.has(2));
```

---

# Question 1: Find Frequency of Elements in Array

## Problem

Given an array, count how many times each element appears.

Example

```
Input: [1,2,3,4,5,2,1,3,4,1,4,5,2]
```

Output conceptually

```
1 -> 3
2 -> 3
3 -> 2
4 -> 3
5 -> 2
```

## Approach

1. Create an empty **Map**.
2. Traverse the array.
3. For each element:

   * If it already exists → increase frequency.
   * If not → initialize frequency with 1.

## Code

```js
let arr = [1, 2, 3, 4, 5, 2, 1, 3, 4, 1, 4, 5, 2];

let map = new Map();

for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

console.log(map);
```

## Time Complexity

O(n)

## Space Complexity

O(n)

---

# Question 2: Two Sum

## Problem

Given an array and a target value, find **two indices whose values sum to the target**.

Example

```
nums = [2,7,11,15]
target = 9

Output: [0,1]
```

Because:

```
2 + 7 = 9
```

## Approach (Hash Map Optimization)

Instead of checking every pair (O(n²)), we use a Map.

Steps:

1. Traverse array.
2. For each element calculate:

```
complement = target - nums[i]
```

3. If complement exists in Map → solution found.
4. Otherwise store current number and index in Map.

## Code

```js
let nums = [2, 7, 11, 15];
let target = 9;

let map = new Map();
let ans = [];

for (let i = 0; i < nums.length; i++) {

  if (map.has(target - nums[i])) {

    ans[0] = map.get(target - nums[i]);
    ans[1] = i;

  } else {

    map.set(nums[i], i);

  }

}

console.log(ans);
```

## Time Complexity

O(n)

## Space Complexity

O(n)

---

# Question 3: Sum of Unique Elements

## Problem

Return the **sum of elements that appear exactly once** in the array.

Example

```
Input: [1,2,3,2]
Output: 4
```

Because only **1 and 3** appear once.

```
1 + 3 = 4
```

## Approach

1. Count frequency using Map.
2. Traverse map keys.
3. Add only those elements whose frequency is **1**.

## Code

```js
let numbers = [1, 2, 3, 2];

var sumOfUnique = function (nums) {

  let map = new Map();
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (let key of map.keys()) {

    if (map.get(key) == 1) {
      sum += key;
    }

  }

  return sum;

};

console.log(sumOfUnique(numbers));
```

## Time Complexity

O(n)

## Space Complexity

O(n)

---

# Question 4: Sort the People by Height

## Problem

Given two arrays:

```
names = ["Mary","John","Emma"]
heights = [180,165,170]
```

Return names sorted in **descending order of heights**.

Output

```
["Mary","Emma","John"]
```

## Approach

1. Store mapping of **height → name** inside a Map.
2. Sort heights in descending order.
3. For each sorted height retrieve name from map.

## Code

```js
let names = ["Mary", "John", "Emma"];
let heights = [180, 165, 170];

var sortPeople = function (names, heights) {

  let map = new Map();

  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
  }

  let result = new Array(names.length);

  let sortedHeights = heights.sort((a, b) => b - a);

  for (let i = 0; i < result.length; i++) {
    result[i] = map.get(sortedHeights[i]);
  }

  return result;

};

console.log(sortPeople(names, heights));
```

## Time Complexity

O(n log n)

(due to sorting)

## Space Complexity

O(n)

---

# Question 5: Most Frequent Even Element

## Problem

Return the **even number that appears most frequently**.

Rules:

• If multiple numbers have same frequency → return **smallest one**
• If no even number exists → return **-1**

Example

```
Input: [1,3,2,8,2,3,8]
Output: 2
```

## Approach

1. Count frequency of **even numbers only** using Map.
2. Traverse map keys.
3. Track:

   * maximum frequency
   * smallest number if tie occurs

## Code

```js
let nums = [1, 3, 2, 8, 2, 3, 8];

let map = new Map();

for (let i = 0; i < nums.length; i++) {

  if (nums[i] % 2 == 0) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

}

let mostFrequentElem = -1;
let freq = 0;

for (let key of map.keys()) {

  if (freq < map.get(key)) {

    freq = map.get(key);
    mostFrequentElem = key;

  }

  else if (freq == map.get(key)) {

    mostFrequentElem = Math.min(mostFrequentElem, key);

  }

}

console.log(mostFrequentElem);
```

## Time Complexity

O(n)

## Space Complexity

O(n)

---

# Common Interview Patterns Using Map

Map is commonly used for:

1. **Frequency counting problems**
2. **Two Sum / Pair problems**
3. **Index lookup problems**
4. **Grouping data**
5. **Optimizing nested loops**

Whenever a problem asks:

• "count occurrences"
• "find pair with target"
• "store element with index"

A **Map is usually the best data structure to use.**

---

