const myFavouriteAuthors = [
    'Neal Stephenson',
    'Arthur Clarke',
    'Isacc Asimov',
    'Robert Heinlein'
]

// Iterate by for loop
console.log('___________________________ FOR LOOP ___________________________________');
for (let i = 0; i < myFavouriteAuthors.length; i++) {
    console.log(myFavouriteAuthors[i]);
}

// Iterate by while loop
console.log('___________________________ While Loop ___________________________________');
let i = 0;
while(i < myFavouriteAuthors.length) {
    console.log(myFavouriteAuthors[i]);
    i++
}

// Iterate by for-of loop
console.log('___________________________ FOR-OF LOOP ___________________________________');
for (const value of myFavouriteAuthors) {
    console.log(value);
}


// Custom data structures to hold value
console.log('___________________________ Custom Object ___________________________________');
const myFavouriteAuthorsCustom = { // object
    allAuthors: { // object
        fiction: [ // array
            'Agatha Christie',
            'J.K. Rowling',
            'Dr. Seuss'
        ],
 
        scienceFiction: [ // array
            'Neal Stephenson',
            'Arthur Clarke',
            'Robert Heinlein'
        ],

        fantasy: [ // array
            'J. R. R. Tolkien',
            'J. k. Rowling',
            'Terry Pratchett'
        ]
    }
}

function callAuthors () {
    try {
        for (let author of myFavouriteAuthorsCustom) {
            console.log(author); // give error it is not iterable
        }
    } catch (e) {
        console.log('Error msg: ' + e)
    }

}
callAuthors()

// Iteratre over custom object by for-of loop
console.log('\n___________________________ Custom_Object_FOR-OF LOOP ___________________________________');
const authors = [];
const myFavouriteAuthorsCustomIterate = { 
    allAuthors: { 

        fiction: [ 
            'Agatha Christie',
            'J.K. Rowling',
            'Dr. Seuss'
        ],
 
        scienceFiction: [ 
            'Neal Stephenson',
            'Arthur Clarke',
            'Robert Heinlein'
        ],

        fantasy: [ 
            'J. R. R. Tolkien',
            'J. k. Rowling',
            'Terry Pratchett'
        ]
    },

/* 
    There is some issue with that method
    1. if someone want to change method name they can
    2. all value return in form of array of string

*/
    getAllAuthors () { // one way to get all custom object data
        
        for (const author of this.allAuthors.fiction) {
            authors.push(author);
        }

        for (const author of this.allAuthors.scienceFiction) {
            authors.push(author);
        }

        for (const author of this.allAuthors.fantasy) {
            authors.push(author);
        }

       return authors
    }
}


console.log(myFavouriteAuthorsCustomIterate.getAllAuthors());

/* function callAuthorsCustom () { // second way to get all object from custom object
    const authors = [];
    let aut = myFavouriteAuthorsCustomIterate

    for (const author of aut.allAuthors.fiction) {
        authors.push(author);
    }

    for (const author of aut.allAuthors.scienceFiction) {
        authors.push(author);
    }

    for (const author of aut.allAuthors.fantasy) {
        authors.push(author);
    }

    console.log(authors)
}
callAuthorsCustom() */

console.log('\n____________ Custom_Object_FOR-OF LOOP with fix method and return type ________');


/* 
    What if Developer want to get data in "array of object"
    1. we fix the name of method and return the type of method is fixed

    // An iterable is a data structure that wants to make its elements accessible to the public.
    it is done by method whose key is " Symbol.iterator "
    // An iterator is pointer for traversing the elements of a data structure


*/
// Making objects iterable
const iterable = {
    [Symbol.iterator] () {
        let step = 0;
        const iterator = {
            next () {
                step++;

                if (step === 1) {
                    return { value: 'This', done: false };
                } else if (step === 2) {
                    return { value: 'is', done: false };
                } else if (step === 3 ) {
                    return { value: 'iterable', done: false};
                }

                return { value: undefined, done: true};
            }
        };

        return iterator;
    }
};

var iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/* These are all iterables
    1. Arrays and TypedArrays
    2. Strings
    3. Maps
    4. Sets
    5. arguments
    6. DOM elements
    7. for-of loop
    8. Destructuring of Array
    9. Spread operator
    10. Promise.all and Promise.race
*/