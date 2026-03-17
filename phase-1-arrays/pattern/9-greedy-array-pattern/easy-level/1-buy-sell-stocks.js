/*

Question : Best time to buy and sell stocks

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

let prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  let mP = 0;
  let minPrice = prices[0];
  if (prices.length <= 1) {
    return 0;
  } else {
    for (let i = 0; i < prices.length; i++) {
      if (minPrice > prices[i]) {
        minPrice = prices[i];
      }
      let profit = prices[i] - minPrice;
      if (mP < profit) {
        mP = profit;
      }
    }
  }
  return mP;
};
console.log(maxProfit(prices))