import { addBook, getAllBooks, getBook, updateBook } from "./handlers.js";

const routes = [
  {
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  },
  {
    method: "POST",
    path: "/books",
    handler: addBook,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBook,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: updateBook,
  },
];

export default routes;
