import React, { useState } from "react";
import "./BookCollectionManager.css";
import BookItem from "./BookItem";

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function handleYearChange(event) {
    setYear(event.target.value);
  }

  function addBook() {
    if (title.trim() !== "" && author.trim() !== "" && year.trim() !== "") {
      setBooks((b) => [...b, { title, author, year }]);
      setTitle("");
      setAuthor("");
      setYear("");
    }
  }

  function deleteBook(index) {
    setBooks(books.filter((_, i) => i !== index));
  }

  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      <div>
        <input type="text" placeholder="Enter book title..." value={title} onChange={handleTitleChange} />
        <input type="text" placeholder="Enter author name..." value={author} onChange={handleAuthorChange} />
        <input type="text" placeholder="Enter publication year..." value={year} onChange={handleYearChange} />
        <button onClick={addBook}>Add Book</button>
      </div>
      <ol>
        {books.map((book, index) => (
          <BookItem key={index} book={book} onDelete={() => deleteBook(index)} />
        ))}
      </ol>
    </div>
  );
}

export default BookCollectionManager;