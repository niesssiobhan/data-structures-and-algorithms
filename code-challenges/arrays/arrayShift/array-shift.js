'use strict';

let secondCodeChallenge = module.exports = {};

secondCodeChallenge.insertShiftArray = function(arr, val) {
  let result = [];
  let mid = arr.length / 2;

  for(let i = 0; i <= arr.length; i++) {
    if(i === mid) {
      result[i] = val;
    }
    if(i < mid) {
      result[i] = arr[i];
    }
    if(i > mid) {
      result[i] = arr[i-1];
    }
  }
  return result;
};