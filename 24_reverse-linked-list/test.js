const expect = require('chai').expect;
const LinkedListNode = require('./index').LinkedListNode;
const reverse = require('./index').reverse;

describe('reverse', function() {
  describe('when the list has 1 node', function() {
    let a;

    beforeEach(function() {
      a = new LinkedListNode('A');
    });

    it('returns the node', function() {
      const newHead = reverse(a);
      expect(newHead).to.deep.eq(a);
    });
  });

  describe('when the list has 2 nodes', function() {
    let a, b;

    beforeEach(function() {
      a = new LinkedListNode('A');
      b = new LinkedListNode('B');
      a.next = b;
    });

    it('reverses the linked list', function() {
      const newHead = reverse(a);
      expect(newHead).to.deep.eq(b);
      expect(newHead.next).to.deep.eq(a);
    });
  });

  describe('when the list has 3 nodes', function() {
    let a, b, c;

    beforeEach(function() {
      a = new LinkedListNode('A');
      b = new LinkedListNode('B');
      c = new LinkedListNode('C');
      a.next = b;
      b.next = c;
    });

    it('reverses the linked list', function() {
      const newHead = reverse(a);
      expect(newHead).to.deep.eq(c);
      expect(newHead.next).to.deep.eq(b);
      expect(newHead.next.next).to.deep.eq(a);
    });
  });

  describe('when the list has 4 nodes', function() {
    let a, b, c, d;

    beforeEach(function() {
      a = new LinkedListNode('A');
      b = new LinkedListNode('B');
      c = new LinkedListNode('C');
      d = new LinkedListNode('D');
      a.next = b;
      b.next = c;
      c.next = d;
    });

    it('reverses the linked list', function() {
      const newHead = reverse(a);
      expect(newHead).to.deep.eq(d);
      expect(newHead.next).to.deep.eq(c);
      expect(newHead.next.next).to.deep.eq(b);
      expect(newHead.next.next.next).to.deep.eq(a);
    });
  });

  describe('when the list has many nodes', function() {
    let a, b, c, d, e, f, g, h, i;

    beforeEach(function() {
      a = new LinkedListNode('A');
      b = new LinkedListNode('B');
      c = new LinkedListNode('C');
      d = new LinkedListNode('D');
      e = new LinkedListNode('E');
      f = new LinkedListNode('F');
      g = new LinkedListNode('G');
      h = new LinkedListNode('H');
      i = new LinkedListNode('I');
      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
      e.next = f;
      f.next = g;
      g.next = h;
      h.next = i;
    });

    it('reverses the linked list', function() {
      let currentNode = reverse(a);
      let nextNode = currentNode.next;
      while (nextNode) {
        expect(currentNode.value > nextNode.value).to.be.true;
        const temp = nextNode.next;
        currentNode = nextNode;
        nextNode = temp;
      }
    });
  });

  describe('when the list has no nodes', function() {
    it('throws an error', function() {
      expect(() => reverse()).to.throw(Error);
    });
  });
});
