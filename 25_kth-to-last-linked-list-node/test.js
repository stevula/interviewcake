const expect = require('chai').expect;
const LinkedListNode = require('./index').LinkedListNode;
const kthToLastNode = require('./index').kthToLastNode;

describe('kthToLastNode', function() {
  describe('when the list has no nodes', function() {
    it('throws an error', function() {
      expect(() => kthToLastNode()).to.throw(Error);
    });
  });

  describe('when the list does not have enough nodes', function() {
    let a;

    beforeEach(function() {
      a = new LinkedListNode('A');
    });

    it('throws an error', function() {
      expect(() => kthToLastNode(2, a)).to.throw(Error);
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
      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
    });

    it('finds the 1st from last node (= the last node)', function() {
      expect(kthToLastNode(1, a)).to.eq(e);
    });

    it('finds the 2nd from last node', function() {
      expect(kthToLastNode(2, a)).to.eq(d);
    });

    it('finds the 3rd from last node', function() {
      expect(kthToLastNode(3, a)).to.eq(c);
    });

    it('finds the 4th from last node', function() {
      expect(kthToLastNode(4, a)).to.eq(b);
    });

    it('finds the 5rd from last node', function() {
      expect(kthToLastNode(5, a)).to.eq(a);
    });

    it('finds the 6rd from last node', function() {
      expect(() => kthToLastNode(6, a)).to.throw(Error);
    });
  });
});
