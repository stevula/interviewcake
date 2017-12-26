const expect = require('chai').expect;
const findUniqueInteger = require('./index').default;

describe('findUniqueInteger', function() {
  const integers = [ 1, 1, 2, 3, 2 ];

  it('returns the unique integer from the array', function() {
    expect(findUniqueInteger(integers)).to.equal(3);
  });
});
