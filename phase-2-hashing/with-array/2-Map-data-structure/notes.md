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

# 6. Decode the Message

## Problem

You are given two strings:

* `key` → contains all 26 alphabets in some random order
* `message` → encoded message

The **first appearance of each character in the key** determines the mapping to the **normal alphabet (a-z)**.

Spaces remain unchanged.

Example key:

```
the quick brown fox jumps over the lazy dog
```

Mapping becomes:

```
t → a
h → b
e → c
q → d
u → e
...
```

Then every character of message is replaced using this mapping.

---

## Approach

Step 1: Create a mapping structure of size 26.

Step 2: Traverse the `key`.

Step 3: Ignore spaces.

Step 4: If the character appears **first time**, assign next alphabet (`a,b,c,d...`).

Step 5: Traverse the `message` and replace characters using mapping.

---

## Code

```javascript
let key = "the quick brown fox jumps over the lazy dog";
let message = "vkbs bs t suepuv";

let freq = new Array(26).fill(-1);
let chCode = "a".charCodeAt(0);
let ans = "";

for (let i = 0; i < key.length; i++) {
  if (key[i] === " ") continue;

  let index = key[i].charCodeAt(0) - "a".charCodeAt(0);

  if (freq[index] === -1) {
    freq[index] = String.fromCharCode(chCode);
    chCode++;
  }
}

for (let it of message) {
  if (it === " ") {
    ans += " ";
  } else {
    let index = it.charCodeAt(0) - "a".charCodeAt(0);
    ans += freq[index];
  }
}

console.log(ans);
```

---

## Time Complexity

O(n + m)

`n` → key length
`m` → message length

---

## Space Complexity

O(26) → constant

---

## Why this works

Alphabet size is fixed (26). Once mapping is built, every lookup becomes **O(1)**.

---

# 7. Distribute Candies

## Problem

Alice has `n` candies but doctor allows her to eat **only n/2 candies**.

Each candy has a **type**.

Goal:

> Eat maximum number of **different candy types**.

Example

```
[1,1,2,2,3,3]
```

Total candies = 6
She can eat = 3

Unique types = 3

Answer = **3**

---

## Key Observation

She **cannot eat more than n/2 candies**, even if more types exist.

So answer =

```
min(uniqueTypes, n/2)
```

---

## Code

```javascript
let candies = [1, 1, 2, 2, 3, 3];

var distributeCandies = function (candyType) {
  let set = new Set(candyType).size;

  return Math.min(set, candyType.length / 2);
};

console.log(distributeCandies(candies));
```

---

## Time Complexity

O(n)

---

## Space Complexity

O(n)

---

## Why Set Works

Set stores **only unique values**.

So it directly gives number of **distinct candy types**.

---

# 8. Kth Distinct String

## Problem

Return the **kth string that appears exactly once**.

Example

```
arr = ["d","b","c","b","c","a"]
k = 2
```

Distinct strings:

```
d , a
```

Answer = **a**

---

## Approach

Step 1: Count frequency using `Map`.

Step 2: Traverse array again.

Step 3: When frequency == 1 → distinct element.

Step 4: Decrease `k`.

Step 5: When `k == 0` return that element.

---

## Code

```javascript
let str = ["d", "b", "c", "b", "c", "a"];
let k = 2;

const kthDistinct = function (arr, k) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) === 1) {
      k--;
      if (k === 0) return arr[i];
    }
  }

  return "";
};

console.log(kthDistinct(str, k));
```

---

## Time Complexity

O(n)

---

## Space Complexity

O(n)

---

## Why Two Passes

First pass → frequency count
Second pass → preserve original order

---

# 9. Word Pattern

## Problem

Check if pattern matches words in string using **bijection mapping**.

Example

```
pattern = "abba"
s = "dog cat cat dog"
```

Mapping

```
a → dog
b → cat
```

Valid pattern.

---

## Important Rule

Mapping must be **one-to-one**.

Meaning:

```
pattern → word
word → pattern
```

Both must be unique.

---

## Approach

Use **two maps**.

```
map1 : pattern → word
map2 : word → pattern
```

Steps

1 Split string into words
2 Check length mismatch
3 Traverse together
4 Maintain mapping consistency

---

## Code

```javascript
let pattern = "abba";
let s = "dog cat cat dog";

const wordPattern = function (pattern, s) {
  let map1 = new Map();
  let map2 = new Map();

  let words = s.split(" ");

  if (pattern.length !== words.length) return false;

  for (let i = 0; i < words.length; i++) {
    let p = pattern[i];
    let w = words[i];

    if (!map1.has(p) && !map2.has(w)) {
      map1.set(p, w);
      map2.set(w, p);
    } else {
      if (map1.get(p) !== w || map2.get(w) !== p) {
        return false;
      }
    }
  }

  return true;
};

console.log(wordPattern(pattern, s));
```

---

## Time Complexity

O(n)

---

## Space Complexity

O(n)

---

## Why Two Maps

Ensures **bijection**.

Without second map two pattern letters could map to same word.

---

# 10. Set Mismatch (Find Duplicate and Missing)

## Problem

Array contains numbers **1..n** but:

* one number duplicated
* one number missing

Example

```
[3,2,2]
```

Duplicate = 2
Missing = 1

---

## Approach (Index Marking Trick)

Idea:

Use array indices as **visited markers**.

Steps

1 Traverse array
2 Convert value → index using `abs(nums[i]) - 1`
3 If element already negative → duplicate found
4 Otherwise mark visited by making negative

Second pass:

Positive index indicates **missing number**.

---

## Code

```javascript
let nums = [3, 2, 2];

let duplicate = -1;
let missing = -1;

const misMatch = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      duplicate = Math.abs(nums[i]);
    } else {
      nums[index] *= -1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing = i + 1;
    }
  }

  return [duplicate, missing];
};

console.log(misMatch(nums));
```

---

## Time Complexity

O(n)

---

## Space Complexity

O(1)

---

## Why This Trick Works

Values range **1..n**.

So each value maps directly to **index position**.

By flipping sign we mark elements as visited **without extra memory**.

---

# Important Hashing Patterns

## When to use Map

Use Map when:

• frequency counting
• key → value mapping
• bijection problems
• lookup optimization

---

## When to use Set

Use Set when:

• unique elements required
• duplicate detection
• counting distinct items

---

## When to use Index Marking

Use when:

• numbers range **1..n**
• extra space not allowed
• need O(1) memory solution

---


