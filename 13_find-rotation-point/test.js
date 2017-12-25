const expect = require('chai').expect;
const findRotationPoint = require('./index').default;

describe('findRotationPoint', function() {
  it('finds the index of the rotation point', function() {
    const words = [
      'ptolemaic',
      'retrograde',
      'supplant',
      'undulate',
      'xenoepist',
      'asymptote',  // <-- rotates here!
      'babka',
      'banoffee',
      'engender',
      'karpatka',
      'othellolagkage',
    ];
    expect(findRotationPoint(words)).to.equal(words.indexOf('asymptote'));
  });

  it('finds the index of the rotation point', function() {
    const words = [ 'k','v','a','b','c','d','e','g','i' ];
    expect(findRotationPoint(words)).to.equal(words.indexOf('a'));
  });

  it('finds the index of the rotation point', function() {
    const words = [ 'b','c','d','e','g','i','k','v','a' ];
    expect(findRotationPoint(words)).to.equal(words.indexOf('a'));
  });

  it('finds the index of the rotation point', function() {
    const words = ['v','a','b','c','d','e','g','i','k' ];
    expect(findRotationPoint(words)).to.equal(words.indexOf('a'));
  });
});
