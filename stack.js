// ## Stack

// Write a constructor function called Stack with no arguments. It should initialize two attributes:

// * `head` with `null`
// * `size` with `0`

// The methods that you will implement are:

// * push
// * pop
// * size

// ```javascript
// var stack = new Stack();
// stack.push(5);
// stack.push(8);
// stack.pop(); // 8
// stack.pop(); // 5
// stack.pop(); // null
// stack.size(); // 


// ```

class Stack{
	constructor(){
		this.stack = [];
		this.head = null;
	};

	size(){
		return this.stack.length;
	};

	push(item){
		this.stack.push(item);
		this.head = this.stack[this.stack.length - 1];

		return this.stack;
	};

	pop(){
		if(this.stack.isEmpty){
			return undefined;
		}

		this.stack.pop();
		this.head = this.stack[this.stack.length - 1];

		return this.stack;
	};
};


var stack = new Stack();
stack.push(5);
stack.push(8);
console.log(stack);
console.log(stack.pop()); // 8
console.log(stack.pop()); // 5
console.log(stack.pop()); // null
console.log(stack.size()); // 0