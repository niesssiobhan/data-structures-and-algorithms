'use strict';

const util = require('util');

//Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
  }

// This will add a new Node with value to the tail
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

// This will add a new Node with the value to the head
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

// This will check if there is value that exists in the list
  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (value === current.value) {
        // console.log(true);
        return true;
      } else {
        current = current.next;
      }
    } console.log(false);
    return false;
  }

// This will print all the Node values in the list
  print() {
    let printArr = [];
    let current = this.head;
    while(current){
      printArr.push(current.value);
      current = current.next;
    }
    console.log(printArr);
    return printArr;
  }
}

let list = new LinkedList();

list.insert('Teagan snuggle muffin');
list.insert('Jared aka Dada');
list.insert('Keely noodle bear');
list.append('Bubba Boone');

list.print();

console.log(list.includes('Jared aka Mama'));

module.exports = { LinkedList };