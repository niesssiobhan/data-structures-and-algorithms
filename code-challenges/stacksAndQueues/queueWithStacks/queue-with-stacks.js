'use strict';

class PsuedoQueue {
  constructor() {
    const Stack = require('stacks-and-queues.js');
    this.s1 = new Stack();
    this.s2 = new Stack();
  }
  enqueue(value) {
    while(this.s1.peek.value){
      let popNum = this.s1.pop();
      this.s2.push(popNum);
    }
    this.s1.push(value);
    while(this.s2.peek.value) {
      let popNum = this.s2.pop();
      this.s1.push(popNum);
    }
    return this.s1;
  }
  dequeue(){
    return this.s1.pop();
  }
}