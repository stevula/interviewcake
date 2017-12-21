const expect = require('chai').expect;
const mergeRanges = require('./index').default;

describe('mergeRanges', function() {
  it('merges the ranges', function() {
    const ranges = [
      {startTime: 0,  endTime: 1},
      {startTime: 3,  endTime: 5},
      {startTime: 4,  endTime: 8},
      {startTime: 10, endTime: 12},
      {startTime: 9,  endTime: 10},
    ];
    const expected = [
      {startTime: 0, endTime: 1},
      {startTime: 3, endTime: 8},
      {startTime: 9, endTime: 12},
    ];
    expect(mergeRanges(ranges)).to.deep.equal(expected);
  });

  it('merges ranges that "touch" but do not overlap', function() {
    const ranges = [{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}];
    const expected = [{startTime: 1, endTime: 3}];
    expect(mergeRanges(ranges)).to.deep.equal(expected);
  });

  it('merges ranges that are subsets of other ranges', function() {
    const ranges = [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}];
    const expected = [{startTime: 1, endTime: 5}];
    expect(mergeRanges(ranges)).to.deep.equal(expected);
  });

  it('merges multiple ranges into one when appropriate', function() {
    const ranges =   [
      {startTime: 1, endTime: 10},
      {startTime: 2, endTime: 6},
      {startTime: 3, endTime: 5},
      {startTime: 7, endTime: 9},
    ];
    const expected = [{startTime: 1, endTime: 10}];
    expect(mergeRanges(ranges)).to.deep.equal(expected);
  });
});
