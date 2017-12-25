const expect = require('chai').expect;
const findRotationPoint = require('./index').default;

describe('findRotationPoint', function() {
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

  it('finds the index of the rotation point', function() {
    expect(findRotationPoint(words)).to.equal(words.indexOf('asymptote'));
  });
});
