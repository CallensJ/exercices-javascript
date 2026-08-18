import { books } from "./data.js";
import { renderBooks } from "./renderBooks.js";

  const bookList = document.getElementById("books-list");

  renderBooks(books, bookList)
