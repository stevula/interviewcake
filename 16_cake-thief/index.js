exports.default = function maxDuffelBagValue(cakeTypes = [], capacity) {
  cakeTypes.forEach(cake => { cake.valuePerKg = cake.value / cake.weight || 0; });
  cakeTypes = cakeTypes.sort((a, b) => b.valuePerKg - a.valuePerKg);
  let sum = 0;
  let remainder = capacity;
  for (let i = 0; i < cakeTypes.length; i++) {
    const cakeType = cakeTypes[i];
    if (cakeType.weight === 0) continue;
    const quotient = Math.floor(remainder / cakeType.weight);
    sum += cakeType.value * quotient;
    remainder = remainder - cakeType.weight * quotient;
  }
  return sum;
};
