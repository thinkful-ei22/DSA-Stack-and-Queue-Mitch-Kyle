'use strict';

const peek = (queue) => {
  return queue.first.value;
};

const display = (queue) => {
  let currNode = queue.first;
  while (currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
};

module.exports = { peek, display };