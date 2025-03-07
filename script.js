const myLibrary = [];

const libraryBody = document.querySelector("body");

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

//next commit: displayBooks function, cards style