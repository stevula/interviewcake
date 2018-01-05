exports.validateBrackets = function validateBrackets(string) {
  const complements = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    if (complements[currentChar]) {
      if (stack.pop() !== complements[currentChar]) return false;
    } else {
      stack.push(currentChar);
    }
  }
  return true;
};
