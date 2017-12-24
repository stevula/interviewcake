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

exports.isSuperBalanced = function isSuperBalanced(treeRoot) {
  const leafLevels = getLeafLevels(treeRoot);

  if (leafLevels.length === 1) {
    return true;
  } else if (leafLevels.length === 2) {
  }
  else if (leafLevels.length > 2) {
    return false;
  }

  const levelDifference = Math.abs(leafLevels[1] - leafLevels[0]);
  return levelDifference === 1;
}

function getLeafLevels(root, level = 0) {
  let leafLevels = [];

  if (!root.left && !root.right) {
    leafLevels.push(level);
  };
  if (root.left) {
    leafLevels = [...leafLevels, ...getLeafLevels(root.left, level + 1)];
  }
  if (root.right) {
    leafLevels = [...leafLevels, ...getLeafLevels(root.right, level + 1)];
  }

  return Array.from(new Set(leafLevels));
}
