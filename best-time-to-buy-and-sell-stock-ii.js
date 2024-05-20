/*
  122. Best Time to Buy and Sell Stock II
  You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
  On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
  Find and return the maximum profit you can achieve.

  Example 1:
  Input: prices = [7,1,5,3,6,4]
  Output: 7
  Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
  Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
  Total profit is 4 + 3 = 7.

  Example 2:
  Input: prices = [1,2,3,4,5]
  Output: 4
  Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
  Total profit is 4.

  Example 3:
  Input: prices = [7,6,4,3,1]
  Output: 0
  Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

  Constraints:

  1 <= prices.length <= 3 * 104
  0 <= prices[i] <= 104
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let totalProfit = 0;
  let dayToBuy = 0;
  let dayToSell = 1;
  let localGrowth = prices[dayToSell] > prices[dayToBuy];

  for (let i = 2; i < prices.length; i++) {
    if (localGrowth) {
      if (prices[i] < prices[i - 1]) {
        totalProfit += prices[dayToSell] - prices[dayToBuy];
        dayToBuy = i;
        localGrowth = false;
      }

      dayToSell = i;
    }

    if (!localGrowth) {
      if (prices[i] > prices[i - 1]) {
        dayToBuy = i - 1;
        dayToSell = i;
        localGrowth = true;
      }
    }
  }

  return localGrowth
    ? totalProfit + prices[dayToSell] - prices[dayToBuy]
    : totalProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 1, 4]));
console.log(maxProfit([1, 2]));

/* 
  NOTE: The fastest solution:
  var maxProfit = function (prices) {
    const profit = [0]
    for (let i = 1; i < prices.length; i++) {
      profit[i] = profit[i - 1] + Math.max(prices[i] - prices[i - 1], 0)
    }
    return profit[prices.length - 1]
  }; 
*/

/* 
  NOTE: Similar solution using 2 while-loops

  public class Solution {
    public int MaxProfit(int[] prices) {
        
            // profit: maximum total profit.
            // buy: the day when buy stock.
            // sell: the day when sell stock.
            // days: maximum trade days.
            int profit = 0, buy = 0, sell = 0, days = prices.Length;
        
            while(buy < days && sell < days)
            {
                while(buy < days - 1 && prices[buy + 1] < prices[buy])
                    buy++; // find the valley of prices               
                
                sell = buy;
                
                while(sell < days - 1 && prices[sell + 1] > prices[sell])
                    sell++; // find the peak of prices
                
                profit += prices[sell] - prices[buy];
                    
                buy = sell + 1;
            }
            
            return profit;
        }
    }
*/
