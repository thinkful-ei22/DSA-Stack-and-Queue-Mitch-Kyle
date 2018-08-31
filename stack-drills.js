'use strict';
const Stack = require('./Stack');

function main() {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(starTrek);
  console.log(starTrek.pop());
  console.log(starTrek);

}
main();