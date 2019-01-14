'use strict';

const binarySearchTree = require('../binarySearchTree.js')

describe('binary search tree', () => {
  describe('add to the binary search tree', () => {
    it('add a value to the tree', () => {
      let tree = new BinarySearchTree();
      expect(() => {tree.add();}).toThrow('value needed');
    });

    it('will add a value to the right', () => {
      let tree = new BinarySearchTree();
      tree.add(98);
      tree.add(17);
      tree.add(20)
      tree.add(7)

      let arr = tree.preOrder();
      expect(arr).toEqual[]
    });
    it('will add a value to the left', () => {
      let tree = new BinarySearchTree();
      tree.add(98);
      tree.add(17);
      tree.add(20)
      tree.add(7)

      let arr = tree.preOrder();
      expect(arr).toEqual[]
    });
  });

  describe('contained in the binary search tree', () => {
    it('must have a value', () => {
      let tree = new BinarySearchTree();
      expect(() => {tree.conatin();}).toThrow('value is not found');
    });
    it('will return to be false is the value was not found in the tree', () => {
      let tree = new BinarySearchTree();
      tree.add(98);
      tree.add(17);
      tree.add(20)
      tree.add(7)

      expect(tree.contains(19)).toBe(false);
    });
    it('will return to be true if the value was found too bein the tree', () => {
      let tree = new BinarySearchTree();
      tree.add(98);
      tree.add(17);
      tree.add(20)
      tree.add(7)

      expect(tree.contains(17)).toBe(true);
    });

  });
});