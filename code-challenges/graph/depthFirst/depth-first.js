'use strict';

const graph = require('../graph.js');

const depthFirst = (graph, root) => {
  let stack = new Stack();
  let visited = new Set();
  let current;
  let neighbors;

  stack.push(root);
  visited.add(root);

  while (stack.length > 0) {
      current = stack.pop();
      console.log(current);
      neighbors = graph.neighbors(current);
      for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
              stack.push(neighbor);
              visited.add(neighbor);
          }
      }
  }
  return visited;
}

module.exports = depthFirst;