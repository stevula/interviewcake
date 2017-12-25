const expect = require('chai').expect;
const Stack = require('./index').default;

describe('Stack', function() {
  let stack;

  beforeEach(function() {
    stack = new Stack();
  });

  describe('getMax()', function() {
    describe('when there is only 1 element', function() {
      it('returns the only element', function() {
        stack.push(1)
        expect(stack.getMax()).to.equal(1);
      });
    });

    describe('where there are no elements', function() {
      it('returns undefined', function() {
        expect(stack.getMax()).to.be.undefined;
      });
    });

    describe('when elements are in ascending order', function() {
      it('returns the max item', function() {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        expect(stack.getMax()).to.equal(4);
      });

      it('updates when the max item is popped', function() {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        expect(stack.getMax()).to.equal(4);
        stack.pop();
        expect(stack.getMax()).to.equal(3);
        stack.pop();
        expect(stack.getMax()).to.equal(2);
        stack.pop();
        expect(stack.getMax()).to.equal(1);
        stack.pop();
        expect(stack.getMax()).to.be.undefined;
      });
    });

    describe('when elements are in descending order', function() {
      it('returns the max item', function() {
        stack.push(4)
        stack.push(3)
        stack.push(2)
        stack.push(1)
        expect(stack.getMax()).to.equal(4);
      });

      it('updates when the max item is popped', function() {
        stack.push(4)
        stack.push(3)
        stack.push(2)
        stack.push(1)
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.getMax()).to.equal(4);
        stack.pop();
        expect(stack.getMax()).to.be.undefined;
      });
    });

    describe('when the elements are added in random order', function() {
      it('returns the max item', function() {
        stack.push(1)
        stack.push(101)
        stack.push(25)
        stack.push(101)
        stack.push(96)
        stack.push(96)
        stack.push(48)
        stack.push(95)
        expect(stack.getMax()).to.equal(101);
      });

      it('updates when the max item is popped', function() {
        stack.push(1)
        stack.push(101)
        stack.push(25)
        stack.push(101)
        stack.push(96)
        stack.push(96)
        stack.push(48)
        stack.push(95)
        expect(stack.getMax()).to.equal(101);
        stack.pop();
        expect(stack.getMax()).to.equal(101);
        stack.pop();
        expect(stack.getMax()).to.equal(101);
        stack.pop();
        expect(stack.getMax()).to.equal(101);
        stack.pop();
        expect(stack.getMax()).to.equal(101);
        stack.pop();
        expect(stack.getMax()).to.equal(101);
        stack.pop();
        expect(stack.getMax()).to.equal(101);
        stack.pop();
        expect(stack.getMax()).to.equal(1);
        stack.pop();
        expect(stack.getMax()).to.be.undefined;
      });
    });
  });
});
