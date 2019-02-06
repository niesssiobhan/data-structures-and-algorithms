'use strict';

const Hashtable = require('../hashtable.js');
const util= require('util');

function tree_intersection (b1, b2) {
  let hashmap = new Hashtable();
  let commonValues = [];
  
  const _walk = node => {
    if(!hashmap.contains(node.value)) {
      commonValues.push(node.value);
    }
    if(node.left) {_walk(node.left)}
    if(node.right) {_walk(node.right)}
  };
  const _walkSecond = node => {
    if(hashmap.contains(node.value)) {
      connomValue.push(node.value);
    }
    if(node.left) {_walkSecond(node.left)}
    if(node.right) {_walkSecond(node.right)}
  };
  _walk(b1);
  _walkSecond(b2);
  return commonValues;
}

module.exports = tree_intersection;