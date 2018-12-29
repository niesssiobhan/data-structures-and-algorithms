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

// This will let you to be able to locate a value within the Linked List from the end and find its index value
  fromEnd(k) {
    if(!this.head) {
      throw "Error";
    }
    let current = this.head;
    let counter = 0;
    current = this.head;
    counter = 0;
    while(counter !== k) {
      current = current.next;
      counter++;
    }
    return current.value;
  }

// This will add a new Node with the value to the head
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

// This is going to make it so that you are able to insert a value before another
  insertBefore(value, newValue) {
    let node = new Node(newValue);
    let current = this.head;
    if(!this.head) {
      return;
    }
    while(current.next !== value) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }

// This will make it so that you are able to insert a value after another
  insertAfter(value, newValue){
    if(!this.head){
      this.head = new Node(newValue);
      return;
    }
    let currert = this.head;
    while(current.value !== value){
      current = current.next;
    }
    let node = new Node(newValue);
    node.next = current.next;
    current.next = node;
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