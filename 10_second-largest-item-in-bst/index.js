exports.BinaryTreeNode = class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
};

exports.getSecondLargestElement = function getSecondLargestElement(node) {
  if (node.right && !node.right.right && node.right.left) {
    return node.right.left.value;
  }
  else if (node.right && !node.right.right) {
    return node.value;
  }
  else if (node.right) {
    return getSecondLargestElement(node.right);
  } else {
    return node.left.value;
  }
};
