const expect = require('chai').expect;
const LinkedListNode = require('./index').LinkedListNode;
const deleteNode = require('./index').deleteNode;

describe('deleteNode', function() {
  let a, b, c;

  beforeEach(function() {
    a = new LinkedListNode('A');
    b = new LinkedListNode('B');
    c = new LinkedListNode('C');
    a.next = b;
    b.next = c;
  });

  it('deletes the node from the list', function() {
    expect(a.next).to.deep.eq(b);
    deleteNode(b);
    expect(a.next).to.deep.eq(c);
  });

  it('throws an error if called on the tail node', function() {
    expect(() => deleteNode(c)).to.throw(Error);
  });
});
