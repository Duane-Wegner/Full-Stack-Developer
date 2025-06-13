const books = [
    // === Ender Saga (Main Storyline) ===
    { title: "Ender's Game", authorName: "Orson Scott Card", releaseYear: 1985 },
    { title: "Speaker for the Dead", authorName: "Orson Scott Card", releaseYear: 1986 },
    { title: "Xenocide", authorName: "Orson Scott Card", releaseYear: 1991 },
    { title: "Children of the Mind", authorName: "Orson Scott Card", releaseYear: 1996 },
    { title: "Ender in Exile", authorName: "Orson Scott Card", releaseYear: 2008 },

    // === Shadow Saga (Parallel to Ender's Game, follows Bean) ===
    { title: "Ender's Shadow", authorName: "Orson Scott Card", releaseYear: 1999 },
    { title: "Shadow of the Hegemon", authorName: "Orson Scott Card", releaseYear: 2001 },
    { title: "Shadow Puppets", authorName: "Orson Scott Card", releaseYear: 2002 },
    { title: "Shadow of the Giant", authorName: "Orson Scott Card", releaseYear: 2005 },
    { title: "Shadows in Flight", authorName: "Orson Scott Card", releaseYear: 2012 },

    // === First Formic War Trilogy (Prequel Series) ===
    { title: "Earth Unaware", authorName: "Orson Scott Card and Aaron Johnston", releaseYear: 2012 },
    { title: "Earth Afire", authorName: "Orson Scott Card and Aaron Johnston", releaseYear: 2013 },
    { title: "Earth Awakens", authorName: "Orson Scott Card and Aaron Johnston", releaseYear: 2014 },

    // === Second Formic War Trilogy (Prequel Sequel) ===
    { title: "The Swarm", authorName: "Orson Scott Card and Aaron Johnston", releaseYear: 2016 },
    { title: "The Hive", authorName: "Orson Scott Card and Aaron Johnston", releaseYear: 2019 },
    { title: "The Queens", authorName: "Orson Scott Card and Aaron Johnston", releaseYear: 2021 },

    // === Short Stories / Collections / Novellas ===
    { title: "A War of Gifts", authorName: "Orson Scott Card", releaseYear: 2007 },
    { title: "First Meetings", authorName: "Orson Scott Card", releaseYear: 2002 },
    { title: "Ender’s Stocking", authorName: "Orson Scott Card", releaseYear: 1994 },
    { title: "Investment Counselor", authorName: "Orson Scott Card", releaseYear: 1999 },
    { title: "The Polish Boy", authorName: "Orson Scott Card", releaseYear: 2002 },
    { title: "Teacher’s Pest", authorName: "Orson Scott Card", releaseYear: 2002 }
];


function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear) return -1;
    if (book1.releaseYear > book2.releaseYear) return 1;
    return 0;
}

const filteredBooks = books.filter(book => book.releaseYear <= 2000);
filteredBooks.sort(sortByYear);