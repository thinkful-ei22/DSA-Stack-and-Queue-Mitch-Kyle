'use strict';
const Stack = require('./Stack');
const { peek, display } = require('./stack-helpers');

function main() {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(starTrek);
  // console.log(starTrek.pop());
  // console.log(starTrek);
  
  // console.log(peek(starTrek));
  // console.log(starTrek);

  display(starTrek);
  starTrek.pop();
  display(starTrek);
}
main();