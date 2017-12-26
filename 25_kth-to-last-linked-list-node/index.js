exports.LinkedListNode = function LinkedListNode(value) {
  this.value = value;
  this.next = null;
};

exports.kthToLastNode = function kthToLastNode(k, node) {
  if (k < 1 || !node.value) throw new Error('invalid input');

  let distanceFromEnd = getLength(node);
  if (k > distanceFromEnd) throw new Error('list is not long enough');

  let current = node;
  while (distanceFromEnd > k) {
    current = current.next;
    distanceFromEnd--;
  }
  return current;
};

function getLength(node) {
  let current = node;
  let length = 1;
  while  (current.next) {
    length++;
    current = current.next;
  }
  return length;
}
