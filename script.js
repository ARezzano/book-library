const myLibrary = [];

const libraryBody = document.querySelector(".book-container");
const headerDiv = document.querySelector(".header-div");

let newBookBtn = document.createElement("button"); //new book btn created and appended
newBookBtn.className = "new-button";
newBookBtn.textContent = "New book";

headerDiv.appendChild(newBookBtn);

function Book(title,author,pages,beenRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.beenRead = beenRead
    this.id = crypto.randomUUID();
    this.readMsg = beenRead ? " has been read already." : " hasn't been read yet.";
    this.message = `${this.title} was written by ${this.author}, has ${this.pages} pages and ${this.readMsg} This book's ID is ${this.id}`;
};

function addBookToLibrary(title,author,pages,beenRead){
    let book = new Book(title,author,pages,beenRead);

    myLibrary.push(book);
}

function displayBooks(){
    libraryBody.innerHTML = "";

    for(let i = myLibrary.length-1; i >= 0; i--){
       let cardElement = document.createElement("div");
       let cardText = document.createElement("p");

       cardElement.className = "card";

       cardText.textContent = myLibrary[i].message;
       cardElement.appendChild(cardText);
       libraryBody.appendChild(cardElement);
    }
}

newBookBtn.addEventListener("click", () =>{
    let formElement = document.createElement("form");
    formElement.className = "book-form";

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
    bottomDiv.className = "bottom-div";

    let pagesLabel = document.createElement("label");
    pagesLabel.htmlFor = "pages";
    pagesLabel.textContent = "Pages";
    let pagesInput = document.createElement("input");
    pagesInput.type = "number";
    pagesInput.name = "pages";
    pagesInput.id = "pages";

    let beenReadLabel = document.createElement("label");
    beenReadLabel.htmlFor = "been-read";
    beenReadLabel.textContent = "I read it";
    let beenReadInput = document.createElement("input");
    beenReadInput.type = "checkbox";
    beenReadInput.name = "been-read";
    beenReadInput.id = "been-read";

    headerDiv.removeChild(newBookBtn);

    let submitButton = document.createElement("button");
    submitButton.className = "submit-button";
    submitButton.textContent = "Add book";

    let cancelButton = document.createElement("button");
    cancelButton.className = "cancel-button";
    cancelButton.textContent = "Cancel";

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
    formElement.appendChild(cancelButton);

    headerDiv.appendChild(formElement);

    cancelButton.addEventListener("click",(event)=>{
        event.preventDefault();
        headerDiv.appendChild(newBookBtn);
        headerDiv.removeChild(formElement);
    });

    submitButton.addEventListener("click",(event)=>{
        event.preventDefault();

        addBookToLibrary(bTitleInput.value, authorInput.value, pagesInput.value, beenReadInput.checked);
        headerDiv.removeChild(formElement);
        headerDiv.appendChild(newBookBtn);
        displayBooks();
    });
});