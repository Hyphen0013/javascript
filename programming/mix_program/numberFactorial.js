// method 1
function numberFact(num) {
	if(num < 0) {
		return 'It\'s a Negative number';
	}

	if(num > 1) {
		return num * numberFact(num - 1)
	} else {
		return 1;
	}
}

// method 2
function factorial(n) {
  // return (n != 1) ? n * factorial(n - 1) : 1;
  	if(n > 1) {
		return n * factorial(n - 1)
	} else {
		return 1
	}
}


// method 3
let fact = (number) => {
	return number < 0 ? (() => {
		return"It's a negative number"
	})() : number > 1 ?  number * fact(number - 1) :  1;
 }

console.log(fact(-1))
