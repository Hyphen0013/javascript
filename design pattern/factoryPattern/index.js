const gadgetFactory = require('./gadgetFactory.js');

const myLaptop = gadgetFactory.createGadget("Laptop", {
	ram: 8, 
	hdd: '1TB',
	name: 'HP',
});

const myTablet = gadgetFactory.createGadget("Tablet", {
	ram: 4,
	hdd: 64 + 'GB',
	network: '4G LTE',
	name: 'Moto G4+'
});

console.log(myLaptop);
console.log(myTablet);