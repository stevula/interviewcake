const expect = require('chai').expect;
const TempTracker = require('./index').default;

describe('TempTracker', function() {
  let tempTracker;
  beforeEach(function() {
    tempTracker = new TempTracker();
  });

  describe('insert()', function() {
    it('adds a temperature to the temperatures property', function() {
      const temp = 100;
      expect(tempTracker.temperatures).not.to.have.own.property(temp);
      tempTracker.insert(temp);
      expect(tempTracker.temperatures).to.have.own.property(temp);
    });
  });

  describe('with recorded temperatures', function() {
    const temperatures = [100, 0, 25, 75, 50, 50];
    beforeEach(function() {
      temperatures.forEach(temp => tempTracker.insert(temp));
    });

    describe('getMax()', function() {
      it('returns the highest temperature added so far', function() {
        expect(tempTracker.getMax()).to.equal(Math.max(...temperatures));
      });
    });

    describe('getMin()', function() {
      it('returns the lowest temperature added so far', function() {
        expect(tempTracker.getMin()).to.equal(Math.min(...temperatures));
      });
    });

    describe('getMean()', function() {
      it('returns the mean of the recorded temperatures', function() {
        expect(tempTracker.getMean()).to.equal(50);
      });
    });

    describe('getMode()', function() {
      it('returns the mode of the recorded temperatures', function() {
        expect(tempTracker.getMode()).to.equal(50);
      });
    });
  });
});
