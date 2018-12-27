'use strict';

const binarySearchCodeChallenge = require('../array-binary-search.js');
const binary = binarySearchCodeChallenge.BinarySearch;


describe ('binary array search tests', () => {
  it('array of an odd length', () => {
    let arr = [1, 3, 5, 7, 9];
    let val = 7;
    let expected = 3;
    let result = binary(arr, val);
    expect(result).toEqual(expected);
  });

  it('array of an even length', () => {
    let arr = [2, 4, 6, 8];
    let val = 6;
    let expected = 2;
    let result = binary(arr, val);
    expect(result).toEqual(expected);
  });

  it('provides the index value of posistion requested', () => {
    let arr = [7, 17, 98, 19];
    let val = 17;
    let expected = 1;
    let result = binary(arr, val);
    expect(result).toEqual(expected);
  });

  it('reurns a -1 if the index value requested is not shown in the array', () => {
    let arr = [7, 17, 98, 19, 20, 5];
    let val = 13;
    let expected = -1;
    let result = binary(arr, val);
    expect(result).toEqual(expected);
  });
});