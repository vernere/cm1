import React from "react";

function BookItem({ book, onDelete }) {
  return (
    <li>
      <strong>Title:</strong>{book.title} <strong>Author:</strong>{book.author} <strong>Year:</strong>{book.year}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default BookItem;