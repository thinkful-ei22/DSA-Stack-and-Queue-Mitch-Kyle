'use strict';
// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // create a node with the data that you want to add to the queue
    const node = new _Node(data);

    // if the queue is empty, make the node the first on the queue
    if (this.first === null) {
      this.first = node;
    }
    // if there is something in the queue already
    // then take the node that is currently at the end of the queue
    // and link it to the new node
    if (this.last) {
      node.prev = this.last;
      this.last.next = node;
    }
    // make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    // if the queue is empty, nothing to return 
    if (this. first === null) {
      return;
    }
    // make the first item on the queue to be the
    // item that is next in line after the first current item
    const node = this.first;
    this.first = node.prev;

    // if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

module.exports = Queue;
