exports.getPermutations = function getPermutations(string) {
  if (string.length <= 1) {
    return [string];
  }

  const permutations = [];
  const firstPart = string.slice(0, -1);
  const char = string[string.length - 1];

  const permutationsOfFirstPart = getPermutations(firstPart);
  permutationsOfFirstPart.forEach((permutationOfFirstPart) => {
    for (let i = 0; i <= firstPart.length; i++) {
      const permutation = `${permutationOfFirstPart.slice(0, i)}${char}${permutationOfFirstPart.slice(i)}`;
      permutations.push(permutation);
    }
  });

  return permutations;
};
