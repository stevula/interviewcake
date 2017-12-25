class Stack {
  constructor() {
    this.stack = [];
  }

  pop() {
    return this.stack.pop();
  }

  push(value) {
    return this.stack.push(value);
  }
}

exports.default = class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value) {
    return this.stackA.push(value);
  }

  dequeue() {
    // improve this by leaving stackB alone until empty, then replenish
    let valueToTransfer = this.stackA.pop();
    while (valueToTransfer) {
      this.stackB.push(valueToTransfer);
      valueToTransfer = this.stackA.pop();
    }
    const dequeued = this.stackB.pop();

    valueToTransfer = this.stackB.pop();
    while (valueToTransfer) {
      this.stackA.push(valueToTransfer);
      valueToTransfer = this.stackB.pop();
    }

    return dequeued;
  }
};
