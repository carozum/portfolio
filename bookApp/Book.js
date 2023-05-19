class Book{
    constructor(
        title,
        author,
        nbPages,
        currentPage,
        heroAge,
        heroName,
        heroType,
        readStatus,
        startDate,
        currentDate,
        pubYear,
        ISBN,
        link,
    ){
        this.title = title;
        this.author = author;
        this.page = {
            nbPages : nbPages,
            currentPage: currentPage
        };
        this.hero = {
            heroAge: heroAge,
            heroName : heroName,
            heroType: heroType,
        };
        this.readStatus = readStatus;
        this.dates = {
            startDate: startDate,
            currentDate : currentDate,
        };
        this.pubYear = pubYear;
        this.ISBN = ISBN;
        this.link = link;
    }

    updateCurrentPage(newCurrentPage){
        this.page.currentPage = newCurrentPage;
    }

    updateReadStatus(currentPage){
        if (currentPage === this.nbPages){
            this.readStatus = true;
        } else { 
            this.readStatus = false;
        }
    }

}

export default Book;