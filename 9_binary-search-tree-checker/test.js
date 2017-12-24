const expect = require('chai').expect;
const { BinaryTreeNode, isValidBST } = require('./index');

describe('isValidBST', function() {
  let treeRoot;

  beforeEach(function() {
    treeRoot = new BinaryTreeNode(10);
  });

  it('returns true for a 1-level tree (single node)', function() {
    // 10
    expect(isValidBST(treeRoot)).to.be.true;
  });

  it('returns true for a 2-level BST', function() {
    treeRoot.insertLeft(5);
    //   10
    //  /
    // 5
    expect(isValidBST(treeRoot)).to.be.true;
  });

  it('returns true for a 2-level BST', function() {
    treeRoot.insertLeft(5);
    treeRoot.insertRight(15);
    //   10
    //  / \
    // 5  15
    expect(isValidBST(treeRoot)).to.be.true;
  });

  it('returns false for a 2-level invalid BST', function() {
    treeRoot.insertLeft(10);
    treeRoot.insertRight(10);
    //   10
    //  / \
    // 10  10
    expect(isValidBST(treeRoot)).to.be.false;
  });

  it('returns false for a 2-level invalid BST', function() {
    treeRoot.insertLeft(3);
    treeRoot.insertRight(2);
    //     10
    //    / \
    //   3   2
    expect(isValidBST(treeRoot)).to.be.false;
  });

  it('returns false for a 2-level invalid BST', function() {
    treeRoot.insertLeft(15);
    treeRoot.insertRight(14);
    //     10
    //    / \
    //   15   14
    expect(isValidBST(treeRoot)).to.be.false;
  });

  it('returns false for a 2-level invalid BST', function() {
    treeRoot.insertLeft(11);
    treeRoot.insertRight(2);
    //     10
    //    / \
    //   11   2
    expect(isValidBST(treeRoot)).to.be.false;
  });

  it('returns true for a 3-level BST', function() {
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
    expect(isValidBST(treeRoot)).to.be.true;
  });

  it('returns false for a 4-level invalid BST', function() {
    treeRoot.insertLeft(5);
    treeRoot.insertRight(15);
    treeRoot.left.insertLeft(1);
    treeRoot.left.insertRight(8);
    treeRoot.right.insertLeft(16);
    treeRoot.right.insertRight(19);
    treeRoot.left.left.insertLeft(0);
    treeRoot.left.left.insertRight(4);
    treeRoot.left.right.insertRight(9);
    treeRoot.right.left.insertLeft(18);
    //       10
    //      / \
    //     5   15
    //    /\   /\
    //   1  8 16 19
    //  /\  \  \
    // 0 4  9  18
    expect(isValidBST(treeRoot)).to.be.false;
  });

  it('returns false when the immediate relationships are valid but indirect are not', function() {
    treeRoot.insertLeft(30);
    treeRoot.insertRight(80);
    treeRoot.left.insertLeft(20);
    treeRoot.left.insertRight(60);
    treeRoot.right.insertLeft(70);
    treeRoot.right.insertRight(90);
    //     50
    //    /  \
    //   30   80
    //  /\    /\
    // 20 60 70 90
    expect(isValidBST(treeRoot)).to.be.false;
  });
});
