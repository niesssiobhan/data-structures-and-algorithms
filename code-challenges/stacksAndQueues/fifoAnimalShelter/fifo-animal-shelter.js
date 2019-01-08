'use strict';

class AnaimlaShelter{
  constructor(){
    this.dog = new Queue();
    this.cat = new Queue();
  }
    enqueue(animal){
      if(animal === "dog"){
        this.dog.enqueue(animal);
      } else if(animal === "cat"){
        this.cat.enqueue(animal);
      }
    }
   dequeue(pref) {
    if(pref === "cat"){
      return this.cat.dequeue();
    } else if(pref === "dog"){
      return this.dog.dequeue();
    } else {
      return null;
    }
  }
}

let shelter = new AnimalShelter();