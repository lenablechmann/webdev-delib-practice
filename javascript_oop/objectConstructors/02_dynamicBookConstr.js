// Create a page, where users can create books by filling out forms
// you'll check em in console log



document.querySelector("form").onsubmit = function () {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  storeBooks(title, author)
}
console.table(booksCollection);

function storeBooks(title, author){
  let booksCollection = [];
  userAddedBook = new book(title, author);
  booksCollection.push(userAddedBook);
};

function book(title, author) {
  // using "this" keyword to refer to the context of this function
  this.title = title;
  this.author = author;
  this.printBookInfo = function () {
    console.log(`You've mentioned ${title} from ${author}.`);
  };
}