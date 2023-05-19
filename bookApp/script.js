import Book from './Book.js';

const book1 = new Book(
    "les misérables",
    "Victor Hugo",
    520,
    300,
    60,
    "Jean Valjean",
    'Male',
    false,
    "June 30, 2022",
    "July 15, 2022",
);


console.log(book1.hero.heroName);
console.log(book1.title);
book1.updatePages(520);
console.log(book1.page.currentPage);
book1.changeStatus();
console.log(book1.isFinished);