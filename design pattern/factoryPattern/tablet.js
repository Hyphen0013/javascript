// this is constructor function
const Tablet = function ({ ram, hdd, network, name }) { // Object as a parameters
	this.ram = ram || 0;
	this.hdd = hdd || 0;
	this.network = network || 0;
	this.name = name || "";
}

module.exports = Tablet; // exporting module