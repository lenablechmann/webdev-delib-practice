/* Currently there is a problem with the local storage and overall organization of the file
  I've found out local storage can only store strings,
  Thus I need to make a
  local storage prototype for objects with JSON stringify then parse. 

  And also figure out a way how to store data from addEventListener functions, as
  those are asynchronous...Perhaps I need a separate tracer bullet prototype file
  where functions send info to each other. */ 

// Create a page, where users can create books by filling out forms
let booksCollection = [];


if(!localStorage.getItem('booksCollection')) {
  // setting up a local storage array, have to stringify with json
  // unpack it later with
  // array = localStorage.getItem('myArray');
  // array = JSON.parse(array);

  localStorage.setItem('booksCollection', JSON.stringify(booksCollection));
}

document.querySelector("form").onsubmit = function () {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  storeBooks(title, author);
};

function storeBooks(title, author){
  userAddedBook = new book(title, author);
  let booksCollection = localStorage.getItem('booksCollection') || [];
  // booksCollection = JSON.parse(booksCollection);
  // booksCollection.push(userAddedBook);
console.log(typeof booksCollection);
  console.log(booksCollection);
};

function book(title, author) {
  // using "this" keyword to refer to the context of this function
  this.title = title;
  this.author = author;
  this.printBookInfo = function () {
    console.log(`You've mentioned ${title} from ${author}.`);
  };
}