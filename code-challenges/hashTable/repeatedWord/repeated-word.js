'use strict';

const Hashtable = require('../hashtable.js');

function repeatedWord(str) {
  let strArr = str.toLowerCase().split(' ');
  let hashtable = new Hashtable(1024);

  for(let i = 0; i < strArr.length; i++) {
    console.log(arr[i])
    if (hashtable.contains(strArr[i].trim())) {
      return strArr[i];
    }
    hashtable.add(strArr[i], strArr[i]);
  }
  return null;
}

module.exports = repeatedWord;