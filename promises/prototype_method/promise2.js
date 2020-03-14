// generate random method

function getRandomNumber (start = 1, end = 10) {
	return parseInt(Math.random() * end) % (end - start + 1) + start;
	// return parseInt(Math.floor((Math.random() * end)) + 1);
}


let promiseT = (promiseCreteAfter = () => {
	return new Promise((resolve, reject) => {
		let randomNumSec = getRandomNumber(2, 10);

		setTimeout(() => {
			let randomResolve = getRandomNumber(1, 10);

			if (randomResolve > 5) {
				resolve({
					randomNumSec: randomNumSec,
					randomResolve: randomResolve
				});
			} else {
				reject({
					randomNumSec: randomNumSec,
					randomResolve: randomResolve
				});
			}
		}, randomNumSec * 1000);
	});

});

console.time()

promiseT()
	.then((value) => {
	// console.log(`Value when promise is resolved. ${value}` );
	document.write(`Value when promise is resolved:= . <b>${JSON.stringify(value)} </b> </br>` );
})
	.catch((reason) => {
	// console.log(`Reason when promise is reject. ${reason}`);
	document.write(`Reason when promise is reject:=. <b> ${JSON.stringify(reason)} </b> </br>`);
});
// console.timeEnd('for parseT end')



// loop all promise and check them
for (var i = 1; i <= 10; i++) {
	promiseT()
		.then((value) => {
		// console.log(`Value when promise is resolved: ${value}`);
		document.write(`Value when promise is resolved: <b> ${JSON.stringify(value)} <b/> </br>`);
	})
		.catch((reason) => {
		// console.log(`Reason whem promise is reject: ${reason}`);
		document.write(`Reason whem promise is reject: <b>${JSON.stringify(reason)}</b></br>`);
	});
}



