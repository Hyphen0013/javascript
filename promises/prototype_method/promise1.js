let momsPromise = new Promise((resolve, reject) => {
	momsSaving = 200000;
	priceOfPhone = 60000;

	if (momsSaving > priceOfPhone) {
		resolve({
			brand: 'iphone',
			model: '6s'
		});
	} else {
		reject(`We don't have enough money to buy. Lets see for next time.`);
	}
})
.then((value) => {
	// console.log('Hurry I got this phone as a gift.', JSON.stringify(value));
	document.write(`Hurry I got this phone as a gift. <b>${JSON.stringify(value)}</b> </br>`);
})

.catch((reason) => {
	// console.log('Moms coudn"t buy me the reason because. ', reason);
	document.write(`Moms coudn"t buy me the reason because, <b>${reason}</b> </br>`);
})

.finally(() => {
	// console.log("Irrespective of whether my mom can buy me a phone or not, I still love her. ");
	document.write("Irrespective of whether my mom can buy me a phone or not, I still love her. ");
})






