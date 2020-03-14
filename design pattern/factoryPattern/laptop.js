// this is constructor function
const Laptop = function({ ram, hdd, name}) { // Object as a parameters
	this.ram = ram || 0;
	this.hdd = hdd || 0;
	this.name = name || "";
}

module.exports = Laptop; // exporting module