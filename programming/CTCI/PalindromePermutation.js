/**
 * CTCI - 1.4
 * Palindrome Permutation
 *
 * Given a string, write a function to check if it is a permutation of a opalindrome
 * A palindrome is a word or phrase that is the same forward and backword
 * A permutation is a rearrangement of letter
 * The palindrome does not need to be limited to just  dictonaries word.
 *
 * Example
 * Input: tact coa
 * Output: True (Permutation: 'taco cat :- atco cat, etc,')
 *
 * I: String
 * O: Boolean
 * C: Optimize
 * E: Empty string, spaces between and in front and at end, more than 2 of the same char, even and odd chars
 *
 * 
 */

let palinPermu = (s) => {
	// if the string is even then there must be two of every char
	// if Odd: there must be only one unique char
	// use hash table to store letter
	// if we see the same letter again delete from table
	// check hash at the end : odd - 1 key left, even - no keys left
	// skip spaces

	let hash = {};
	let counter = 0;

	for (let i = 0; i < s.length; i++) {
		let c = s[i];

		if(c === ' ') {
			continue;
		}

		if(hash[c]) {
			delete hash[c];
		} else {
			hash[c] = true;
		}

		counter++;
	}


	if(counter % 2 === 0) {
		return Object.keys(hash).length === 0;
	} else {
		return Object.keys(hash).length === 1;
	}

}

console.log(
	palinPermu('taatc')
);