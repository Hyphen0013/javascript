// turn array into list of argument
function sandwich (a, b, c) { // variadic function which have multiple argument passed
	console.log(a);
	console.log(b);
	console.log(c);
}

// this is old method to pass the array in function
const food = ["oneFood", "secondFood", "thirdFood"];
sandwich.apply(this.sandwich, food); // .apply have take two argument 1. this 2. set of array


// ES6 way
sandwich( ...food) // spread operator


console.log('\nsecond example in Math: ')
const numbers = [1, 4, 9, 2, 7, 3];
console.log(Math.max(...numbers));

console.log('\nPassing multiple argumenta as array: ')
const two = [4, 5, 7, 0];
console.log(...two, ...numbers);


