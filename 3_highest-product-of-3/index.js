exports.default = function highestProductOf3(ints) {
  let highest = ints[0];
  let lowest = ints[0];
  let lowestProductOf2 = 1;
  let highestProductOf2 = 1;
  let highestProductOf3 = 1;

  ints.forEach((num) => {
    const timesHighest = num * highest;
    const timesLowest = num * lowest;
    const maxProduct = Math.max(num * highestProductOf2, num * lowestProductOf2);
    if (timesProductOf2 > highestProductOf3) highestProductOf3 = timesProductOf2;
    if (timesHighest > highestProductOf2) highestProductOf2 = timesHighest;
    if (timesLowest > lowestProductOf2) lowestProductOf2 = timesLowest;
    if (num > highest) highest = num;
    if (num < lowest) lowest = num;
  });

  return highestProductOf3;
};
