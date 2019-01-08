'use strict';

const animalShelter = require('../fifo-animal-shelter.js');

describe('AnimalShelter', () => {
  it('creates and instance', () => {
    let animalShelterQueue = new AnimalShelter();
    expect(animalShelterQueue instanceof AnimalShelter).toBeTruthy();
  });
  
  describe('enqueue', () => {
    
    it('adds a value to the end of the queue', () => {
      let queue = new AnimalShelter();
      expect(queue instanceof AnimalShelter).toBeThruthy();
    });

    

  });