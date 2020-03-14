/**
 * STACK // LIFO
 * 1. push :- input a new element O(1)
 * 2. pop :- remove the top element O(1)
 * 3. peek :- return the top element O(1)
 * 4. length :- size
 *
 * --> Random removal = O(n);
 * --> Find = O(n);
 */
function Stack() {
	this.count = 0;
	this.storage = {};

	this.push = function (value) {
		this.storage[this.count] = value;
		this.count++;
		console.log(this.storage);
		return this.storage;
	}

	this.pop = function() {
		if(this.count === 0) {
			console.log('undefined');
			return undefined;
		}

		this.count--;
		let popResult = this.storage[this.count];
		delete this.storage[this.count];
		console.log(popResult);
		return popResult;
	}

	this.peek = function() {
		let peekResult = this.storage[this.count - 1];
		console.log(peekResult);
		return peekResult;
	}

	this.size = function() {
		let lengthResult = this.count;
		return lengthResult;
	}
}

let stack = new Stack();
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.size();