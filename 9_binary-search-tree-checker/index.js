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

exports.isBinarySearchTree = function isBinarySearchTree(root, level = 1) {
  if (!root.left && !root.right) return level;

  let left, right;

  if (root.left) {
    left = isBinarySearchTree(root.left, level + 1);
  }
  if (root.right) {
    right = isBinarySearchTree(root.right, level + 1);
  }

}
