// 1. Reverse a string

function reverseString(string) {
	let output, output2, rev = '', arr = [], rev2 = '';

	// method 1
	output = [...string].reverse().join('');

	// method 2
	output2 = string.split('').reverse().join('')

	// method 3
	for(let i = 0; i < string.length; i++) {
		arr.push(string[i]);
	}

	console.log(arr)

	for(let i = 0; i < string.length; i++) {
		rev += arr.pop(arr[i]);
	}


	// method 4
	for(let i = string.length - 1; i >= 0; i--) {
		rev2 += string[i]
	}

	console.log(rev2)
}

reverseString('hyphen')
