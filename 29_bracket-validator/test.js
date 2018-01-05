const { expect } = require('chai');
const { validateBrackets } = require('./index');

describe('validateBrackets', function() {
  it('returns true for valid input', function() {
    expect(validateBrackets('{[]()}')).to.be.true;
  });

  it('returns false for valid input', function() {
    expect(validateBrackets('{[(])}')).to.be.false;
  });

  it('returns false for valid input', function() {
    expect(validateBrackets('{[}')).to.be.false;
  });
});
