'use strict';
const Queue = require('./Queue');

class BankQueue extends Queue {
  constructor() {
    super();
  }

  randomDequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = node.prev;

    // if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }

    let customer = node.value;
    // console.log('random: ', Math.random);
    let paperwork = Math.random() < 0.75;
    console.log('paperwork: ', paperwork);
    if (customer && !paperwork) {
      console.log('Bad paperwork!');
      this.enqueue(customer);
      return null;
    } else {
      return customer;
    }
  }
}

module.exports = BankQueue;
