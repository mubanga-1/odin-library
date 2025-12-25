const addBtn = document.querySelector("#add-book");
const bookFormContainer = document.querySelector(".add-books");

addBtn.addEventListener("click", () => {
    bookFormContainer.style.display = "block";
});

const myLibrary = [
    new Book("Hamlet", "William Shakespeare", "https://i.imgur.com/7AOVRQk.jpeg", 317),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "https://i.imgur.com/fQAvXre.jpeg", 300),
];

function Book(title, author, imageUrl, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.imageUrl = imageUrl;
  this.pages = pages;
}

function addBookToLibrary(title, author, imageUrl, pages) {
  // take params, create a book then store it in the array
}