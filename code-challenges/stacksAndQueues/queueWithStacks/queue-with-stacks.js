'use strict';


const Stack = require('../stacks-and-queues.js');

class PsuedoQueue { 
  
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }
      
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

module.exports = PsuedoQueue;