exports.default = function findRotationPoint(rotated) {
  let lowerBound = 0;
  let upperBound = rotated.length - 1;
  while (true) {
    const mid = Math.round((lowerBound + upperBound) / 2);
    if (rotated[mid] < rotated[mid - 1]) return mid;

    if (rotated[mid] > rotated[lowerBound]) {
      lowerBound = mid;
    }
    else if (rotated[mid] < rotated[lowerBound]) {
      upperBound = mid;
    }
  }
};
