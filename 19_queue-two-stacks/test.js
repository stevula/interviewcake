const expect = require('chai').expect;
const Queue = require('./index').default;

describe('Queue', function() {
  let queue;

  beforeEach(function() {
    queue = new Queue();
  });

  describe('enqueue', function() {
    it('adds an item', function() {
      expect(queue.stackA.stack).to.deep.equal([]);
      queue.enqueue(1);
      expect(queue.stackA.stack).to.deep.equal([1]);
      queue.enqueue(2);
      expect(queue.stackA.stack).to.deep.equal([1, 2]);
    });
  });

  describe('dequeue', function() {
    beforeEach(function() {
      queue.enqueue(1);
      queue.enqueue(2);
    });

    it('removes an item', function() {
      expect(queue.stackA.stack).to.deep.equal([1, 2]);
      queue.dequeue();
      expect(queue.stackA.stack).to.deep.equal([2]);
      queue.dequeue();
      expect(queue.stackA.stack).to.deep.equal([]);
    });

    it('returns the removed item', function() {
      expect(queue.dequeue()).to.equal(1);
    });
  });
});
