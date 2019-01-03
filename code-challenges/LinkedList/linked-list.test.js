'use strict';

const list = require('./linked-list.js');

describe('insert method', () => {
  it('will add a new node to the start of the list if a value is given', () => {
    let newList = new list.LinkedList();
    newList.insert('Teagan snuggle muffin');
    expect(newList).toEqual({'head': {'next': null, 'value': 'Teagan snuggle muffin'}});
  });

  it('will add a multiple nodes to the list if multiple nodes were given', () => {
    let newList = new list.LinkedList();
    newList.insert('Teagan snuggle muffin');
    newList.insert('Keely noodle bear');
    console.log(newList);
    expect(newList.head.next.value).toEqual('Teagan snuggle muffin');
  });

  it('adds an empty node to the list if the value was not given', () => {
    let newList = new list.LinkedList();
    newList.insert();
    expect(newList).toEqual({'head': {'next': null, 'value': undefined}});
  });
  
});

describe('includes method', () => {
  it('will return true if the value was not found in the list', () => {
    let newList = new list.LinkedList();
    newList.append('Teagan snuggle muffin');
    newList.append('Keely noodle bear');
    newList.append('Bubba Boone');
    newList.append('Jared aka Dada');
    expect(newList.includes('Bubba Boone')).toBeTruthy();
  });

  it('will return false if the value was not found in the list', () => {
    let newList = new list.LinkedList();
    newList.append('Teagan snuggle muffin');
    newList.append('Keely noodle bear');
    newList.append('Bubba Boone');
    newList.append('Jared aka Dada');
    expect(newList.includes('Jared aka Mama')).toBeFalsy();
  });
  
  it('will return falsy if there are one or more correct or incorrect values are given', () => {
    let newList = new list.LinkedList();
    newList.append('Teagan snuggle muffin');
    newList.append('Keely noodle bear');
    newList.append('Bubba Boone');
    newList.append('Jared aka Dada');
    expect(newList.includes('Keely angry bear', 'Bubba Boone')).toBeFalsy();
  });
  
  it('will return true if there are more than one correct values that are given', () => {
    let newList = new list.LinkedList();
    newList.append('Teagan snuggle muffin');
    newList.append('Keely noodle bear');
    newList.append('Bubba Boone');
    newList.append('Jared aka Dada');
    expect(newList.includes('Keely noodle bear', 'Bubba Boone')).toBeTruthy();
  });

});

describe('print method', () => {
  it('will print the entire linked list', () => {
    let newList = new list.LinkedList();
    newList.append('Teagan snuggle muffin');
    newList.append('Keely noodle bear');
    newList.append('Bubba Boone');
    newList.append('Jared aka Dada');
    expect(newList.print()).toEqual(['Teagan snuggle muffin', 'Keely noodle bear', 'Bubba Boone', 'Jared aka Dada']);
  });

  it('will return an empty list ifthere were no values added', () => {
    let newEmpty = new list.LinkedList();
    expect(newEmpty.print()).toEqual([]);
  });

  it('will return falsy if an array has been entered into the list', () => {
    let newList = new list.LinkedList();
    let result = newList.append([1, 2, 3]);
    expect(result).toBeFalsy();
  });

});

describe('append method', () => {
  it('will add a new node to the end of the list if a value has been given', () => {
    let newList = new list.LinkedList();
    newList.append('Teagan snuggle muffin');
    expect(newList).toEqual({'head': {'next': null, 'value': 'Teagan snuggle muffin'}});
  });

  it('will add an empty node to the list if a value has not been given', () => {
    let newList = new list.LinkedList();
    newList.append();
    expect(newList).toEqual({'head': {'next': null, 'value': undefined}});
  });
  
  it('will add a multiple nodes to the list if multiple nodes have been given', () => {
    let newList = new list.LinkedList();
    newList.append('Teagan snuggle muffin');
    newList.append('Keely noodle bear');
    console.log(newList);
    expect(newList.head.next.value).toEqual('Keely noodle bear');
  });

});

describe('insert After method', () => {
  it('will add a new value after the selected value if a new value has been given', () => {
    let newList = new list.LinkedList();
    newList.append('Bubba Boone');
    newList.insertAfter('Bubba Boone', 'Teagan snuggle muffin');
    expect(newList.head.next.value).toEqual('Teagan snuggle muffin');
  });

});

describe('insert Before method', () => {
  it('will add a new value before the selected value if a new value has been given', () => {
    let newList = new list.LinkedList();
    newList.append('Bubba Boone');
    newList.insertBefore('Bubba Boone', 'Sir Charlie');
    expect(newList.head.next.value).toEqual('Sir Charlie');
  });

});

describe('kFromEnd method', () => {
  it('will return the value of the node that has the value of k from the end', () => {
    let newList = new list.LinkedList();
    newList.append('Teagan snuggle muffin');
    newList.append('Jared aka Dada');
    newList.append('Keely noodle bear');
    newList.append('Bubba Boone');
    newList.append('Sir Charlie');
    newList.kFromEnd(2);
    expect(newList.kFromEnd(2)).toEqual('Keely noodle bear');
  });

  it('will return falsy if the k value is not an integer', () => {
    let newList = new list.LinkedList();
    newList.append('Teagan snuggle muffin');
    newList.append('Jared aka Dada');
    newList.append('Keely noodle bear');
    let result = newList.kFromEnd('hi');
    expect(result).toBeFalsy();
  });

});