function isPrime(n) {
	let s = Math.sqrt(n),
		i;

	for ( i = 2; i <= s; i++) {
		if (n % i === 0) return false;
	}
		return n > 1;
}


function nthPrime(n) {
	let counter = n;
	let iterator = 2;
	let result = [];

	while (counter > 0) {
		isPrime(iterator) && result.push(iterator) && counter--;
		iterator++;
	}

	return result;	
}

module.exports = { isPrime, nthPrime};




