exports.LinkedListNode = function LinkedListNode(value) {
  this.value = value;
  this.next = null;
};

exports.deleteNode = function deleteNode(node) {
  if (node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  } else {
    throw Error('cannot call on tail node');
  }
};
