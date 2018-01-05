const { expect } = require('chai');
const { isPermutationPalindrome } = require('./index');

describe('isPermutationPalindrome', function() {
  it('returns true if a permutation is a palindrome', function() {
    expect(isPermutationPalindrome('civic')).to.be.true;
  });

  it('returns true if a permutation is a palindrome', function() {
    expect(isPermutationPalindrome('ivicc')).to.be.true;
  });

  it('returns false if no permutation is a palindrome', function() {
    expect(isPermutationPalindrome('civil')).to.be.false;
  });

  it('returns false if no permutation is a palindrome', function() {
    expect(isPermutationPalindrome('livci')).to.be.false;
  });
});
