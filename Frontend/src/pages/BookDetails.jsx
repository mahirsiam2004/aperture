import React from "react";
import { useParams } from "react-router";

const BookDetails = () => {

  const { id } = useParams();

  console.log("The book ID from the URL is:", id);

  return (
    <div>
      <h1>Book Details Page</h1>
      <p>Displaying data for Book ID: {id}</p>
    </div>
  );
};

export default BookDetails;
