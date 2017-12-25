function Stack() {
  // initialize an empty array
  this.items = [];
  this.maxima = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
  this.items.push(item);
  if (this.maxima.length === 0 || item >= this.getMax()) {
    this.maxima.push(item);
  }
};

// remove the last item
Stack.prototype.pop = function() {

    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    const value = this.items.pop();
    if (value === this.getMax()) this.maxima.pop();
    return value;
  };

// see what the last item is
Stack.prototype.peek = function() {
  if (!this.items.length) {
    return null;
  }
  return this.items[this.items.length -1];
};

Stack.prototype.getMax = function() {
  return this.maxima[this.maxima.length - 1];
};

exports.default = Stack;
