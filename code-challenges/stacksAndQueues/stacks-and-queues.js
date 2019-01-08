'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
    }
    else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (!this.top) {
      return false;
    }
    let current = this.top;
    if(current.next) {
      this.top = current.next;
    }
    current.next = null;
    return current;
  }

  peek() {
    if (this.top) {
      return this.top;
    }
    else {
      return null;
    }
  }
}

class Queue {
  constructor() {
    this.end = null;
    this.head = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.end = node;
    }
    else {
      this.end.next = node;
      this.end = node;
    }
  }

  dequeue() {
    if (!this.head) {
      return false;
    }
    else {
      let dequeuedItem = this.head;
      this.head = dequeuedItem.next;
      dequeuedItem.next = null;
      return dequeuedItem;
    }
  }

  peek() {
    if (this.head) {
      return this.head;
    }
    else {
      return null;
    }
  }
}

module.exports = {Stack, Queue, Node};