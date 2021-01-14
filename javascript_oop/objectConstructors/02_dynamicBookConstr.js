// Create a page, where users can create books by filling out forms
// you'll check em in console log

function book(title, author, yearPublished, description, readStatus){
    // using "this" keyword to refer to the context of this function
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.description = description;
    this.readStatus = readStatus;
    this.printBookInfo = function(){
        console.log(`${title} from ${author} published in ${yearPublished} is all about ${description}.`)
    };
}

const bookFirst = new book("Modern C", "King", 1990, "pointers, pointers everywhere", true);
// prints the whole object, wow
// console.log(bookFirst);

// calls the function
bookFirst.printBookInfo();