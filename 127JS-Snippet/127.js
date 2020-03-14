// 1. all
const all = (arr, fn = Boolean) => {
	let a = arr.every(fn)
	console.log(a);
};
all([0, 0]) // false
all([1, 3, 5, 1], x => x >  1); // false
all([1, 3, 5, 1]); // true

// 2. allEqual => check array
const allEqual = ((arr) => 
	arr.every((val) => val === arr[0])
);

console.log(allEqual([1, 2, 3, 4, 5, 6]));  // false
console.log(allEqual([1, 1, 1, 1]));  // false

// 3. approximatelyEqual
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;
console.log(approximatelyEqual(Math.PI / 2.0, 0.02));

// 4. arrayToCSV => this snippets converts the elements that don't have commas or double quotes to string with comma-seprated values.
const arrayToCSV = (arr, delimiter = ',') => arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
console.log(arrayToCSV([['a', 'b'], ["d", 'e']]))

// 5. arrayToHtmlList
/*const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#listID')),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
arrayToHtmlList(['item 1', 'item 2']);*/

// 6. bifurcate => This snippet splits values into two groups and then puts a truthy element of filter in the first group, and in the second group otherwise.
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

let bifurcates = bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
console.log(bifurcates);

// 11. bottomVisible => This snippet checks whether the bottom of a page is visible.
/*
	const bottomVisible = () =>
	document.documentElement.clientHeight + window.scrollY >=
	(document.documentElement.scrollHeight || document.documentElement.clientHeight);

	console.log(bottomVisible()); // true*/

// 12. byteSize => This snippet returns the length of a string in bytes.

const byteSize = str => new Blob([str]).size;
byteSize('hello')




