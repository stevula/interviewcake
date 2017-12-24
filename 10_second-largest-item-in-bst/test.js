const expect = require('chai').expect;
const { BinaryTreeNode, getSecondLargestElement } = require('./index');

describe('getSecondLargestElement', function() {
  let treeRoot;

  beforeEach(function() {
    treeRoot = new BinaryTreeNode(10);
  });

  it('returns the second largest value from a 2-level BST', function() {
    treeRoot.insertLeft(5);
    //   10
    //  /
    // 5
    expect(getSecondLargestElement(treeRoot)).to.equal(5);
  });

  it('returns the second largest value from a 2-level BST', function() {
    treeRoot.insertLeft(5);
    treeRoot.insertRight(15);
    //   10
    //  / \
    // 5  15
    expect(getSecondLargestElement(treeRoot)).to.equal(10);
  });

  it('returns the second largest value from a 3-level BST', function() {
    treeRoot.insertLeft(5);
    treeRoot.insertRight(15);
    treeRoot.left.insertLeft(1);
    treeRoot.right.insertLeft(12);
    //     10
    //    / \
    //   5  15
    //  /  /
    // 1  12
    expect(getSecondLargestElement(treeRoot)).to.equal(12);
  });

  it('returns the second largest value from a 3-level BST', function() {
    treeRoot.insertLeft(5);
    treeRoot.insertRight(15);
    treeRoot.left.insertLeft(1);
    treeRoot.left.insertRight(8);
    treeRoot.right.insertLeft(12);
    treeRoot.right.insertRight(19);
    //     10
    //    / \
    //   5  15
    //  /\  /\
    // 1 8 12 19
    expect(getSecondLargestElement(treeRoot)).to.equal(15);
  });

  it('returns the second largest value from a 3-level BST', function() {
    treeRoot.insertLeft(5);
    treeRoot.left.insertLeft(1);
    treeRoot.left.insertRight(8);
    treeRoot.insertRight(11);
    //     10
    //    / \
    //   5   11
    //  /\
    // 1 8
    expect(getSecondLargestElement(treeRoot)).to.equal(10);
  });
});
