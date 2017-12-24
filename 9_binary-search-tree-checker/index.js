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
}

exports.isValidBST = function isValidBST(node) {
  let isLeftValid = true;
  let isRightValid = true;

  if (node.left) {
    isLeftValid = (node.value > node.left.value) && isValidBST(node.left);
  }
  if (node.right) {
    isRightValid = (node.value < node.right.value) && isValidBST(node.right);
  }

  return isLeftValid && isRightValid;
}
