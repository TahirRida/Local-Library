// initialization of the library
let Library = [];

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

let mainContentFirstPart = document.querySelector(".addbook1");
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
    quote.style.display = "none";
    addNewBook.style.display = "none";
    form.style.display ="flex";

})

// Now let's add the book to our library

// I am selecting the inputs that will be filled by the user.

let bookName = document.getElementById("bookName");
let AuthorName = document.getElementById("AuthorName");
let pages = document.getElementById("pages");
let read = document.getElementById("read");
let body = document.querySelector("body");
let addNow = document.querySelector(".add");
addNow.addEventListener("click",(e)=>{
    let error = document.querySelector(".error");
    // initializing the input variables
    let name = bookName.value;
    let author = AuthorName.value;
    let page = pages.value;
    let readOrNot = read.checked;
    if (name === "" || author === "" || page === ""){
        if (!body.contains(error)){
            body.innerHTML += "<div class='error'> *Please, fill all the informations required </div>";
        }
    }
    else {
        let error = document.querySelector(".error");
        if (body.contains(error)){
            body.removeChild(error);
        }
        addNewBook.style.display="flex";
        if (Library.length === 0) {
            // In order to remove the quote that appears when firstly opening the website
            booksDiv.removeChild(quote);
            booksDiv.style.display = "grid";
            booksDiv.style.gridTemplateColumns = "repeat(5,1fr)";
            booksDiv.style.gridTemplateRows = "repeat(100,1fr)";
        }
        createDivBook(name,author,page,readOrNot);
        form.style.display = "none";
        addNewBook.style.display = "flex";
        bookName.value = "";
        AuthorName.value ="";
        pages.value ="";
        read.checked = false;
    }



});
// this function creats a div and add it to our library
function createDivBook(bookTitle,Author,pages,read){
    let book = new Book(Author,bookTitle,pages,read);
    Library.push(book);
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML  += "<h3>Book Title : "+book.title+"<hr></h3><h3>Author :"+book.author+"<hr></h3>"
    +"<h3> Number Of Pages :"+book.numberOfPages+"<hr>";
    if (read === true) {
        bookDiv.innerHTML += "<br><div class='button'><button class='read'>read</button>";
    }
    if (read === false) {
        bookDiv.innerHTML += "<br><div class='button'><button class='not-read'>Not read</button>";
    }
    booksDiv.appendChild(bookDiv);
}
// Now let's give the user the ability to change the read status of a book
booksDiv.addEventListener("click",(e)=>{
    changeClass(e.target);
    
},true);

function changeClass(initialClassName){
    if(initialClassName.classList.contains('read')){
        initialClassName.classList.remove('read');
        initialClassName.classList.add("not-read");
        initialClassName.textContent = "not-read";
        exit; // otherwise the function will go to the second if and execute it
    }
    if(initialClassName.classList.contains("not-read")){
        initialClassName.classList.remove("not-read");
        initialClassName.classList.add("read");
        initialClassName.textContent = "read";
    }
}