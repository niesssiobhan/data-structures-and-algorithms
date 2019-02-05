## HashTables

### Author: Siobhan Niess

### Links and Resources
* [repo](https://github.com/niesssiobhan/data-structures-and-algorithms/tree/master/code-challenges/hashTable)
* [travis](https://www.travis-ci.com/niesssiobhan/data-structures-and-algorithms)

### Modules
#### `hashtable.js`
##### Challenge
* A method/function named add that takes in both the key and value. This method should hash the key and add the key and value pair to the table.
* A method/function named Find that takes in the key and returns the value from key/value pair.
* A method/function named contains that takes in the key and returns if the key exists in the table already.
* A method/function named GetHash that takes in a key and returns the index in the array the key is stored.
#### `reapeated-word.js`
##### Challenge 
* Write a function that accepts a lengthy string parameter.
* Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency
* The Big O for this would be 0(1) since iit will going through a linked list, looping through an array once.
* My approach was to require in the linked list for my hashtable

## API
* `hash(key)` 
  * the key is hashed before it is added to the table
* `add(key, value)` 
  * the key is hashed and then the key value pair is added to the hashtable
* `find(key)`
  *  find takes in a key and then the value from the key value pair is the return 
* `contains(key)`
  * a true or false is retruned is a key can be found or not
* `getHash(key)`
  * the index where the key has been hashed from is what is returned 

#### Tests
* How do you run tests?
npm test
* What assertions were made?
* What assertions need to be / should be made?

#### Collaborators


### To-do list
- [x] Read all of these instructions carefully
- [x] All work in the correct remo
- [x] Work on the correct branch
- [x] Work in the correct folder
- [x] Work in the correct file
- [x] Create the code
- [x] Write at least three test assertions for each method that you define.
- [x] Ensure your tests are passing before you submit your solution.
- [x] Create a pull request from your branch to your master branch
- [x] In your open pull request, leave as a comment a checklist
- [ ] Submitting your completed work to Canvas (soon)
- [ ] Merge your branch into master (soon)

#### Solution
![Whiteboard Image for additional methods for hashtables]()
