'use strict';

const graph = require('../graph.js');

const breadthSearch = (node) => {

  let breadth = [];
    let result = [];
    breadth.push(node);

    while(breadth.length){

      let cur = breadth.pop();

      if(!cur.touched) {result.push(cur);}
      cur.touched = true;
      
      let neighbors = this.getNeighbors(cur);

      if(neighbors.length){
        for (let i = 0; i<neighbors.length; i++){
          breadth.push(neighbors[i]);
        }
      }   
    }
    return result;  
}

module.exports = breadthSearch;