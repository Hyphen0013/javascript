const myFavouriteAuthors = {
    allAuthors: {
      fiction: [
        'Agatha Christie', 
        'J. K. Rowling',
        'Dr. Seuss'
      ],
      scienceFiction: [
        'Neal Stephenson',
        'Arthur Clarke',
        'Isaac Asimov', 
        'Robert Heinlein'
      ],
      fantasy: [
        'J. R. R. Tolkien',
        'J. K. Rowling',
        'Terry Pratchett'
      ]
    },

    [Symbol.iterator]() {
        // get all authors in array
        const genres = Object.values(this.allAuthors);

        // store the current genre and author index
        let currentAuthorIndex = 0;
        let currentGenreIndex = 0;

        return {
            // Implementation of next()
            next() {
                // author according to current genre index
                const authors = genres[currentGenreIndex];

                // doNotHaveMoreAuthors is true when the authors array is executed
                // That i, all items are consumed
                const doNotHaveMoreAuthors = !(currentAuthorIndex < authors.length);
                if (doNotHaveMoreAuthors) {
                    // When that happens we move the genre index to the next genre
                    currentGenreIndex++;

                    // and reset the author index to 0 again to get new set of authors
                    currentAuthorIndex = 0;
                }


                // if all genres are over, then we need tell the iterator that we 
                // can not give more values.

                const doNotHaveMoreGenres = !(currentGenreIndex < authors.length);
                if (doNotHaveMoreGenres) {
                    return {
                        values: undefined,
                        done: true
                    };
                }

                // if everything is correct, return the author from the 
                // current genre and incerement the currentAuthorindex
                // so next time, the next author can be returned.

                return {
                    value: genres[currentGenreIndex][currentAuthorIndex++],
                    done: false
                }
            }
        };
        
    }
};


for (const author of myFavouriteAuthors) {
    console.log(author);
}

console.log(...myFavouriteAuthors)