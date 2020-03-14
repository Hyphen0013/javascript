// convert array of number to digits
// Method 1
let arrayToDigits1 = (num) => {
	var arr = num.toString().split('');
	for(i=0;i<arr.length;i++) {
		arr[i] = parseInt(arr[i])
	}
	console.log(arr)
}
arrayToDigits1(4567788)

// Method 2
let arrayToDigits2 = (num) => {
	let output = Array.from(String(num), Number);
	console.log(output)
}

arrayToDigits2(4567788)
