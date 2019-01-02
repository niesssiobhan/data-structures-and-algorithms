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

mergeLists(list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;
  let merge = new LinkedList();
  while(current1.next || current2.next){
    if(current1.value){
      merege.add(current.value);
      current1 = current1.next;
      }
      if(current2.value){
        merge.add(curretn2.value);
        current2 = current2.next
      }
    }
    return merge.head;
  }
}