// initialization of the library
let Library = [];

console.log("HHH");

// The constructor of books

function Book(author,title,numberOfPages,read) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

// The addBookToLibrary() function

function addBookToLibrary(book) {
    Library.push(book);
}

// selecting the add new book button
let addNewBook = document.querySelector(".addbook");

//selecting the books div
let booksDiv = document.querySelector(".books");

//Selecting the quote in order to remove it if the button is clicked for the first time

let quote = document.querySelector(".quote");

//let select the main content where we gonna put the form when the add new button will be clicked
let mainContent = document.querySelector(".main-content");

// let's select the form to add it when the user click add
let form = document.querySelector(".form");
// Adding EventListener to the addNewBook Button

addNewBook.addEventListener("click",(e)=>{
    if (Library.length === 0){
        while(mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild);
        }
    }
    form.style.display ="flex";

})
