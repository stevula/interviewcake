exports.default = function mergeRanges(ranges) {
  const withStartTimesAscending = ranges.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  const condensed = [];
  withStartTimesAscending.forEach((range, index) => {
    const condensedRange = condensed[condensed.length - 1];
    if (condensedRange && condensedRange.endTime >= range.startTime) {
      condensedRange.endTime = Math.max(condensedRange.endTime, range.endTime);
    } else {
      condensed.push(range);
    }
  });

  return condensed;
};
