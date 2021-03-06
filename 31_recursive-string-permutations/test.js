const { expect } = require('chai');
const { getPermutations } = require('./index');

describe('getPermutations', function() {
  // it('returns all permutations of a string with length 1', function() {
  //   expect(getPermutations('a')).to.deep.eq(['a']);
  // });

  // it('returns all permutations of a string with length 2', function() {
  //   expect(getPermutations('ab').sort()).to.deep.eq(['ab', 'ba'].sort());
  // });

  // it('returns all permutations of a string with length 3', function() {
  //   expect(getPermutations('abc').sort()).to.deep.eq(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  // });

  it('returns all permutations of a string with length 4', function() {
    expect(getPermutations('abcd').sort()).to.deep.eq([
      'abcd',
      'abdc',
      'acbd',
      'acdb',
      'adbc',
      'adcb',
      'bacd',
      'badc',
      'bcad',
      'bcda',
      'bdac',
      'bdca',
      'cabd',
      'cadb',
      'cbad',
      'cbda',
      'cdab',
      'cdba',
      'dabc',
      'dacb',
      'dbac',
      'dbca',
      'dcab',
      'dcba',
    ]);
  });
});
