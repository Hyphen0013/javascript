
let shoppingCart = [
  { productTitle: "Functional Programming", type: "books", amount: 10 },
  { productTitle: "Kindle", type: "eletronics", amount: 30 },
  { productTitle: "Shoes", type: "fashion", amount: 20 },
  { productTitle: "Clean Code", type: "books", amount: 60 }
]

	const mybooks = ((order) => {
		return order.type == "books";
	});

	const getAmount = ((order) => {
		return order.amount;
	});

	const sumAmount = ((acc, amount) => {
		return acc + amount;
	});

	function getTotalAmount(shoppingCart) {
		return shoppingCart
				.filter(mybooks)
				.map(getAmount)
				.reduce(sumAmount, 0)
	};

	let print = getTotalAmount(shoppingCart);
	console.log(print);


/*
	Creating an instance of a class by calling a constructor function is called instantiating, and JavaScript has four 
	primary instantiation patterns:
	1. Functional Instantiation
	2. Functional-Shared Instantiation
	3. Prototypal Instantiation
	4. Pseudoclassical Instantiation
 */


// 1. Functional Instantiation
console.log("\n1. Functional Instantiation:");

function FunctionalPattern(manufacture, model, year) {
	let object = {};
	object.manufacture = manufacture;
	object.model = model;
	object.year = year;
	object.play = function() {
		console.log("Functional Instantiation: ");
	}

	return object
};

let myFunctional = FunctionalPattern("Hyphen", "A-12", 1919);
console.log(myFunctional) 


// 2. Functional-Shared Instantiation
console.log("\n2. Functional-Shared Instantiation:");
function FunctionalShared(manufacture, model, year) {
	let object = {};
	object.manufacture = manufacture;
	object.model = model;
	object.year = year;
	extend(object, FunctionalShared.methods);

	return object
};

function extend(object, methods) {
	for(let key in methods) {
		object[key] = methods[key];
	}
}
FunctionalShared.methods = {
	'play': function() { console.log('Lets play: '); },
	'shred': function() { console.log('Let\'s shred: '); },
	'hendrix': function() { console.log('Lets hendrix: '); }
}

let myFunctionalShared = FunctionalShared("Rocky", "B-34", 111);
console.log(myFunctionalShared)
console.log(myFunctionalShared.shred());
console.log(myFunctionalShared.toString());




// 3. Prototypal Instantiation
console.log("\n3. Prototypal Instantiation: ");
var instrument = {
  'play': () => console.log("Let's rock!"),
  'practice': () => console.log("Getting better..."),
  'record': () => console.log("Testing... 1, 2, 3.")
}
function PrototypalInstantiation(manufacturer, model, year){
  var object = Object.create(instrument);
  object.manufacturer = manufacturer;
  object.model = model;
  object.year = year;
  return object;
};
var myPrototypalInstantiation = PrototypalInstantiation("Fender", "Stratocaster", 2019);
myPrototypalInstantiation.practice();

// 4. Pseudoclassical Instantiation
console.log("\n4. Pseudoclassical Instantiation:");
function PseudoclassicalInstantiation(manufacturer, model, year) {
	this.manufacturer = manufacturer;
	this.model = model;
	this.year = year;
}

PseudoclassicalInstantiation.prototype.play = () => console.log('Play methods: ');
PseudoclassicalInstantiation.prototype.shred = () => console.log('Shred methods: ');
PseudoclassicalInstantiation.prototype.hendrix = () => console.log('Hendrix methods: ');

let myPseudoclassicalInstantiation = new PseudoclassicalInstantiation("Aditya", "E-55", 2365);
console.log(myPseudoclassicalInstantiation.play());






