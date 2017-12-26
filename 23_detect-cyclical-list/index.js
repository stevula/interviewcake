exports.LinkedListNode = function LinkedListNode(value) {
  this.value = value;
  this.next = null;
};

exports.containsCycle = function containsCycle(headNode) {
  let tortoise = headNode;
  let hare = headNode;
  while (true) {
    tortoise = tortoise.next;
    hare = hare.next && hare.next.next;
    if (!hare || !tortoise) return false;
    if (hare === tortoise) return true;
  }
};
