const expect = require('chai').expect;
const getMaxProfit = require('./index').default;

describe('getMaxProfit', function() {
  it('works for random values', function() {
    const prices = [10, 7, 5, 8, 11, 9];
    expect(getMaxProfit(prices)).to.equal(6);
  });

  it('works when buying at min value does not mean most profit', function() {
    const prices = [10, 20, 5, 8, 11, 9];
    expect(getMaxProfit(prices)).to.equal(10);
  });

  it('works when max value precedes min value', function() {
    const prices = [10, 7, 5, 8, 2, 4];
    expect(getMaxProfit(prices)).to.equal(3);
  });

  it('works when values only decrease', function() {
    const prices = [10, 7, 5, 4, 2, 1, 0];
    expect(getMaxProfit(prices)).to.equal(-1);
  });

  it('works when values are stagnant', function() {
    const prices = [10, 10, 10, 10, 10, 10, 10];
    expect(getMaxProfit(prices)).to.equal(0);
  });
});
