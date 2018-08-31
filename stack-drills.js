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
  const open = { '(': ')', '[': ']', '{': '}' };
  const close = { ')': true, ']': true, '}': true };
  let error = null;
  for (let i=0; i < expr.length; i++) {
    if (open[expr[i]]) {
      parens.push({ value: expr[i], location: i });
    } else if (close[expr[i]]) {
      let oldTop = parens.pop();
      
      if (!oldTop || open[oldTop.value] !== expr[i]) {
        error = { value: expr[i], location: i };
        return error;
      }
    }
  }
  return parens.pop();
};

// sort stack
const sortStack = (stack1) => {
  let stack2 = new Stack();

  while(stack1.top) {
    let temp = stack1.pop();

    while (stack2.top && stack2.top.data < temp) {
      stack1.push(stack2.pop());
    }
    stack2.push(temp);
  }

  return stack2;
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
  console.log(parenthesesMatch('([({})])')); // null
  console.log(parenthesesMatch('([({)}])')); // { value: ')', location: 4}
  // console.log(parenthesesMatch('\'{("\''));
  // console.log(parenthesesMatch('[{\'(\'}(\'\')]'));
  // console.log(parenthesesMatch('[{\'("}(\'\')]'));
  let numbers = new Stack();
  numbers.push(6);
  numbers.push(3);
  numbers.push(17);
  numbers.push(1);
  numbers.push(5);
  let sorted = sortStack(numbers);
  console.log('===================');
  display(sorted);
}
main();