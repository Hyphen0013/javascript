/**
 * QUEUE (FIFO)
 * 1. enqueue :- enter the element at the end O(1)
 * 2. dequeue :- remove the front element
 * 3. front :- get the first element
 * 4. isEmpty :- check queue
 * 5. size :- get size
 *
 * --> Random access O(n)
 * --> Access last O(1)
 * --> Find O(n)
 * --> Random removal O(n)
 * --> Remove last O(1)
 */

function Queue() {
	let collection = [];

	this.print = function() {
		return this.collection;
	}

	this.enqueue = function(value) {
		let result = collection.push(value);
		return result;
	}

	this.dequeue = function(value) {
		let result = collection.shift();
		return result;
	}

	this.front = function() {
		let result = collection[0];
		return result;
	}

	this.isEmpty = function() {
		let result = collection.length === 0 ? true : false;
		return result;
	}

	this.size = function() {
		let result = collection.length;
		return result;
	}
}