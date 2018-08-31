const Queue = require('./Queue');
const Stack = require('./Stack');
const { peek, display } = require('./queue-helpers');

function main(){
  let starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.dequeue();
  starTrekQ.dequeue();

  //console.log('First item is:', peek(starTrekQ));
  display(starTrekQ);
}

main();

// Queue implementation using Stack

class NewQueue {
  constructor() {
    let stack1 = new Stack();
    let stack2 = new Stack();
  }

  enqueue(item) {
    this.stack1.push(item);
  }

  dequeue() {
    while (this.stack1.top) {
      this.stack2.push(this.stack1.pop());
    }
    const value = this.stack2.pop();

    while (this.stack2.top) {
      this.stack1.push(this.stack2.pop());
    }

    return value;
  }

  // enqueue(1);
  // enqueue(2);
  // enqueue(3);
  // dequeue();

  // console.log(stack1);
}

// Square dance pairing
let spareM = new Queue();
let spareF = new Queue();

const dancePairing = (dancer) => {
  // if man enters queue, check if any women are waiting, pair or add
  // if woman enters queue, check if any men are waiting, pair or add
  // if paired, print pairing
  if (dancer.gender === 'M') {
    if (spareF.first) {
      console.log('Female dancer is: ', spareF.first.value.name, 'Male dancer is:', dancer.name);
      spareF.dequeue();
    } else {
      spareM.enqueue(dancer);
    }
  }

  if (dancer.gender === 'F'){
    if(spareM.first) {
      console.log('Female dancer is: ', dancer.name, 'Male dancer is:', spareM.first.value.name);
      spareM.dequeue();
    } else {
      spareF.enqueue(dancer);
    }
  }
};

dancePairing({'name': 'Jane', 'gender': 'F'});
dancePairing({'name': 'Frank', 'gender': 'M'});
dancePairing({'name': 'John', 'gender': 'M'});
dancePairing({'name': 'Sherlock', 'gender': 'M'});
dancePairing({'name': 'Madonna', 'gender': 'F'});
dancePairing({'name': 'David', 'gender': 'M'});
dancePairing({'name': 'Christoper', 'gender': 'M'});
dancePairing({'name': 'Beyonce', 'gender': 'F'});

// The Ophidian Bank

const ophidianBank = (person) => {
  const paperwork = Math.random() < 0.75;

  // if paperwork is good, dequeue
  // if paperwork is bad, end of the line

};

