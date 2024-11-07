/*
Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=problem-list-v2&envId=oizxjoit

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

/**
 * @params {number[]} prices
 * @return {number}
 */

var maxProfit = (prices) => {
  let currMin = prices[0];
  let currMax = 0;
  for (let i = 0; i < prices.length; i++) {
    currMin = Math.min(prices[i], currMin);
    currMax = Math.max(currMax, prices[i] - currMin);
  }
  return currMax;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0

// ALL TESTS PASS
