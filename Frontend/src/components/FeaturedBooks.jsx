import React, { useState, useEffect } from "react";
import Book from "./Book";

const FeaturedBooks = () => {
  // 1. Create a state variable to store the books data
  const [books, setBooks] = useState([]);

  // 2. Wrap the fetch inside useEffect so it only runs ONCE when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []); // Empty dependency array ensures this runs only on initial load

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl mt-10 font-semibold text-center">
        Featured Books
      </h2>
      
      {/* 3. Grid container to house your responsive book items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 justify-items-center">
        {
          books.map((book) => (
            <Book key={book._id || book.id} book={book} />
          ))
        }
      </div>
    </div>
  );
};

export default FeaturedBooks;