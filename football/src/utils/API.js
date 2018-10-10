import axios from "axios";

export default {
  // Gets all books
  getPicks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getPick: function(id) {
    return axios.get("/api/books/" + id);
  },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  savePick: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
