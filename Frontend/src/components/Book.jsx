import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { _id } = book;
  console.log(_id);
  return (
    <div>
      <Link
        to={`/book/${_id}`}
        className="flex flex-col items-center justify-center h-80 w-2xs"
      >
        <div className="image bg-[#FFEFEF] px-10 py-8 rounded-2xl">
          <img className="w-25 h-30 rounded-2xl" src={book.coverImage} alt="" />
        </div>

        <div className="flex flex-col ">
          <p className="mt-2 text-[#BEBEBE] text-[12px]">Design low Books</p>
          <h2 className="font-semibold">{book.title}</h2>
          <h2 className="text-[12px] pt-4 text-[#838383] font-bold">
            $ {book.price}
          </h2>
          <button className="w-full btn bg-[#FFEFEF] font-semibold text-[#FF7B6B] px-8 rounded-3xl py-1 flex items-center justify-center">
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Book;
