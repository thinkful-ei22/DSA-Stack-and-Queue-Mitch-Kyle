'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (!this.top) {
      this.top = new _Node(data, null);
      return;
    }
    this.top = new _Node(data, this.top);
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

module.exports = Stack;