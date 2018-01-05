exports.findMatchingParen = function findMatchingParen(string, openingParenIndex) {
  let unclosedParens = 0;
  for (let i = openingParenIndex; i < string.length; i++) {
    const char = string[i];
    if (char === '(') {
      unclosedParens += 1;
    } else if (char === ')') {
      unclosedParens -= 1;
    }
    if (unclosedParens === 0) return i;
  }
  return false;
};
