// ## Queue

// Write a constructor function called `Queue` with no arguments. It should initialize three attributes:

// * `head` with `null`
// * `tail` with `null`
// * `size` with `0`

// The methods that you will implement are:

// * enqueue
// * dequeue
// * size

// ```javascript
// var queue = new Queue();
// queue.enqueue(4);
// queue.dequeue(); // returns the first element of the queue
// queue.size(); // returns the size of the queue

class Queue{
	constructor(){
		this.queue = [];
		this.head = null;
		this.tail = null;
	};

	size(){
		return this.queue.length;
	};

	enqueue(item){
		this.queue.push(item);
		this.tail = item;
		this.head = this.queue[0];

		return this.queue;
	};

	dequeue(){
		if(this.queue.isEmpty){
			return undefined;
		}

		this.queue.shift();
		this.head = this.queue[0];
		this.tail = this.queue[this.queue.length - 1];

		return this.queue;
	};
};

var queue = new Queue;
console.log(queue);
queue.enqueue(4);
console.log(queue);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue);