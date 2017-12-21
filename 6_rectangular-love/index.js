exports.default = function findIntersection(rectA, rectB) {
  const xOverlap = findOverlap(
    rectA.leftX,
    rectA.leftX + rectA.width,
    rectB.leftX,
    rectB.leftX + rectB.width
  );
  const yOverlap = findOverlap(
    rectA.bottomY,
    rectA.bottomY + rectA.height,
    rectB.bottomY,
    rectB.bottomY + rectB.height,
  );

  if (!xOverlap || !yOverlap) return false;

  return {
    leftX: xOverlap.start,
    width: xOverlap.size,
    bottomY: yOverlap.start,
    height: yOverlap.size,
  };
}

function findOverlap(startA, endA, startB, endB) {
  const hasIntersection = (
    (startA >= startB && startA <= endB) ||
    (startB >= startA && startB <= endA)
  );

  if (!hasIntersection) return false;

  const start = Math.max(startA, startB);
  const end = Math.min(endA, endB);
  const size = end - start;

  if (size <= 0) return false;

  return {
    start,
    size,
  };
}
