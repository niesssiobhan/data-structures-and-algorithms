'use strict';

const graph = require('../graph.js');
const breadthFirst = require('../breadth-first.js');

const getEdge = (array, graph) => {
  let nodes = graph.getNodes();
  let current;
  let cost = 0;
  
  let firstNode = false;
  for(let node of nodes.keys()){
    if(node.value === array[0]){
      current = node;
      firstNode = true;
    }
  }
  if(!firstNode) {
    return false; 
  }
  
  for(let i = 1; i < array.length; i++){
    let neighbors = graph.getNeighbors(current);
    let nextNode = path[i];
    let foundNode = false;

    for(let neighbor of neighbors.keys()) {
      if(neighbor.value === nextNode){
        current = neighbor;
        cost += neighbors.get(neighbor);
        foundNode = true;
      }
    }
    if(!foundNode) { 
      return false; 
    }
  }
  return cost;
}


let myGraph = new Graph();
let arendelle = myGraph.AddNode('arendelle');
let metroville = myGraph.AddNode('metroville');
let monstropolis = myGraph.AddNode('monstropolis');
let naboo = myGraph.AddNode('naboo');
let narnia = myGraph.AddNode('narnia');
let pandora = myGraph.AddNode('pandora');

myGraph.AddEdge(narnia, naboo, 250);
myGraph.AddEdge(pandora, arendelle, 150);
myGraph.AddEdge(metroville, monstropolis, 105);
myGraph.AddEdge(metroville, arendelle, 99);
myGraph.AddEdge(pandora, metroville, 82);
myGraph.AddEdge(naboo, monstropolis, 73);
myGraph.AddEdge(arendelle, monstropolis, 42);
myGraph.AddEdge(narnia, metroville, 37);
myGraph.AddEdge(metroville, naboo, 26);

module.exports = getEdge;