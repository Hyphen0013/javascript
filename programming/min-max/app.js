// mix-max in an array
let arr = [1, 2, 3, 4, 5];


function minMaxSum(arr) {
	let totals = [];

	const reducer = (accumulator, currentValue) => {
		return accumulator + currentValue
	}

	for(let i = 0; i < arr.length; i++) {
		let filtered = arr.filter(function(value, index, arr) {
			return i !== index;
		});

		totals.push(filtered.reduce(reducer));
	}



	 console.log("Max Number: " + Math.max(...totals));
	 console.log("Min Number: " + Math.min(...totals));
}

minMaxSum(arr)
console.log(...arr)

