import { addBook, getAllBooks } from "./handlers.js";

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
];

export default routes;
