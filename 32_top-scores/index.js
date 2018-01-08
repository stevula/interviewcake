exports.sortScores = function sortScores(scores, maxScore) {
  const counts = {};
  scores.forEach((score) => {
    if (!counts[score]) {
      counts[score] = 1;
    } else {
      counts[score] += 1;
    }
  });

  const sorted = [];
  Object.keys(counts).reverse().forEach((score) => {
    for (let i = 0; i < counts[score]; i++) sorted.push(parseInt(score, 10));
  });
  return sorted;
};
