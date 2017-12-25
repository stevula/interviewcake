exports.default = function suggestMovies(flightLength, movies = []) {
  const complements = { [flightLength]: true };
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (complements[movie.duration]) return true;
    complements[flightLength - movie.duration] = true;
  }
  return false;
};
