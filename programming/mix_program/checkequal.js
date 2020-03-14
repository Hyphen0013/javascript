// Method 1
function checkEqual(array) {
	for(let i = 0; i < array.length; i++) {

		if(array[0] === array[i]) {
			console.log(true);
		} else {
			console.log(false)
		};
	}
}

// checkEqual([4, 4, 4, 45, 4])

// Method 2
const checkEqual2 = array => array.every(el => el === array[0])

checkEqual2([4, 5, 4, 4, 4]) // false
