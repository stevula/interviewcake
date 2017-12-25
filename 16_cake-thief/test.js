const expect = require('chai').expect;
const maxDuffelBagValue = require('./index').default;

describe('maxDuffelBagValue', function() {
  let cakeTypes;

  beforeEach(function() {
    cakeTypes = [
      { weight: 7, value: 160 },
      { weight: 3, value: 90 },
      { weight: 2, value: 15 },
    ];
  });

  it('returns the max monetary value the bag can hold', function() {
    expect(maxDuffelBagValue(cakeTypes, 20)).to.equal(555);
  });

  it('works if the weight capacity is 0', function() {
    expect(maxDuffelBagValue(cakeTypes, 0)).to.equal(0);
  });

  it('works if a cake has weight and value of 0', function() {
    cakeTypes.push({ weight: 0, value: 0 })
    expect(maxDuffelBagValue(cakeTypes, 2)).to.equal(15);
  });
});
