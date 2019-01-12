'use strict';

const PseudoQueue = require('./../queueWithStacks/queue-with-stacks.js');

describe('pseudoQueue class', () => {
  it('error if you are trying to remove from an empty queue', () => {
    const myQueue = new PseudoQueue();
    expect( () => {
      myQueue.deuqueue();
    }).toThrow();
  });

  it('can move to an empty queue by using enqueue', () => {
    const myQueue = new PseudoQueue();
    myQueue.enqueue(3);
    expect(myQueue.dequeue()).toEqual(3);
    expect(myQueue).toBeInstanceOf(PseudoQueue);
  });

  it('can be removed from a queue by using dequeue', () => {
    const myQueue = new PseudoQueue();
    myQueue.enqueue(3);
    expect(myQueue.dequeue()).toEqual(3);
    expect(myQueue).toBeInstanceOf(PseudoQueue);
  });

  it('can move to a multi length queue by using enqueue', () => {
    const myQueue = new PseudoQueue();
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    myQueue.enqueue(5);
    expect(myQueue.dequeue()).toEqual(3);
    expect(myQueue.dequeue()).toEqual(4);
    expect(myQueue.dequeue()).toEqual(5);
    expect( () => {
      myQueue.deuqueue();
    }).toThrow();
    expect(myQueue).toBeInstanceOf(PseudoQueue);
  });

});