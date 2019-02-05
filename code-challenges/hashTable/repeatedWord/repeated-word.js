'use strict';

const Hashtable = require('../hashtable.js');

function repeatedWord(str) {
  let strArray = str.toLowerCase().split(' ');
  let hashtable = new Hashtable(1024);
  for(let i = 0; i < strArray.length; i++) {
    console.log(arr[i])
    if (hashtable.contains(strArray[i].trim())) {
      return strArray[i];
    }
    hashtable.add(strArray[i], strArray[i]);
  }
  return null;
}

module.exports = repeatedWord;