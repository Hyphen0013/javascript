// creating factory function which is responsible for exposing our API for creating new instance of these items
let Laptop = require('./laptop.js');
let Tablet = require('./tablet.js');

let gadgets = { Laptop, Tablet } // destructuring

module.exports = {
	createGadget (type, attributes) {
		const GadgetType = gadgets[type];

		return new GadgetType(attributes); // when we call function with new keywords in js we get return an empty object with a this binding set to the one in executing function.
	}
}


