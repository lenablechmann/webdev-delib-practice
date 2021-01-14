// Write a constructor for making “Book” objects. 

function book(title, author, yearPublished, description, readStatus){
    // using "this" keyword to refer to the context of this function
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.description = description;
    this.readStatus = readStatus;
}

const bookFirst = new book("Modern C", "King", 1990, "Pointers, pointers everywhere", true);
// prints the whole object, wow
console.log(bookFirst);
