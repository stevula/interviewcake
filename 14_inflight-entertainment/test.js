const expect = require('chai').expect;
const suggestMovies = require('./index').default;

describe('suggestMovies', function() {
  it('returns true if there are two movies whose runtimes equal the flight duration', function() {
    const movies = [
      { duration: 95, title: 'Batman' },
      { duration: 90, title: 'Ghost Busters' },
      { duration: 140, title: 'Star Wars' },
      { duration: 120, title: 'Star Trek' },
      { duration: 115, title: 'Jurassic Park' },
    ];
    const flightLength = 260;
    expect(suggestMovies(flightLength, movies)).to.be.true;
  });

  it('returns false if there are not two movies whose runtimes equal the flight duration', function() {
    const movies = [
      { duration: 95, title: 'Batman' },
      { duration: 90, title: 'Ghost Busters' },
      { duration: 120, title: 'Star Trek' },
      { duration: 115, title: 'Jurassic Park' },
    ];
    const flightLength = 260;
    expect(suggestMovies(flightLength, movies)).to.be.false;
  });

  it('does not pick the same movie twice', function() {
    const movies = [
      { duration: 130, title: 'Batman' },
      { duration: 90, title: 'Ghost Busters' },
      { duration: 120, title: 'Star Trek' },
      { duration: 115, title: 'Jurassic Park' },
    ];
    const flightLength = 260;
    expect(suggestMovies(flightLength, movies)).to.be.false;
  });
});
