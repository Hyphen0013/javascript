/**
 * CTCI - 1.1
 * IS UNIQUE
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 *
 * I: string
 * O: boolean
 * C: no additional data structures, optimize
 * E: empty string
 *
 * Time complexity :- O(n)
 * Space complexity :- O(n)
 */

// function to check unique

let isUnique = (s) => {
	// check earch character and store in a hash table
	// if we find character in hash then return false
	// otherwise return true

	let hashTable = {};

	// loop through string;
	for(let i = 0; i < s.length; i++) {
		let c = s[i];
		if(hashTable[c]) {
			return false;
		} else {
			hashTable[c] = true;
		}
	}

	return true;
}

// differebt test cases
console.log(isUnique('s'));
console.log(isUnique(''));
console.log(isUnique('ss'));
console.log(isUnique('stories'));
console.log(isUnique('rrr'));
