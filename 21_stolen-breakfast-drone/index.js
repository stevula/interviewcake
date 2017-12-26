exports.default = function findUniqueInteger(deliveryIdConfirmations = []) {
  const possibilities = {};
  deliveryIdConfirmations.forEach((number) => {
    if (possibilities[number]) {
      delete possibilities[number];
    }
    else {
      possibilities[number] = true;
    }
  });
  return parseInt(Object.keys(possibilities)[0], 10);
};
