'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let nodes = [];
    let _walk = (node) => {
      if(node.left) {_walk(node.left);}
      if(node.right) {_walk(node.right);}
    };
    _walk(this.root);
    return nodes;
  }

  inOrder() {
    let nodes = [];
    let _walk = (node) => {
      if(node.left) {_walk(node.left);}
      nodes.push(node.value);
      if(node.right) {_walk(node.right);}
    };
    _walk(this.root);
    return nodes;
  }

  postOrder() {
    let nodes = [];
    let_walk = (node) => {
      if(node.left) {_walk(node.left);}
      if(node.right) {_walk(node.right);}
      nodes.push(node.value);
    };
    _walk(this.root);
    return nodes;
  }
}

let tree = new BinaryTree();
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.left = b;
a.right = c;
c.left = f;
b.left = d;
b.right = e;
tree.root = a;

const Queue = require('../../../stacks-and-queues.js');

function findMaxValue(tree) {
  let big;
  let q = new Queue.Queue();

  let _walk = (node) => {
    if(node.left) {
      if(node.left.value > big) {
        big = node.left.value;
      }
      q.enueue(node.left);
    }
    if(node.right) {
      if(node.right.value > big) {
        big = node.right.value;
      }
      q.enueue(node.right);
    }
  }
  _walk(tree.root);
  return big;
}

findMaxValue();

module.exports = BinaryTree;