const expect = require('chai').expect;
const { BinaryTreeNode, isSuperBalanced } = require('./index');

describe('isSuperBalanced', function() {
  let treeRoot;

  beforeEach(function() {
    treeRoot = new BinaryTreeNode(1);
  });

  it('returns true for a 1-level tree (single node)', function() {
    expect(isSuperBalanced(treeRoot)).to.be.true;
  });

  it('returns true for a 2-level asymmetrical, superbalanced tree', function() {
    treeRoot.insertLeft(2);
    expect(isSuperBalanced(treeRoot)).to.be.true;
  });

  it('returns true for a 2-level superbalanced tree', function() {
    treeRoot.insertLeft(2);
    treeRoot.insertRight(3);
    expect(isSuperBalanced(treeRoot)).to.be.true;
  });

  it('returns false for a 2-level un-superbalanced tree', function() {
    treeRoot.insertLeft(2);
    treeRoot.left.insertLeft(3);
    expect(isSuperBalanced(treeRoot)).to.be.false;
  });

  it('returns true for a 3-level superbalanced tree', function() {
    treeRoot.insertLeft(2);
    treeRoot.insertRight(3);
    treeRoot.left.insertLeft(4);
    treeRoot.left.insertRight(5);
    treeRoot.right.insertLeft(6);
    treeRoot.right.insertRight(7);
    expect(isSuperBalanced(treeRoot)).to.be.true;
  });

  it('returns false for a 3-level un-superbalanced tree', function() {
    treeRoot.insertLeft(2);
    treeRoot.left.insertLeft(3);
    treeRoot.left.insertRight(4);
    expect(isSuperBalanced(treeRoot)).to.be.true;
  });

  it('returns false for a 4-level un-superbalanced tree', function() {
    treeRoot.insertLeft(2);
    treeRoot.insertRight(3);
    treeRoot.left.insertLeft(4);
    treeRoot.left.insertRight(5);
    treeRoot.left.left.insertLeft(5);
    expect(isSuperBalanced(treeRoot)).to.be.false;
  });

  it('returns false for a 5-level un-superbalanced tree', function() {
    treeRoot.insertLeft(2);
    treeRoot.left.insertLeft(3);
    treeRoot.left.left.insertLeft(4);
    treeRoot.left.left.left.insertLeft(5);
    expect(isSuperBalanced(treeRoot)).to.be.false;
  });
});
