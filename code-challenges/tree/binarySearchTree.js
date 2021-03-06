'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
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

add(value) {
  let newNode = new Node(value);
  let _walk = (node) => {
    if(!node) {
      node = newNode;
      this.root = newNode;
      return;
    }
    if(newNode.value > node.value) {
      if(!node.left) {
        node.left = newNode;
        return;
      }
    _walk(node.left);
  }
    if(newNode.value < node.value) {
      if(!node.right) {
        node.right = newNode;
        return;
      }
    _walk(node.right);
    }
  };
  _walk(this.root);
}

contain(value) {
  let _walk = (node) => {
    if(node.value === value) {
      return true;
    }
    if(node.left && value < node.value) {
      _walk(node.left);
    }
    if(node.right && value > node.value) {
      _walk(node.right);
    }
  };
  _walk(this.root);
  return true;
}
}

breadthFirstTree() {
  if (this.root === null) {
    return;
  }
  let queue = [];
  queue.push(this.root);
  
  while (queue.length > 0) {
    var current = queue[0];
    console.log(current.value);
    
    if (current.left !== null) {
      queue.push(current.left)
    }
    if (current.right !== null) {
      queue.push(current.right)
    }
    queue.shift()
  }
}

module.exports = BinarySearchTree;