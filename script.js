const addBtn = document.querySelector("#add-book");
const bookFormContainer = document.querySelector(".add-books");
const booksWrapper = document.querySelector(".books");


addBtn.addEventListener("click", () => {
    bookFormContainer.style.display = "block";
    booksWrapper.style.width = "80%";
});

const myLibrary = [
    new Book("Hamlet", "William Shakespeare", "https://i.imgur.com/7AOVRQk.jpeg", 317, false),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "https://i.imgur.com/fQAvXre.jpeg", 300, false),
];

function Book(title, author, imageUrl, pages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.imageUrl = imageUrl;
  this.pages = pages;
  this.isRead = isRead ? "Yes" : "No";
}

function addBookToLibrary(title, author, imageUrl, pages, isRead) {
  // take params, create a book then store it in the array
    const newBook = new Book(title, author, imageUrl, pages, isRead)
    myLibrary.push(newBook);
}

addBookToLibrary("Gone with the wind", "Margaret Mitchell", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPL1U9nzA-2FXsljJJwO-P9Rg4sxYqbvjhXOOB6YNaa833kMMVOQSyvL4WcDw-nAilBDaf5r-G_nfDFZOX1bQelN3pF2yG6zYWpHu8g&s=10", 1037, true);

function createElement(info) {
    const element = document.createElement(info.type);
    if (info.classList) element.classList = info.classList;
    if (info.textContent) element.textContent = info.textContent;

    if (info.attrs) {
        for (let attr in info.attrs) {
            element.setAttribute(attr, info.attrs[attr]);
        } 
    }

    return element;
}

function appendChildren(parent, children) {
    for (let child of children) {
        parent.appendChild(child);
    }
}

function removeChildren(parent, children) {
    for (let child of children) {
        parent.removeChild(child);
    }
}

function displayBooks() {
    const bookElements = [];

    for (let book of myLibrary) {
        const bookCard = createElement({type: "div", classList: ["card"]});
        const bookImageWrapper = createElement({type: "div", classList: ["card__img-wrapper"]});
        const bookImage = createElement(
            {
                type: "img", 
                classList: ["card__image"],
                attrs: {
                    src: book.imageUrl,
                },
            }
        );

        bookImageWrapper.appendChild(bookImage);

        const bookInfoWrapper = createElement({type: "div", classList: ["card__info"]});
        const bookTitle = createElement(
            {type: "div", classList: ["title"], textContent: `Title: ${book.title}`}
        );

        const bookAuthor = createElement(
            {type: "div", classList: ["author"], textContent: `Author: ${book.author}`}
        );

        const bookPages = createElement(
            {type: "div", classList: ["pages"], textContent: `Pages: ${book.pages}`}
        );

        const bookFlag = createElement(
            {type: "div", classList: ["read"], textContent: `Read: ${book.isRead}`}
        );

        appendChildren(bookInfoWrapper, [bookTitle, bookAuthor, bookPages, bookFlag]);
        appendChildren(bookCard, [bookImageWrapper, bookInfoWrapper]);       

        bookElements.push(bookCard);
    }

    appendChildren(booksWrapper, bookElements);
}

displayBooks();

const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const newBookTitle = document.querySelector("#title-input").value;
    const newBookAuthor = document.querySelector("#author-input").value; 
    const newBookImageUrl = document.querySelector("#url-input").value;
    const newBookPages = parseInt(document.querySelector("#pages-input").value);
    const newBookIsRead = document.querySelector("#read-input").checked;

    addBookToLibrary(
        newBookTitle,
        newBookAuthor,
        newBookImageUrl,
        newBookPages,
        newBookIsRead,
    );

    removeChildren(booksWrapper, [...document.querySelectorAll(".books > *")]);
    displayBooks();

    bookFormContainer.style.display = "none";
    booksWrapper.style.width = "100%";
});