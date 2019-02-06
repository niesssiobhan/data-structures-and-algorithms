'use strict';

const leftJoin = require('./../left-join.js');
const HashTable = require('./../../hashtable.js');

describe('left join', ()=> {
  it('returns only the left array if 2nd param is undefined', ()=> {


  });
  it('correctly returns the left join ', ()=> {
    let leftTable = new HashTable();
    leftTable.add('f', 'en');
    leftTable.add('w', 'an');
    leftTable.add('d', 'em');
    leftTable.add('o', 'ga');

    let rightTable = new HashTable();
    rightTable.add('f', 'a');
    rightTable.add('w', 'd');
    rightTable.add('d', 'i');
    rightTable.add('g', 'f');

    let result = leftJoin(leftTable, rightTable);

    expect(result.find('f')).toEqual(['en', 'a']);
    expect(result.find('w')).toEqual(['an', 'd']);
    expect(result.find('d')).toEqual(['em', 'i']);
    expect(result.find('o')).toEqual(['ga', null]);
    expect(result.find('g')).toEqual(undefined);
  });
  it('returns undefined if both params are undefined ', ()=> {

  });
});