// ## Linked List

// Note: For this exercise you will need the constructor function Node:

// ```javascript
// function Node(val, ref) {
//   this.val = val;
//   this.ref = ref;
// }
// ```

// Write a constructor function LinkedList that doesn't receives any argument but it initializes an attribute head with the value null.
// Add a method `add` that receives a value creates a Node with the specified value. If head is null assign the new node to head. Otherwise 
// you have to iterate through all the references until you find the last one (the one without reference). Assign the new node to the ref of that
//  node.

// Add a method `addAt` that receives a position and a value. It creates a Node with the specified value and iterates through the nodes until 
// it finds the correct position. Set the ref of the new node to the ref of the current node. Then update the ref of the current node to the
//  new node.

// Add a method `valueAt` that receives a position and returns the value at the specified position. you will have to iterate through the 
// nodes until you find the correct position.

// Add a method `removeAt` that receives a position and removes the node at that position (you will have tu update the ref of the previous
//      node with the ref of the node you are removing).

// ```javascript
// const list = new LinkedList();
// list.add('a');
// list.add('b');
// list.add('d');
// list.addAt(2, 'c');

// list.valueAt(0); // 'a'

// list.removeAt(0);
// ```
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if(this.head === null) {
      this.head = node;
      return node;
    }
    let currentNode = this.head;
    while(currentNode.ref) {
      currentNode = currentNode.ref;
    }
    currentNode.ref = node;
    return node;
  }
  addAt(position, value) {
    const node = new Node(value);
    let currentNode = this.head;
    for(let i = 1; i < position; i++) {
      currentNode = currentNode.ref;
    }
    node.ref = currentNode.ref
    currentNode.ref = node;
    return node;
  }
  valueAt(position) {
    let currentNode = this.head;
    for(let i = 1; i < position; i++) {
      currentNode = currentNode.ref;
    }
    return currentNode.value;
  }
  removeAt(position) {
    let currentNode = this.head;
    if(position === 0) {
      this.head = currentNode.ref;
    }
    for(let i = 0; i < position; i++) {
      let previousNode = currentNode;
      currentNode = currentNode.ref;
      previousNode.ref = currentNode.ref;
    }
    return currentNode.value;
  }
}
const list = new LinkedList();
console.log(list.add('a'));
console.log(list.add('b'));
console.log(list.add('d'));
console.log(list.addAt(2, 'c'));
console.log(list.valueAt(0)); // 'a'
console.log(list.removeAt(0));
console.log(list.head);