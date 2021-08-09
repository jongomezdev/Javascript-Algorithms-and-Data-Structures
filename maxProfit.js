// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// You are given an array prices where prices[i] is the price 
// of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to 
// buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. 
// If you cannot achieve any profit, return 0.


function maxProfit(prices) {
    // Keep track of profit
    let buyPrice = prices[0];
    let profit = 0;
    //Go through the array and decide whether or not to buy
    for(let i = 0; i < prices.length - 1; i++) {
        let tempProfit = prices[i + 1] - prices[i]
        if(tempProfit > 0) {
            if(prices[i] < buyPrice) {
                buyPrice = price[i];
            }
            if(prices[i + 1] -  buyPrice > profit) {
                profit = prices[i + 1] -  buyPrice;
            }
        }
    }
        //Go through array and decide when to sell

            // Record the profit and see if the new profit is more than my memorized profit
            return profit;
};
