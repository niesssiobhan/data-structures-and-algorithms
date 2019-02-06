'use strict';

const HashTable = require('../hashtable.js');

function leftJoin(hashL, hashR) {
  let result = new HashTable();
  
  for(let keyL in hashL) {
    let arr = new Array(2);
    arr[0] = hashL.find(keyL);
    if(hashR.contains(keyL)){
      arr[1] = hashR.find(keyL);
    } else {
      arr[1] = null;
    }
    result.add(keyL, arr);
  }
  return result;
}

module.exports = leftJoin;