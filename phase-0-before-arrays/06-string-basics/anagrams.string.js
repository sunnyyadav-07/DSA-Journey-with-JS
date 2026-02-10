/*

🚀Question : Check if two strings are anagrams

*/
let string1 = "aab";
let string2 = "abb";

if (string1.length !== string2.length) {
  console.log("NOt anagrams strings");
} else {
  let isAnagrams = true;
  let count = {};
  for (let i = 0; i < string1.length; i++) {
    let ch = string1[i].toLowerCase();
    if (count[ch]) {
      count[ch] = ++count[ch];
    } else {
      count[ch] = 1;
    }
  }

  for (let j = 0; j < string2.length; j++) {
    let ch = string2[j].toLowerCase();
    if(!count[ch]){
      isAnagrams=false;
      break
    }
    count[ch]--
  }
  if (isAnagrams) {
    console.log("Strings are anagram");
  } else {
    console.log("Strings are not anagram");
  }
  console.log(count);
}

  // optimized soltution with ASCII method the space complexity becomes O(1)

  // if (string1.length !== string2.length) {
  //   console.log("NOt anagrams strings");
  // } else {
  //   let isAnagrams = true;
  //   let count = new Array(128).fill(0);
  //   for (let i = 0; i < string1.length; i++) {
  //     let index = string1.toLowerCase().charCodeAt(i)
  //     count[index]++
  //   }

  //   for (let j = 0; j < string2.length; j++) {
  //     let index = string2.toLowerCase().charCodeAt(j);
  //     if (count[index]===0) {
  //       isAnagrams = false;
  //       break;
  //     }
  //     count[index]--;
  //   }
  //   if (isAnagrams) {
  //     console.log("Strings are anagram");
  //   } else {
  //     console.log("Strings are not anagram");
  //   }
  //   // console.log(count);
  // }