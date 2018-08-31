'use strict';

const peek = (stack) => {
  // console.log(stack.top.data);
  return stack.top.data;
};

const display = (stack) => {
  const stackDisplay = {};
  let currNode = stack.top;
  let counter = 0;
  while (currNode) {
    stackDisplay[`node${counter}`] = { data: currNode.data };
    counter++;
    currNode = currNode.next;
  }
  console.log(stackDisplay);
};

module.exports = { peek, display };