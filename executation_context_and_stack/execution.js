let helllo = 'hello world';

function first() {
	console.log('execution 1 context in first function');
	second();
	console.log('execution 2 context in first function');
}

function second() {
	console.log('execution context in second function');
}

first();
console.log('global execution context');