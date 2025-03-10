const myLibrary = [];

const libraryBody = document.querySelector(".book-container");
const newBookBtn = document.getElementById("new-book");
const headerDiv = document.querySelector(".header-div");

function Book(title,author,pages,beenRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.beenRead = beenRead
    this.id = crypto.randomUUID();
    this.readMsg;
    if(beenRead){
        this.readMsg = " has been read already.";
    }else{
        this.readMsg = " hasn't been read yet.";
    }
    this.message = `${this.title} was written by ${this.author}, has ${this.pages} pages and ${this.readMsg} This book's ID is ${this.id}`;
};

function addBookToLibrary(title,author,pages,beenRead){
    let book = new Book(title,author,pages,beenRead);

    myLibrary.push(book);
}

function displayBooks(arr){
    arr = myLibrary;

    for(let i = 0; i < myLibrary.length; i++){
       let cardElement = document.createElement("div");
       let cardText = document.createElement("p");

       cardElement.className = "card";

       cardText.textContent = myLibrary[i].message;
       cardElement.appendChild(cardText);
       return libraryBody.appendChild(cardElement);
    }
}

newBookBtn.addEventListener("click", () =>{
    let bookFormDiv = document.createElement("div");
    bookFormDiv.className = "book-form";

    let formElement = document.createElement("form");

    let bTitleLabel = document.createElement("label");
    bTitleLabel.htmlFor = "book-title";
    bTitleLabel.textContent = "Book title";
    let bTitleInput = document.createElement("input");
    bTitleInput.name = "book-title";
    bTitleInput.id = "book-title";
    
    let authorLabel = document.createElement("label");
    authorLabel.htmlFor = "author";
    authorLabel.textContent = "Author";
    let authorInput = document.createElement("input");
    authorInput.name = "author";
    authorInput.id = "author";

    let bottomDiv = document.createElement("div");

    let pagesLabel = document.createElement("label");
    pagesLabel.htmlFor = "pages";
    pagesLabel.textContent = "Pages";
    let pagesInput = document.createElement("input");
    pagesInput.type = "number";
    pagesInput.name = "pages";
    pagesInput.id = "pages";

    let beenReadLabel = document.createElement("label");
    beenReadLabel.htmlFor = "been-read";
    beenReadLabel.textContent = "I have read this book";
    let beenReadInput = document.createElement("input");
    beenReadInput.type = "checkbox";
    beenReadInput.name = "been-read";
    beenReadInput.id = "been-read";

    let submitButton = document.createElement("button");
    submitButton.className = "submit-button";
    submitButton.textContent = "Add book";

    bottomDiv.appendChild(pagesLabel);
    bottomDiv.appendChild(pagesInput);
    bottomDiv.appendChild(beenReadLabel);
    bottomDiv.appendChild(beenReadInput);

    formElement.appendChild(bTitleLabel);
    formElement.appendChild(bTitleInput);
    formElement.appendChild(authorLabel);
    formElement.appendChild(authorInput);
    formElement.appendChild(bottomDiv);
    formElement.appendChild(submitButton);

    headerDiv.appendChild(formElement);
});