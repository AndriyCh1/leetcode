/*
  121. Best Time to Buy and Sell Stock
  You are given an array prices where prices[i] is the price of a given stock on the ith day.
  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

  Example 1:

  Input: prices = [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

  Example 2:
  Input: prices = [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transactions are done and the max profit = 0.
  
  Constraints:

  1 <= prices.length <= 105
  0 <= prices[i] <= 104
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let mProfit = 0;
  let i = 0;

  for (let j = 1; j < prices.length; j++) {
    if (prices[i] > prices[j]) i = j;
    else {
      const curProfit = prices[j] - prices[i];
      if (curProfit > mProfit) mProfit = curProfit;
    }
  }

  return mProfit;
};

console.log(maxProfit([1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 1, 5, 2, 6, 4, 14]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));

/* 
  NOTE: The fastest solution:
 
  var maxProfit = function(prices) {
    var min_price = prices[0]
    var max_profit = Number.MIN_SAFE_INTEGER
    for(var i = 0;i < prices.length;i++){
      min_price = Math.min(min_price,prices[i])
      max_profit = Math.max(max_profit,prices[i] - min_price)
    }

    return max_profit < 0 ? 0 : max_profit
  };
*/

/*
 NOTE: Kadane's Algorithm
  
  public int maxProfit(int[] prices) {
    int maxCur = 0, maxSoFar = 0;
    for(int i = 1; i < prices.length; i++) {
        maxCur = Math.max(0, maxCur += prices[i] - prices[i-1]);
        maxSoFar = Math.max(maxCur, maxSoFar);
    }
    return maxSoFar;
  }
 */
