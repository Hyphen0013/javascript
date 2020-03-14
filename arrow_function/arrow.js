// uses of array function
const test = {
	name: 'test object',
	createAnonFun: function () {
		return function () {

			console.log(this.name);
			console.log(arguments);
		}
	},

	createArrowFun: function () {
		return () => {
			console.log(this.name);
			console.log(arguments);
		}
	}
}


const anon = new test.createAnonFun('hello', 'world');
const arrow = new test.createArrowFun('hello', 'world');

anon();
console.log('\n ****************************** \n');

arrow();


// transform array of values
let arrayOfValues = ['one', 'TWO', 'three', 'four', 'five'];
let arryaLower = arrayOfValues.map(word => word.toLowerCase());
console.log(arryaLower);

// pull out a value from object
const names = objects.map(object => object.name);

// user in forEach loop
this.example.forEach((example) => {
	this.runExample(example);
});


