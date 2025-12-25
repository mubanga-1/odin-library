const addBtn = document.querySelector("#add-book");
const bookFormContainer = document.querySelector(".add-books");

addBtn.addEventListener("click", () => {
    bookFormContainer.style.display = "block";
});

const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}