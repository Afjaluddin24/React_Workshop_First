const axios = require("axios");

async function getAllBooks() {
  const response = await axios.get("http://localhost:5000/books");
  return response.data;
}

async function getBooksByISBN(isbn) {
  const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
  return response.data;
}

async function getBooksByAuthor(author) {
  const response = await axios.get(`http://localhost:5000/author/${author}`);
  return response.data;
}

async function getBooksByTitle(title) {
  const response = await axios.get(`http://localhost:5000/title/${title}`);
  return response.data;
}