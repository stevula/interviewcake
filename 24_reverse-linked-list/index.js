exports.LinkedListNode = function LinkedListNode(value) {
  this.value = value;
  this.next = null;
};

exports.reverse = function reverse(node) {
  if (!node) throw Error('head node input required');
  if (!node.next) return node;

  let prev = null;
  let current = node;
  let next = current.next;
  while (next) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
