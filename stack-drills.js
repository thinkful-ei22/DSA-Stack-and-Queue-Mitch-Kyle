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

/**
 * Matching parentheses in an expression
 */

// build up an object to use as a key for multiple types of ()[]{} using .charCodeAt()?

const parenthesesMatch = (expr) => {
  let parens = new Stack();
  let error = null;
  for (let i=0; i < expr.length; i++) {
    if (expr[i] === '(') {
      parens.push({ value: '(', location: i });
    }
    // check top of stack for '('
    if (expr[i] === ')') {
      let oldTop;
      // if its an open, pop and continue looping
      if (parens.top) {
        oldTop = parens.pop();
      }
      // if its NOT an open, return error w/message
      if (!oldTop || oldTop.value !== '(') {
        error = { value: ')', location: i };
        return error;
      }
    }
  }
  if (parens.top) {
    error = parens.pop();
  }
  return error;
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

  // MATCHING PARENS
  console.log(parenthesesMatch('(1 + 2) + 3')); // null
  console.log(parenthesesMatch('(1 + 2) + 3)')); // {value: ')', location: 11}
  console.log(parenthesesMatch(')1 + 2) + 3')); // {value: ')', location: 0}
  console.log(parenthesesMatch('(1 + 2 + (3)')); // {value: '(', location: 0}
  // console.log(parenthesesMatch('([({})])'));
  // console.log(parenthesesMatch('([({)}])'));
  // console.log(parenthesesMatch('\'{("\''));
  // console.log(parenthesesMatch('[{\'(\'}(\'\')]'));
  // console.log(parenthesesMatch('[{\'("}(\'\')]'));
}
main();