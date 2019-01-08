'use strict';

let sq = require('../stacks-and-queues.js');

let stackOne = new sq.Stack();
stackOne.push(10);
stackOne.push(15);
stackOne.push(20);

let stackTwo = new sq.Stack();

class PsuedoQueue { //not sure where the right pace is to declare the class

  enqueue(value){
    while(stackOne.peek().value !== null){
      let popNum = stackOne.pop();
      stackTwo.push(popNum);
    }
    stackOne.push(value);
    while(stackTwo.peek().value !== null){
      let popNum = stackTwo.pop();
      stackOne.push(popNum);
    }
    return stackOne;
  }

  dequeue(){
    return stackOne.pop();
  }
}

let test = new PseudoQueue();
test.enqueue(5);