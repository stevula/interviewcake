exports.default = function getMaxProfit(prices) {
  let minPrice;
  let maxProfit;

  prices.forEach((currentPrice) => {
    const profit = currentPrice - minPrice;

    if (!maxProfit || profit > maxProfit) {
      maxProfit = profit;
    }

    if (!minPrice || currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  });

  return maxProfit;
};
