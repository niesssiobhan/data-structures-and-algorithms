'use strict';

function evaluator(value) {
  switch(value) {
    case value % 3 === 0 && value % 5 === 0:
      value = 'FizzBuzz';
      break;
    case value % 3 === 0:
      value = 'Fizz';
      break;
    case value % 5 === 0:
      value = 'Buzz';
      break;
    default:
      break;
  }
  return value;
}

function FizzBuzzTree(tree) {
  let node = tree.root;
  let _walk = (node => {
    evaluator(node.value);
    if(node.left) {
      _walk(node.left);
    }
    if(node.right) {
      _walk(node.right);
    }
  });
  _walk(node.root);
  return tree;
}