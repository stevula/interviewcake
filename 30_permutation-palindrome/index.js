exports.isPermutationPalindrome = function isPermutationPalindrome(string) {
  const letters = {};
  for (let i = 0; i < string.length; i += 1) {
    const letter = string[i];
    if (!letters[letter]) {
      letters[letter] = true;
    } else {
      delete letters[letter];
    }
  }
  return Object.keys(letters).length <= 1;
};
