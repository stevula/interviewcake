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

exports.isValidBST = function isValidBST(root) {
  let isLeftValid = true;
  let isRightValid = true;

  if (root.left) {
    isLeftValid = (root.value > root.left.value) && isValidBST(root.left);
  }
  if (root.right) {
    isRightValid = (root.value < root.right.value) && isValidBST(root.right);
  }

  return isLeftValid && isRightValid;
}
