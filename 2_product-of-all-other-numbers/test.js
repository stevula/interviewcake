const expect = require('chai').expect;
const productOfAllOtherNumbers = require('./index').default;

describe('productOfAllOtherNumbers', function() {
  it('returns numbers mapped to products of the other ints (4 items)', function() {
    const ints = [1, 7, 3, 4];
    expect(productOfAllOtherNumbers(ints)).to.deep.equal([84, 12, 28, 21]);
  });

  it('returns numbers mapped to products of the other ints (5 items)', function() {
    const ints = [1, 2, 6, 5, 9];
    expect(productOfAllOtherNumbers(ints)).to.deep.equal([540, 270, 90, 108, 60]);
  });

  it('works when input contains one zero', function() {
    const ints = [0, 7, 3, 4];
    expect(productOfAllOtherNumbers(ints)).to.deep.equal([84, 0, 0, 0]);
  });

  it('works when input contains multiple zeroes', function() {
    const ints = [0, 0, 3, 4];
    expect(productOfAllOtherNumbers(ints)).to.deep.equal([0, 0, 0, 0]);
  });
});
