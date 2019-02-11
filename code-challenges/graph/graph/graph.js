'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Graph {
  constructor() {
    this.adjList = new Map();
    this.size = 0;
  }

  AddNode(value) {
    let node = new Node(value);
    this._adjacencyList.set(node,[]);
    this.size++;
    return node;
  }

  AddEdge() {
    if(!this._adjacencyList.has(startNode) || !this._adjacencyList.has(endNode))
      throw new Error('__ERROR__ invalid nodes');

    let adjacencies = this._adjacencyList.get(startNode);
    adjacencies.push({
      node:endNode,
      weight,
    });
  return adjacencies;
}

  GetNodes() {
    if(this.size !== 0){
      return this._adjacencyList.keys();
    }
  }

  GetNeighbors() {
    if(!this.adjacencyList.has(node)){
      return null;
    }
    else{
      return this.adjacencyList.get(node);
    }
  }

  Size() {
    return this.size;
  }
}

module.exports = {Node,Graph};