//Best Time to Buy and Sell Stock
/*
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Example 1:

Input: prices = [10,1,5,6,7,1]

Output: 6
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.
*/

//brute force approach O(n2)
function maxProfit(prices){
    if(prices.length === 0) return 0;
    let profit = 0;
    for(let i=0;i<prices.length;i++){
        let buyPrice = prices[i];
        for(let j=i+1;j<prices.length;j++){
            let sellPrice = prices[j];
            profit = Math.max(profit,sellPrice-buyPrice);
        }
    }
    return profit;
}

console.log(maxProfit([10,1,5,6,7,1]));


// sliding window approach
// buyPrice acts like the left of the window.
// currentPrice acts like the right of the window.
// Window slides forward, updating minPrice and maxProfit.
function maxProfit(prices){
    if(prices.length === 0) return 0;
    let profit = 0;
    let buyPrice = prices[0];
    for(let i=1;i<prices.length;i++){
        let currentPrice = prices[i];
        profit = Math.max(profit,currentPrice-buyPrice); // calculating max profit after selling in current price
        buyPrice = Math.min(buyPrice,currentPrice); // checking to get the lowest buy price
    }
    return profit;
}

console.log(maxProfit([10,1,5,6,7,1]));