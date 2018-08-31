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

/**
 * SORT STACK
 * 
 * input: [4, 5, 3, 6, 1, 2]
 * input: [3456]
 * temp1: [1]
 * temp2: [2]
 * output: [1, 2, 3, 4, 5, 6]
 * 
 * input.top && input.top > temp1.top -> temp1.push(input.pop())
 * input.top < temp1.top -> temp2.push(input.pop())
 * temp2.top && temp1.top -> input.push(temp1.pop())
 * temp2.top && !temp1.top || temp2.top > temp1.top -> temp1.push(temp2.pop())
 * 
 * !input.top && !temp2.top -> output.push(temp1.pop())
 */

const sortStack = (input) => {
  let sorted = new Stack();
  let temp1 = new Stack();
  let temp2 = new Stack();

  while (input.top || temp2.top) {
    if (temp2.top) {
      if (temp1.top) {
        input.push(temp1.pop());
      } else {
        temp1.push(temp2.pop());
      }
    } else if (input.top) {
      if (temp1.top) {
        if (input.top.data > temp1.top.data) {
          temp1.push(input.pop());
        } else {
          temp2.push(input.pop());
        }
      } else {
        temp1.push(input.pop());
      }
    }
  }
  while (temp1.top) {
    sorted.push(temp1.pop());
  }
  return sorted;
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

  // SORT STACK
  const numbers = new Stack();
  numbers.push(2);
  numbers.push(1);
  numbers.push(6);
  numbers.push(3);
  numbers.push(5);
  numbers.push(4);
  const sorted = sortStack(numbers);
  display(sorted);
}
main();