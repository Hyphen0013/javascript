// check largest number in an array

let arr = [1, 4, 4, 4, 3];

function minMax(arr) {
	let maxnum = Math.max(...arr);
	let filternum = [];
	let filtered = arr.filter((value, index, arr) => {
		// return filternum.push(value === maxnum);
		return value === maxnum;
	}); 

	filternum.push(filtered);
	console.log(filternum);
}

minMax(arr);

