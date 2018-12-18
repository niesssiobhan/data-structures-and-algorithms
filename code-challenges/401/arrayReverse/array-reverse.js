'use strict';

function reverseArray(arr) {
  let newArr = [];
  let idx = 0;
  for(let i = arr.length - 1; i >= 0; i--){
    newArr[idx] = arr[i];
    idx ++;
  }
  return newArr;
}


//test