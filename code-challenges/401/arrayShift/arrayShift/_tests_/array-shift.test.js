'use strict';

const secondCodeChallenge = require('../array-shift.js');

describe ('running tests', () => {
  it('runs with an array with an odd length', () => {
    let arr = [98, 12, 17];
    let val = 7;
    let expected = [98, 12, 7, 17];
    let result = secondCodeChallenge.insertShiftArray(arr, val);
    expect(result).toEqual(expected);
  });

  it('runs with an empty array', () => {
    let arr = [];
    let val = 7;
    let expected = [7];
    let result = secondCodeChallenge.insertShiftArray(arr, val);
    expect(result).toEqual(expected);
  });

  it('runs with an array with an even length', () => {
    let arr = [98, 12, 17, 8];
    let val = 7;
    let expected = [98, 12, 7, 17, 8];
    let result = secondCodeChallenge.insertShiftArray(arr, val);
    expect(result).toEqual(expected);
  });
})