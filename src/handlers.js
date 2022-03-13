import books from "./books.js";
import { nanoid } from "nanoid";

/**
 * It's creating a new book object,
 * then it's merging the payload with the book object,
 * then it's checking whether the book name is empty or not,
 * then it's checking whether the readPage is greater than pageCount,
 * then it's checking whether the book is already in the books array,
 * then it's returning an generic error response if all the conditions above don't fulfill
 * @param request - It's the request object.
 * @param h - It's a helper function that comes with the koa-router. It's used to return a response.
 * @returns a response object.
 */
const addBook = (request, h) => {
  /* It's creating a new book object. */
  let book = {
    id: "",
    name: "",
    year: 0,
    author: "",
    summary: "",
    publisher: "",
    pageCount: 0,
    readPage: 0,
    finished: false,
    reading: false,
    insertedAt: "",
    updatedAt: "",
  };

  book = {
    ...book,
    /* It's generating a unique id for each book. */
    id: nanoid(),
    /* It's merging the payload with the book object. */
    ...request.payload,
    finished: request.payload.pageCount === request.payload.readPage,
    insertedAt: new Date().toString(),
    updatedAt: new Date().toString(),
  };

  /* It's checking whether the book name is empty or not. If it's empty, it will return an error
  message. */
  if (book.name === "") {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
    response.code(400);

    return response;
  }

  /* It's checking whether the readPage is greater than pageCount. If it's true, it will return an
  error message. */
  if (book.readPage > book.pageCount) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
    response.code(400);

    return response;
  }

  /* It's checking whether the book is already in the books array. If it's true, it will return
  an success message. */
  books.push(book);

  if (books.findIndex(({ id }) => id === book.id)) {
    const response = h.response({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: {
        bookId: book.id,
      },
    });
    response.code(201);
    return response;
  }

  /* It's returning an generic error response if all the conditions above don't fulfill */
  const response = h.response({
    status: "error",
    message: "Buku gagal ditambahkan",
  });

  response.code(500);

  return response;
};

/**
 * Return the books array
 * @param request - The request object.
 * @param h - The response handler.
 * @returns An array of books.
 */
const getAllBooks = (request, h) => {
  const response = h.response({
    status: "success",
    data: {
      books: books,
    },
  });
  return response;
};

export { addBook, getAllBooks };
