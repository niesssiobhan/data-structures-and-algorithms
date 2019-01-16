'use strict';

const tree =  require('../tree/tree.js');

describe('tree', () => {
  describe('preOrder', () => {
    it('will return an array that will have the nodes in preOrder', () => {
      let tree = new BinaryTree();
        let a = new Node('a');
        let b = new Node('b');
        let c = new Node('c');
        let d = new Node('d');
        let e = new Node('e');
        let f = new Node('f');

        a.left = b;
        a.right = c;
        c.left = f;
        b.left = d;
        b.right = e;
        tree.root = a;

        expect(tree.preOrder()).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });

    it('will move to the left of the tree', () => {
      let tree = new BinaryTree();
        let a = new Node('a');
        let b = new Node('b');
        let c = new Node('c');
        let d = new Node('d');
        let e = new Node('e');
        let f = new Node('f');

        a.left = b;
        a.right = c;
        c.left = f;
        b.left = d;
        b.right = e;
        tree.root = a;

        let result = tree.reOrder();
        expect(result[1]).toEqual('');
    });

    it('will move to the right of the tree', () => {
      let tree = new BinaryTree();
        let a = new Node('a');
        let b = new Node('b');
        let c = new Node('c');
        let d = new Node('d');
        let e = new Node('e');
        let f = new Node('f');

        a.left = b;
        a.right = c;
        c.left = f;
        b.left = d;
        b.right = e;
        tree.root = a;

        let result = tree.reOrder();
        expect(result[1]).toEqual('');
    });

    it('if the tree is empty then there will be an error', () => {
      let tree = new BinaryTree();
      expect(() => {tree.preOrder(this.root);}).toThrow('empty tree');
    });
  });

  describe('inOrder', () => {
    it('will return an array that will have the nodes inOrder', () => {
      let a = new Node('a');
        let b = new Node('b');
        let c = new Node('c');
        let d = new Node('d');
        let e = new Node('e');
        let f = new Node('f');

        a.left = b;
        a.right = c;
        c.left = f;
        b.left = d;
        b.right = e;
        tree.root = a

        expect(tree.inOrder()).toEqual([])
    });

    it('will move to the left of the tree', () => {
      let tree = new BinaryTree();
        let a = new Node('a');
        let b = new Node('b');
        let c = new Node('c');
        let d = new Node('d');
        let e = new Node('e');
        let f = new Node('f');

        a.left = b;
        a.right = c;
        c.left = f;
        b.left = d;
        b.right = e;
        tree.root = a;

        let result = tree.inOrder();
        expect(result[1]).toEqual('');
    });

    it('will move to the right of the tree', () => {
      let tree = new BinaryTree();
        let a = new Node('a');
        let b = new Node('b');
        let c = new Node('c');
        let d = new Node('d');
        let e = new Node('e');
        let f = new Node('f');

        a.left = b;
        a.right = c;
        c.left = f;
        b.left = d;
        b.right = e;
        tree.root = a;

        let result = tree.inOrder();
        expect(result[1]).toEqual('');
    });

    it('if the tree is empty then there will be an error', () => {
      let tree = new BinaryTree();
      expect(() => {tree.inOrder(this.root);}).toThrow('empty tree');
    });
  });

  describe('postOrder', () => {
    it('will return an array that will have the nodes postOrder', () => {
      let a = new Node('a');
        let b = new Node('b');
        let c = new Node('c');
        let d = new Node('d');
        let e = new Node('e');
        let f = new Node('f');

        a.left = b;
        a.right = c;
        c.left = f;
        b.left = d;
        b.right = e;
        tree.root = a

        expect(tree.inOrder()).toEqual([])
    });

    it('will move to the left of the tree', () => {
      let tree = new BinaryTree();
        let a = new Node('a');
        let b = new Node('b');
        let c = new Node('c');
        let d = new Node('d');
        let e = new Node('e');
        let f = new Node('f');

        a.left = b;
        a.right = c;
        c.left = f;
        b.left = d;
        b.right = e;
        tree.root = a;

        let result = tree.postOrder();
        expect(result[1]).toEqual('');
    });

    it('will move to the right of the tree', () => {
      let tree = new BinaryTree();
        let a = new Node('a');
        let b = new Node('b');
        let c = new Node('c');
        let d = new Node('d');
        let e = new Node('e');
        let f = new Node('f');

        a.left = b;
        a.right = c;
        c.left = f;
        b.left = d;
        b.right = e;
        tree.root = a;

        let result = tree.postOrder();
        expect(result[1]).toEqual('');
    });

    it('if the tree is empty then there will be an error', () => {
      let tree = new BinaryTree();
      expect(() => {tree.postOrder(this.root);}).toThrow('empty tree');
    });
  });
});