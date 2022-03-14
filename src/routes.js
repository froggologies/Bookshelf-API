import {
  addBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "./handlers.js";

const routes = [
  {
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBook,
  },
  {
    method: "POST",
    path: "/books",
    handler: addBook,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: updateBook,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBook,
  },
];

export default routes;
