exports.default = function productOfAllOtherNumbers(ints) {
  const productsOfAllExceptAtIndex = [];

  let productSoFar = 1;
  for (let i = 0; i < ints.length; i++) {
    productsOfAllExceptAtIndex[i] = productSoFar;
    productSoFar *= ints[i];
  }

  productSoFar = 1;
  for (let i = ints.length - 1; i >= 0; i--) {
    productsOfAllExceptAtIndex[i] *= productSoFar;
    productSoFar *= ints[i];
  }

  return productsOfAllExceptAtIndex;
};
