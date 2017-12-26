const expect = require('chai').expect;
const LinkedListNode = require('./index').LinkedListNode;
const containsCycle = require('./index').containsCycle;

describe('containsCycle()', function() {
  let a, b, c, d, e, f, g, h, i;

  describe('when the list has one node', function() {
    beforeEach(function() {
      a = new LinkedListNode('A');
    });

    it('returns false', function() {
      expect(containsCycle(a)).to.be.false;
    });
  });

  describe('when the list has two nodes', function() {
    beforeEach(function() {
      a = new LinkedListNode('A');
      b = new LinkedListNode('B');
      a.next = b;
    });

    it('returns true if the list is a circuit', function() {
      b.next = a;
      expect(containsCycle(a)).to.be.true;
    });

    it('returns false if the list is not a circuit', function() {
      expect(containsCycle(a)).to.be.false;
    });
  });

  describe('when the list has three nodes', function() {
    beforeEach(function() {
      a = new LinkedListNode('A');
      b = new LinkedListNode('B');
      c = new LinkedListNode('C');
      a.next = b;
      b.next = c;
    });

    it('returns true if the list is a circuit', function() {
      c.next = a;
      expect(containsCycle(a)).to.be.true;
    });

    it('returns false if the list is not a circuit', function() {
      expect(containsCycle(a)).to.be.false;
    });
  });

  describe('when the list has many nodes', function() {
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

    it('returns true if the list is a circuit', function() {
      i.next = a;
      expect(containsCycle(a)).to.be.true;
    });

    it('returns false if the list is not a circuit', function() {
      expect(containsCycle(a)).to.be.false;
    });
  });

  describe('when the cycle occurs in the middle of the list', function() {
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
      i.next = d;
    });

    it('returns true', function() {
      expect(containsCycle(a)).to.be.true;
    });
  });
});
