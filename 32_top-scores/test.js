const { expect } = require('chai');
const { sortScores } = require('./index');

describe('sortScores', function() {
  const unsortedScores = [37, 89, 41, 65, 91, 53, 41];
  const HIGHEST_POSSIBLE_SCORE = 100;

  it('returns a sorted array of scores', function() {
    expect(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)).to.deep.equal([91, 89, 65, 53, 41, 41, 37]);
  });
});
