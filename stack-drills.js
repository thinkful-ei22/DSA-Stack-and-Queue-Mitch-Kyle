'use strict';
const Stack = require('./Stack');
const { peek, display } = require('./stack-helpers');

/* CHECK FOR PALINDROMES 
  Write an algorithm that uses a stack to determine whether
  a given input is palindrome or not. Use the following
  template as a starting point.
*/

const is_palindrome = (string) => {
  let str = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let palStack = new Stack();
  for (let i=0; i < str.length; i++) {
    palStack.push(str[i]);
  }
  for (let i=0; i < str.length; i++) {
    if (str[i] !== palStack.pop()) {
      return false;
    }
  }
  return true;
};


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

  // PALINDROME
  console.log(is_palindrome('dad')); // true
  console.log(is_palindrome('A man, a plan, a canal: Panama')); // true
  console.log(is_palindrome('1001')); // true
  console.log(is_palindrome('Tauhida')); // false
}
main();