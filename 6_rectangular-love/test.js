const expect = require('chai').expect;
const findIntersection = require('./index').default;

describe('findIntersection', function() {
  it('finds the intersection between two rectangles (top right / bottom left)', function() {
    const rectA = {
      leftX: 1,
      bottomY: 1,
      width: 6,
      height: 3,
    };
    const rectB = {
      leftX: 5,
      bottomY: 2,
      width: 3,
      height: 6,
    };
    const expected = {
      leftX: 5,
      bottomY: 2,
      width: 2,
      height: 2,
    }
    expect(findIntersection(rectA, rectB)).to.deep.equal(expected);
  });

  it('finds the intersection between two rectangles (bottom right / top left)', function() {
    const rectA = {
      leftX: 1,
      bottomY: 1,
      width: 6,
      height: 3,
    };
    const rectB = {
      leftX: 5,
      bottomY: 0,
      width: 6,
      height: 3,
    };
    const expected = {
      leftX: 5,
      bottomY: 1,
      width: 2,
      height: 2,
    }
    expect(findIntersection(rectA, rectB)).to.deep.equal(expected);
  });

  it('finds the intersection between two rectangles (bottom left / top right)', function() {
    const rectA = {
      leftX: 1,
      bottomY: 1,
      width: 6,
      height: 3,
    };
    const rectB = {
      leftX: 0,
      bottomY: 0,
      width: 2,
      height: 2,
    };
    const expected = {
      leftX: 1,
      bottomY: 1,
      width: 1,
      height: 1,
    }
    expect(findIntersection(rectA, rectB)).to.deep.equal(expected);
  });

  it('finds the intersection between two rectangles (top left / bottom right)', function() {
    const rectA = {
      leftX: 1,
      bottomY: 1,
      width: 6,
      height: 3,
    };
    const rectB = {
      leftX: -1,
      bottomY: 2,
      width: 5,
      height: 5,
    };
    const expected = {
      leftX: 1,
      bottomY: 2,
      width: 3,
      height: 2,
    }
    expect(findIntersection(rectA, rectB)).to.deep.equal(expected);
  });

  it('finds the intersection between two rectangles when they share a side', function() {
    const rectA = {
      leftX: 1,
      bottomY: 1,
      width: 6,
      height: 3,
    };
    const rectB = {
      leftX: 5,
      bottomY: 2,
      width: 2,
      height: 6,
    };
    const expected = {
      leftX: 5,
      bottomY: 2,
      width: 2,
      height: 2,
    }
    expect(findIntersection(rectA, rectB)).to.deep.equal(expected);
  });

  it('finds the intersection between two rectangles when one is superimposed on the other', function() {
    const rectA = {
      leftX: 1,
      bottomY: 1,
      width: 6,
      height: 3,
    };
    const rectB = {
      leftX: 1,
      bottomY: 1,
      width: 6,
      height: 3,
    };
    const expected = {
      leftX: 1,
      bottomY: 1,
      width: 6,
      height: 3,
    }
    expect(findIntersection(rectA, rectB)).to.deep.equal(expected);
  });

  it('finds the intersection when one rectangle is completely enclosed in another', function() {
    const rectA = {
      leftX: 1,
      bottomY: 1,
      width: 6,
      height: 3,
    };
    const rectB = {
      leftX: 2,
      bottomY: 2,
      width: 4,
      height: 1,
    };
    const expected = {
      leftX: 2,
      bottomY: 2,
      width: 4,
      height: 1,
    }
    expect(findIntersection(rectA, rectB)).to.deep.equal(expected);
  });

  it('finds the intersection when one rectangle has two corners inside the other', function() {
    const rectA = {
      leftX: 1,
      bottomY: 1,
      width: 6,
      height: 3,
    };
    const rectB = {
      leftX: 2,
      bottomY: 2,
      width: 3,
      height: 6,
    };
    const expected = {
      leftX: 2,
      bottomY: 2,
      width: 3,
      height: 2,
    }
    expect(findIntersection(rectA, rectB)).to.deep.equal(expected);
  });

  it('finds the intersection when one rectangle intersects but does not have corners in another', function() {
    const rectA = {
      leftX: 1,
      bottomY: 1,
      width: 6,
      height: 3,
    };
    const rectB = {
      leftX: 5,
      bottomY: 0,
      width: 3,
      height: 6,
    };
    const expected = {
      leftX: 5,
      bottomY: 1,
      width: 2,
      height: 3,
    }
    expect(findIntersection(rectA, rectB)).to.deep.equal(expected);
  });

  it('returns false if there is no overlap', function() {
    const rectA = {
      leftX: 1,
      bottomY: 1,
      width: 3,
      height: 3,
    };
    const rectB = {
      leftX: 5,
      bottomY: 2,
      width: 3,
      height: 6,
    };
    const expected = {
      leftX: 5,
      bottomY: 2,
      width: 2,
      height: 2,
    }
    expect(findIntersection(rectA, rectB)).to.be.false;
  });

  it('returns false if there is no overlap but they share a side', function() {
    const rectA = {
      leftX: 1,
      bottomY: 1,
      width: 6,
      height: 3,
    };
    const rectB = {
      leftX: 7,
      bottomY: 2,
      width: 3,
      height: 6,
    };
    const expected = {
      leftX: 5,
      bottomY: 2,
      width: 2,
      height: 2,
    }
    expect(findIntersection(rectA, rectB)).to.be.false;
  });
});
