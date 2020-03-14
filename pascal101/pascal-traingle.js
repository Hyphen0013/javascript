function generate (num) {
	let triangle = [[1], [1,1]];
	
	// let arr = []
	if(num === 0) {
		console.log([])
	} else if(num === 1) {
		console.log([[1]]);
	} else if(num === 2) {
		console.log([[1], [1, 1]]);
	} else {
		for(let i = 2; i < num; i++) {
			addRow(triangle);
		}
	}

	 // console.log(triangle);
	 return triangle;
};

var addRow = function(triangle) {
	let previous = triangle[triangle.length - 1];
	let newRow = [1];

	for(let i = 0; i < previous.length - 1; i++) {
		let current = previous[i];
		let next = previous[i + 1];
		newRow.push(current + next);
	}
	newRow.push(1);
	return triangle.push(newRow)
}

generate(5);