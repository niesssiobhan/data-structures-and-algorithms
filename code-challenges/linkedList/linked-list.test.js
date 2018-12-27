'use strict';

const list = require('./linked-list.js');

describe('includes method', () => {
  it('The return will be true if the value is found in list', () => {
    let newList = new list.LinkedList();
    newList.insert('Teagan snuggle muffin');
    newList.insert('Jared aka Dada');
    newList.insert('Keely noodle bear');
    newList.insert('Buba Boone');
    expect(newList.includes('Jared aka Dada')).toBeTruthy();
  });

  it('The return will be false if the value is found in list', () => {
    let newList = new list.LinkedList();
    newList.insert('Teagan snuggle muffin');
    newList.insert('Jared aka Dada');
    newList.insert('Keely noodle bear');
    newList.insert('Buba Boone');
    expect(newList.includes('Jared aka Mama')).toBeFalsy();
  });

  it('The return will be true if there are multiple correct values that are put into the method', () => {
    let newList = new list.LinkedList();
    newList.insert('Teagan snuggle muffin');
    newList.insert('Jared aka Dada');
    newList.insert('Keely noodle bear');
    newList.insert('Buba Boone');
    expect(newList.includes('Teagan snuggle muffin', 'Keely noodle bear')).toBeTruthy();
  });

  it('The return will be falsy if there are one or more correct values and incorrect values that are put into the method', () => {
    let newList = new list.LinkedList();
    newList.insert('Teagan snuggle muffin');
    newList.insert('Jared aka Dada');
    newList.insert('Keely noodle bear');
    newList.insert('Buba Boone');
    expect(newList.includes('Jared aka Mama', 'Buba Boone')).toBeFalsy();
  });

});

describe('insert method', () => {
  it('This will add a new Node to the list after a value is given', () => {
    let newList = new list.LinkedList();
    newList.insert('Teagan snuggle muffin');
    expect(newList).toEqual({'head': {'next': null, 'value': 'Teagan snuggle muffin'}});
  });

  it('This will add an empty Node to the list if there is no value that is given', () => {
    let newList = new list.LinkedList();
    newList.insert();
    expect(newList).toEqual({'head': {'next': null, 'value': undefined}});
  });
  
  it('This will add multiple Nodes to the list if multiple Nodes are given', () => {
    let newList = new list.LinkedList();
    newList.insert('Teagan snuggle muffin');
    newList.insert('Buba Boone');
    expect(newList).toEqual({'head': {'next': {'next': null, 'value': 'Buba Boone'}, 'value': 'Teagan snuggle muffin'}});
  });
});

describe('print method', () => {
  it('This is going to print all of the linked list', () => {
    let newList = new list.LinkedList();
    newList.insert('Teagan snuggle muffin');
    newList.insert('Jared aka Dada');
    newList.insert('Keely noodle bear');
    newList.insert('Buba Boone');
    expect(newList.print()).toEqual(['Teagan snuggle muffin', 'Jared aka Dada', 'Keely noodle bear', 'Buba Boone']);
  });

  it('This is going to return an empty list if there has been no values that have been entered', () => {
    let newEmpty = new list.LinkedList();
    expect(newEmpty.print()).toEqual([]);
  });

  it('This is going to return falsy if an array has been entered into the list', () => {
    let newList = new list.LinkedList();
    let result = newList.insert([7, 17, 98, 19]);
    expect(result).toBeFalsy();
  });
});