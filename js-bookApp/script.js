import Book from './Book.js';


// Book param order : title, author, nbPages, currentPage heroAge, heroName, heroType, readStatus, startDate currentDate, pubYear, ISBN, link

const book1 = new Book(
    "Les Misérables",
    "Victor Hugo",
    520,
    300,
    60,
    "Jean Valjean",
    'Male',
    false,
    "June 30, 2022",
    "July 15, 2022",
    "1842",
    9786432043972,
    "https://en.wikipedia.org/wiki/Les_Mis%C3%A9rables",
);



// console.log(book1.hero.heroName);
// console.log(book1.title);
// book1.updateCurrentPage(520);
// console.log(book1.page.currentPage);
// book1.updateReadStatus();
// console.log(book1.readStatus);


const content = `
<header>
        <a href="../index.html" id="logo-link"><img src="../images/vertigo.png" alt="" id="logo"></a>

        <nav>
            <ul>
                <li>
                    <a href="../html-css.html">HTML-CSS</a>
                </li>
                <li>
                    <a href="../vanilla-js.html">Vanilla JS</a>
                </li>
                <li>
                    <a href="../react.html">React</a>
                </li>
                <li>
                    <a href="../node.html">Node.js</a>
                </li>
                <li>
                    <a href="../databases.html">Databases</a>
                </li>
                <li>
                    <a href="../other-projects.html">Other projects</a>
                </li>
            </ul>
        </nav>
    </header>

    <div class="hero">
        <h1>Book App</h1>
    </div>

    <main>
        <div class="container">
            <section>
                <h2>
                    My Books
                </h2>

                <div class="row">
                    
                    <!-- book1 -->
                    <article class="item">
                        <h3 class="project-name">${book1.title} - ${book1.author}</h3>
                        <p class="project-content">
                        <ul>
                            <li>Number of pages : ${book1.page.nbPages}</li>
                            <li>Currently reading : ${book1.page.currentPage}</li>
                            <li>Hero's name : ${book1.hero.heroName}</li>
                            <li>Published Year : ${book1.pubYear}</li>
                        </ul>
                        </p>
                        <p class="project-link"><a href="${book1.link}">See more of this
                                book on Wikipedia</a></p>
                    </article>


                </div>

            </section>
        </div>

    </main>
    <footer class="footer">
        <address>
            Created and updated on a daily basis by Caroline - 2023
        </address>
    </footer>
`;

document.body.innerHTML = content;