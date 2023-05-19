class Book{
    constructor(
        title,
        author,
        nbPages,
        currentPage,
        heroAge,
        heroName,
        heroType,
        isFinished,
        startDate,
        currentDate,
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
        this.isFinished = isFinished;
        this.dates = {
            startDate: startDate,
            currentDate : currentDate,
        };
    }

    updatePages(currentPage){
        this.page.currentPage = currentPage;
    }

    changeStatus(currentPage){
        if (currentPage === this.nbPages){
            this.isFinished = true;
        } else { 
            this.isFinished = false;
        }
    }

}

export default Book;