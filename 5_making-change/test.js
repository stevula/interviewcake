const expect = require('chai').expect;
const numberOfWays = require('./index').default;

describe('numberOfWays', function() {
  it('returns the number of combos of given coins that add up to 4', function() {
    // [1, 1, 1, 1,],
    // [1, 1, 2,],
    // [1, 3,],
    // [2, 2,],
    expect(numberOfWays(4, [1, 2, 3])).to.equal(4);
  });

  it('returns 0 when there is no possible combo adding up to the target', function() {
    expect(numberOfWays(1, [2])).to.equal(0);
  });
});
