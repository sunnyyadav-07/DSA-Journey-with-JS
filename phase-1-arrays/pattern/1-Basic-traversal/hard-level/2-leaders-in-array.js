/*

Question : Leaders in array

*/


// space complexity O(1)
// time complexity O(n)

let arr = [16, 17, 4, 3, 5, 2];  // case -> 1
// let arr = [-3, -2, -1];      // case -> 2
let maxRight = -Infinity;

for(let i=arr.length-1;i>=0;i--){

  if(arr[i]>maxRight){
    maxRight=arr[i];
    console.log('Leader : ',maxRight)
  }
}