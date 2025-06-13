// An array named `library` that stores a collection of book objects.
// Each object represents a single book with its title, author, description (about), and number of pages.
const library = [
    {
        title: 'Your Next Five Moves: Master the Art of Business Strategy',
        author: 'Patrick Bet-David and Greg Dinkin',
        about: 'A book on how to plan ahead',
        pages: 320,
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        about: 'A practical book about discarding bad habits and building good ones',
        pages: 320,
    },
    {
        title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
        author: 'Patrick Bet-David',
        about: "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
        pages: 304,
    },
    {
        title: 'The Embedded Entrepreneur',
        author: 'Arvid Kahl',
        about: 'A book focusing on how to build an audience-driven business',
        pages: 308,
    },
    {
        title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
        author: 'Jon Gordon',
        about: 'A book about effective ways to lead a coffee bean lifestyle',
        pages: 256,
    },
    {
        title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
        author: 'Jeff DeGraff and Staney DeGraff',
        about: 'A book on how to develop creativity and innovation skills',
        pages: 168,
    },
    {
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki and Sharon Lechter',
        about: 'A book about financial literacy, financial independence, and building wealth. ',
        pages: 336,
    },
    {
        title: 'Zero to Sold',
        author: 'Arvid Kahl',
        about: 'A book on how to bootstrap a business',
        pages: 500,
    },
];

// Function that takes an array of books and returns a formatted string listing them all
function displayBooks(catalog) {
    let output = 'Books in the Library:\n';

    // Loop through each book object in the catalog
    catalog.forEach((book) => {
        // Append book details to the output string
        output += `- ${book.title} by ${book.author} (${book.pages} pages)\n`;
    });

    return output; // Return the complete list as a single string
}

// Function that returns an array of all book descriptions (the 'about' properties)
function getBookSummaries(catalog) {
    return catalog.map((book) => book.about);
}

// Function that filters and returns only the books written by the given author
function getBooksByAuthor(catalog, author) {
    return catalog.filter((book) => book.author === author);
}

// Function that calculates and returns the total number of pages in the catalog
function getTotalPages(catalog) {
    return catalog.reduce((acc, book) => acc + book.pages, 0);
}

// Using the above functions to retrieve different pieces of library information

// Variable that stores the list of all books as a formatted string
const libraryBooks = displayBooks(library);

// Variable that stores an array of book summaries
const bookSummaries = getBookSummaries(library);

// Variable that stores all books written by "Arvid Kahl"
const booksByArvidKahl = getBooksByAuthor(library, 'Arvid Kahl');

// Variable that stores the total number of pages across all books
const totalPagesOfBooksInLibrary = getTotalPages(library);

// Logging all results to the console for verification
console.log(libraryBooks);
console.log(bookSummaries);
console.log(booksByArvidKahl);
console.log(totalPagesOfBooksInLibrary);
