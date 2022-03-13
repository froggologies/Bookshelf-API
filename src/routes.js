import { addBook, getAllBooks, getBook } from "./handlers.js";

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
];

export default routes;
