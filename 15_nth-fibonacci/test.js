const expect = require('chai').expect;
const nthFibonacci = require('./index').default;

describe('nthFibonacci', function() {
  it('calculates the 1st fibonacci number', function() {
    expect(nthFibonacci(0)).to.equal(0);
  });

  it('calculates the 2nd fibonacci number', function() {
    expect(nthFibonacci(1)).to.equal(1);
  });

  it('calculates the 3rd fibonacci number', function() {
    expect(nthFibonacci(2)).to.equal(1);
  });

  it('calculates the 4th fibonacci number', function() {
    expect(nthFibonacci(3)).to.equal(2);
  });

  it('calculates the 5th fibonacci number', function() {
    expect(nthFibonacci(4)).to.equal(3);
  });

  it('calculates the 6th fibonacci number', function() {
    expect(nthFibonacci(5)).to.equal(5);
  });

  it('calculates the 7th fibonacci number', function() {
    expect(nthFibonacci(6)).to.equal(8);
  });

  it('calculates the 8th fibonacci number', function() {
    expect(nthFibonacci(7)).to.equal(13);
  });

  it('calculates the 9th fibonacci number', function() {
    expect(nthFibonacci(8)).to.equal(21);
  });

  it('calculates the 10th fibonacci number', function() {
    expect(nthFibonacci(9)).to.equal(34);
  });
});
