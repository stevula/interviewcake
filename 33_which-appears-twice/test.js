const { expect } = require('chai');
const { findDuplicate } = require('./index');

describe('findDuplicate', function() {
  const nums = [1, 18, 42, 64, 23, 18, 25, 101];

  it('finds the number that appears twice', function() {
    expect(findDuplicate(nums)).to.equal(18);
  });
});
