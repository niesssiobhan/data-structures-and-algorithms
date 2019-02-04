'use strict';

const ll = require('../linkedList/linked-list.js');
const util = require('util');

class Hashtable {
  constructor(size){
    this.size = size;
    this.table = new Array(size);
  }

  hash(key){
    let chars = key.split('');
    let aggVal = chars.reduce((acc, val) => acc + val.charCodeAt(0), 0);
    return aggVal % this.size;
  }
  
  add(key, value){
    let hash = this.hash(key);
    if(! this.table[hash]) {this.table[hash] = new ll.LinkedList();}
    this.table[hash].insert({[key]:value});
  }

  find(key){
    let hash = this.getHash(key);
    if(this.table[hash]){
      return this.table[hash];
    } else {
      return 'Cannot find key';
    }
  }

  contains(key){
    let hash = this.hash(key);
    if(this.table[hash]){
      return true;
    } else {
      return false;
    }
  }

  getHash(key){
    let hash = this.hash(key);
    if(this.table[hash]){
      return hash;
    } else {
      return 'Cannot';
    }
  }

}

let myHash = new Hashtable(6);
myHash.add('Teagan', 'snuggle muffin');
myHash.add('Jared', 'dada');
myHash.add('Siobhan', 'mama');
myHash.add('Keely', 'noodle bear');

console.log(myHash.find('Teagan'));
console.log(util.inspect(myHash, {showHidden: false, depth:null}));
module.exports = Hashtable;