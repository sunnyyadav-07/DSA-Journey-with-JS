/*

Question : Jewels and stones

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

*/

let jewels="aA";
let stones = "aAAbbbb";
let set=new Set(jewels)
let count=0
for(let i=0;i<stones.length;i++){
  if(set.has(stones[i])){
    count++
  }
}
console.log(count)