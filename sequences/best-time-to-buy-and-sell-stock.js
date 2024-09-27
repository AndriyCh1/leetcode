// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfitValue = 0;
  let minIdx = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[minIdx] > maxProfitValue) {
      maxProfitValue = prices[i] - prices[minIdx];
    } else if (prices[i] < prices[minIdx]) {
      minIdx = i;
    }
  }

  return maxProfitValue;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
