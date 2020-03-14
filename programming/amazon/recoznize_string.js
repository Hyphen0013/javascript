function recognizeString(str) {

    let splitStr = str.split('');

    let hash = {};
    let counter;

    for(let i = 0; i < str.length; i++) {
    	let c = str[i];

    	if(hash[c]) {
    		hash[c]++
    	} else {
    		hash[c] = 1;
    	}
    }

    console.log(Object.keys(hash))
    console.log(Object.values(hash))

    return hash
}

console.log(recognizeString('aab')) // if aab -> aba, if aaab -> " "