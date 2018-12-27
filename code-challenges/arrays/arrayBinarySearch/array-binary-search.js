'use strict';

let binarySearchCodeChallenge = module.exports = {};

binarySearchCodeChallenge.BinarySearch = (arr, el) => {
  let center = Math.ceil(arr.length / 2) - 1;
  if(arr[center] > el){
    for(let i = center; i >= 0; i--){
      if(arr[i] === el){
        return arr[i];
      } else if(i === 0){
        return -1;
      } else if(arr[center] < el){
        for(let i = center; i < arr.length; i++){
          if(arr[i] === el){
            return arr[i];
          } else if(i === arr.length -1){
            return -1;
          }
        }
      }
    }
  }
}