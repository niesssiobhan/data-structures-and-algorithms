'use strict';

const sq = require('./stacks-and-queues.js');

describe('stack', () => {
  it('creates instance', () => {
    let stack = new sq.Stack();
    expect(stack instanceof sq.Stack).toBeTruthy();
  });

  describe('push', () => {
    
    it('accepts arrays, strings, and integers', () => {
      let stack = new sq.Stack();
      stack.push([1, 2, 3]);
      expect(stack.peek().value).toEqual([1, 2, 3]);
      stack.push('hello there!');
      expect(stack.peek().value).toEqual('hello there!');
      stack.push(1);
      expect(stack.peek().value).toEqual(1);
    });
    
    it('returns null if no input', () => {
      let stack = new sq.Stack();
      stack.push();
      expect(stack.peek().value).toBeNull;
    });

    it('adds to top of the stack', () => {
      let stack = new sq.Stack();
      stack.push(1);
      expect(stack.peek().value).toEqual(1);
      stack.push(2);
      expect(stack.peek().value).toEqual(2);
      stack.push(3);
      expect(stack.peek().value).toEqual(3);
    });
  });

  describe('pop', () => {
    it('returns and removes top from stack', () => {
      let stack = new sq.Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop().value).toEqual(3);
      expect(stack.pop().value).toEqual(2);
      expect(stack.pop().value).toEqual(1);
    });

    it('can pop() any type of value', () => {
      let stack = new sq.Stack();
      stack.push('hello');
      stack.push([1, 2, 3]);
      stack.push(2);
      stack.pop();
      expect(stack.peek().value).toEqual([1, 2, 3]);
      stack.pop();
      expect(stack.peek().value).toEqual('hi');
    });

    it('after pop(), points new head on the  stack', () => {
      let stack = new sq.Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      expect(stack.peek().value).toEqual(2);
    });
  });

  describe('peek', () => {
    
    it('returns last item on stack', () => {
      let stack = new sq.Stack();
      stack.push(1);
      expect(stack.peek().value).toEqual(1);
      stack.push(2);
      expect(stack.peek().value).toEqual(2);
    });

    it('returns null to empty stack', () => {
      let stack = new sq.Stack();
      expect(stack.peek()).toBeNull();
    });

    it('returns last item on stack every time', () => {
      let stack = new sq.Stack();
      stack.push(1);
      expect(stack.peek().value).toEqual(1);
      expect(stack.peek().value).toEqual(1);
    });
  });
});


describe('queue', () => {
  it('creates instance', () => {
    let queue = new sq.Queue();
    expect(queue instanceof sq.Queue).toBeTruthy();
  });

  describe('enqueue', () => {
    it('adds value to back of queue', () => {
      let queue = new sq.Queue();
      queue.enqueue(1);
      expect(queue.peek().value).toEqual(1);
      queue.enqueue(2);
      expect(queue.peek().value).toEqual(1);
    });

    it('returns null if no input', () => {
      let queue = new sq.Queue();
      queue.enqueue();
      expect(queue.peek().value).toBeNull;
    });

    it('accepts arrays, strings, and integers', () => {
      let queue3 = new sq.Queue();
      queue3.enqueue([1, 2, 3]);
      expect(queue3.peek().value).toEqual([1, 2, 3]);
      let queue2 = new sq.Queue();
      queue2.enqueue('hello there!');
      expect(queue2.peek().value).toEqual('hi');
      let queue = new sq.Queue();
      queue.enqueue(1);
      expect(queue.peek().value).toEqual(1);
    });

  });

  describe('dequeue', () => {
    it('afterdequeue(), points to new front of queue', () => {
      let queue = new sq.Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      expect(queue.peek().value).toEqual(2);
    });

    it('returns front item from queue and removes it', () => {
      let queue = new sq.Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue().value).toEqual(1);
      expect(queue.dequeue().value).toEqual(2);
      expect(queue.dequeue().value).toEqual(3);
    });

    it('will dequeue any value', () => {
      let queue = new sq.Queue();
      queue.enqueue('hi');
      queue.enqueue([1, 2, 3]);
      queue.enqueue(1);
      queue.dequeue();
      expect(queue.peek().value).toEqual([1, 2, 3]);
      queue.dequeue();
      expect(queue.peek().value).toEqual(1);
    });
  });

  describe('peek', () => {
    it('will return null if empty queue', () => {
      let queue = new sq.Queue();
      expect(queue.peek()).toBeNull();
    });

    it('will return last item that is added to stack every time', () => {
      let queue = new sq.Queue();
      queue.enqueue(1);
      expect(queue.peek().value).toEqual(1);
      expect(queue.peek().value).toEqual(1);
    });

    it('will return first item that is added to queue', () => {
      let queue = new sq.Queue();
      queue.enqueue(1);
      expect(queue.peek().value).toEqual(1);
      queue.enqueue(2);
      expect(queue.peek().value).toEqual(1);
    });

  });
});