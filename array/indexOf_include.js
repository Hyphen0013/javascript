'use strict';

// indexOf and includes
const characterSet = [
	'hulk',
	'ironman',
	'captain America',
	'batman',
	'spiderman'
]

console.log(characterSet.indexOf('ironman')); // indexOf give only 1 and -1
console.log(characterSet.indexOf('ironhead'));
console.log(characterSet.includes('ironhead')); // includes give boolean values
console.log(characterSet.includes('ironman'));


// filter and find
const characters = [
  { id: 1, name: 'ironman' },
  { id: 2, name: 'black_widow' },
  { id: 3, name: 'captain_america' },
  { id: 4, name: 'captain_america' },
];

function getCharacters(name) {
	return character => character.name === name;
}

console.log('\nfind: ')
console.log(characters.find(getCharacters('captain_america'))); // find give the exact values
console.log('\nsome: ')
console.log(characters.some(getCharacters('captain_america'))); // some give the boolean values

console.log('\nfilters: ');
console.log(characters.filter(getCharacters('captain_america')));

// reduce, map, filter
const charactersEnv = [
  { name: 'ironman', env: 'marvel' },
  { name: 'black_widow', env: 'marvel' },
  { name: 'wonder_woman', env: 'dc_comics' },
];

console.log('\nFilter');
console.log(
	charactersEnv
		.filter(character => character.env === 'marvel')

	)