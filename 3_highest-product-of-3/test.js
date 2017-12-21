const expect = require('chai').expect;
const highestProductOf3 = require('./index').default;

describe('highestProductOf3', function() {
  it('returns the highest product of 3 integers (length 3)', function() {
    const ints = [1, 7, 3];
    expect(highestProductOf3(ints)).to.equal(21);
  });

  it('returns the highest product of 3 integers (length 4)', function() {
    const ints = [1, 7, 3, 10];
    expect(highestProductOf3(ints)).to.equal(210);
  });

  it('returns the highest product of 3 integers (length 5)', function() {
    const ints = [1, 7, 3, 8, 5];
    expect(highestProductOf3(ints)).to.equal(280);
  });

  it('returns the highest product of 3 integers (length 10)', function() {
    const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(highestProductOf3(ints)).to.equal(720);
  });

  it('returns the highest product of 3 integers (with duplicates)', function() {
    const ints = [1, 7, 3, 7, 5, 7];
    expect(highestProductOf3(ints)).to.equal(343);
  });

  it('returns the highest product of 3 negative integers', function() {
    const ints = [-10, -10, 1, 3, 2];
    expect(highestProductOf3(ints)).to.equal(300);
  });
});
