const expect = require('chai').expect;
const findMatchingParen = require('./index').findMatchingParen;

describe('findMatchingParen', function() {
  describe('with valid input', function() {
    const input = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';

    it('returns the index of the closing paren', function() {
      expect(findMatchingParen(input, 10)).to.eq(79);
    });

    it('returns the index of the closing paren when nested', function() {
      expect(findMatchingParen(input, 28)).to.eq(46);
    });

    it('returns the index of the closing paren when nested twice', function() {
      expect(findMatchingParen(input, 68)).to.eq(77);
    });
  });

  describe('with invalid input', function() {
    const input = 'Sometimes (when I nest them (my parentheticals( too much (like this (and this( they get confusing.';

    it('throws an error', function() {
      expect(findMatchingParen(input, 10)).to.be.false;
    });
  })
});
