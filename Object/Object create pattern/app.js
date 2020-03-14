/**
 * Object Creation in JavaScript
 * 1. Factory pattern
 * 2. Constructor pattern
 * 3. Prototype pattern
 * 4. Dynamic prototype pattern
 */


/**
 * Factory pattern
 */
let computerFactory = function(ram, hardDisk) {
	let computer = {}; // creating a new temprory object

	// create class properties
	computer.ram = ram;
	computer.hardDisk = hardDisk;

	// create class methods
	computer.AvailableMemory = function() {
		console.log('Factory pattern Hard-disk : ' , this.hardDisk);
		console.log('Factory pattern Ram : ' , this.ram);
	}

	return computer

}


// create an object by calling the factory 
// creating new object for computer class by using computerFactory
let computer1 = computerFactory(4, 444);
let computer2 = computerFactory(18, 445);

// Accessing class methods using objects
computer1.AvailableMemory();
computer2.AvailableMemory();


/**
 * Constructor pattern
 */
var computer = function(ram, hardDisk) {
  //Create class properties
  this.ram = ram;
  this.hardDisk = hardDisk;
  //Create class methods
  this.AvailableMemory = function() {
    console.log('Constructor pattern Hard-disk : ' + this.hardDisk);
    console.log('Constructor pattern Ram : ' + this.ram);
  };
};

//Creating new object(s) for computer class by using constructor pattern
var computer3 = new computer(5,512);
var computer4 = new computer(17,1024);
//Accessing object's properties
computer3.AvailableMemory();
computer4.AvailableMemory();


/**
 * Prototype pattern
 */
 var computerProtoype = function() {};
 computerProtoype.prototype.ram = NaN;
 computerProtoype.prototype.harddisk = NaN;

 computerProtoype.prototype.availablememory = function() {
 	console.log('Prototype pattern hard-disk : ' + this.harddisk);
 	console.log('Prototype pattern ram : ' + this.ram);
 };
//creating new object(s) for computer class
// by using prototype pattern
var computer6 = new computerProtoype(); 

//empty object created with default values
computer6.ram = 4; //assigning the actual value for object property
computer6.harddisk = 512;

var computer7 = new computerProtoype();
computer7.ram = 16;
computer7.harddisk = 1024;

//accessing class methods using objects
computer6.availablememory();
computer7.availablememory();

/**
 * NOTE
 * This is because the in operator searches for the property first in the object's root 
 * and then the search continues in the prototype of the object whereas hasOwnProperty 
 * restricts its search to the root elements of the object in which the property is being searched.
 */


 /**
 * Dynamic pattern
 */
var computerDynamic = function(ram, harddisk) {
	this.ram = ram;
	this.harddisk = harddisk;

	if(typeof this.AvailableMemory !== 'function') {
		computerDynamic.prototype.AvailableMemory = function() {
			console.log('Dynamic Hard-disk: ' + this.harddisk);	
			console.log('Dynamic Ram: ' + this.ram);	
		}
	}

};

var computer8 = new computerDynamic(9, 222222);
computer8.AvailableMemory();


