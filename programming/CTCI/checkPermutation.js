/**
 * CTCI - 1.2
 * CHECK PRMUTATION
 * Given a two strings, write a method to decide of one is a permutation of the others
 * Input: string
 * Output: boolan
 * Constrain: optimize
 * Edge cases: empty string, different length
 *
 * Time complexity: O(2n) linear
 * Space complexity: O(n) linear
 */

let checkPermutation = (s1, s2) => {
	// if two strings have different length then return false
	// one way, sorth both string and then compare but time complexity - O(nlogn)
	// to optimize, we can make a map of one strings, and check the second string

	let hash = {} // has is like a object bcoz in object all hash is object

	if(s1.length !== s2.length) {
		return false;
	}

	for(let i = 0; i < s1.length; i++) {
		let c = s1[i];

		if(hash[c]) {
			hash[c]++;
		} else {
			hash[c] = 1;
		}
	}

	for(let i = 0; i < s2.length; i++) {
		let c = s2[i];

		if(hash[c] && hash[c] !== 0) {
			hash[c]--;
		} else {
			return false;
		}
	}

	return true;
}

console.log(
	checkPermutation("", ""),
	checkPermutation("so", "os"),
	checkPermutation("sos", "os"),
	checkPermutation("abc", "abz"),
	checkPermutation("baab", "baba"),
)


// https://github.com/ChirpingMermaid/CTCI/