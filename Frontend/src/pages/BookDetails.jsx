import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";

const BookDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const serverUrl = import.meta.env.VITE_SERVER_API;
    if (!serverUrl) return;

    fetch(`${serverUrl}/book/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching book:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center font-semibold text-gray-500">
        Loading book details...
      </div>
    );
  }

  if (!book) {
    return (
      <div className="flex h-screen items-center justify-center font-semibold text-red-500">
        Book not found!
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans text-[#333333]">
      {/* Main Content Container with clean top spacing */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image Area */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-[#FFFBFB] border border-[#FEEAEA] rounded-2xl p-12 flex justify-center items-center aspect-square">
              <img
                className="max-h-96 object-contain rounded-lg shadow-sm"
                src={book.coverImage}
                alt={book.title}
              />
            </div>
            {/* Small Thumbnail Previews aligned with the parent frame */}
            <div className="flex gap-4 mt-4 w-full justify-start">
              <div className="w-20 h-20 bg-white border border-[#FF7B6B] p-2 rounded-xl flex items-center justify-center cursor-pointer shadow-sm">
                <img
                  src={book.coverImage}
                  alt="thumbnail"
                  className="max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Actions & Metadata */}
          <div className="flex flex-col justify-between h-full pt-2">
            <div>
              <div className="flex flex-wrap justify-between items-center gap-4">
                <h1 className="text-3xl font-bold text-[#1A1A1A]">
                  {book.title}
                </h1>
                {book.stock !== undefined && (
                  <span className="text-sm font-semibold text-[#2EC4B6] bg-[#E6F9F8] px-3 py-1 rounded-full">
                    Stock Availability ({book.stock})
                  </span>
                )}
              </div>

              <p className="text-[#838383] font-medium mt-1">
                By {book.author}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-amber-400 text-sm">
                  {"★".repeat(Math.floor(book.rating || 5))}
                  {book.rating % 1 !== 0 ? "½" : ""}
                </div>
                <span className="text-xs text-[#838383]">
                  ({book.totalReviews?.toLocaleString()} Customer Reviews)
                </span>
              </div>

              {/* Summary Description */}
              <p className="text-sm text-[#666666] leading-relaxed mt-6">
                {book.description}
              </p>

              {/* Pricing Section */}
              <div className="flex items-center gap-4 mt-6">
                <span className="text-3xl font-bold text-[#FF7B6B]">
                  ${book.discountPrice ? book.discountPrice : book.price}
                </span>
                {book.discountPrice && (
                  <span className="text-lg text-[#BEBEBE] line-through">
                    ${book.price}
                  </span>
                )}
              </div>

              {/* Action Controls */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                {/* Quantity Selector */}
                <div className="flex items-center border border-[#EFEFEF] rounded-full px-4 py-2 bg-white shadow-sm">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-gray-500 hover:text-black font-bold px-2"
                  >
                    -
                  </button>
                  <span className="px-4 font-semibold text-sm w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-gray-500 hover:text-black font-bold px-2"
                  >
                    +
                  </button>
                </div>

                <button className="bg-[#FFF8F8] border border-[#FEEAEA] hover:bg-[#FEEAEA] text-[#FF7B6B] font-semibold px-6 py-3 rounded-full transition-all text-sm">
                  Read A Little
                </button>

                <button className="bg-[#FF7B6B] hover:bg-[#e06859] text-white font-semibold px-8 py-3 rounded-full shadow-md shadow-[#FF7B6B]/20 transition-all text-sm">
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Fully Dynamic Spec Card Sheet */}
            <div className="mt-8 border border-[#FEEAEA] bg-[#FFFBFB] rounded-2xl p-5 text-xs text-[#555555]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-2">
                <div>
                  <span className="font-bold text-[#1A1A1A]">ISBN:</span>
                  <p className="text-[#666666] mt-0.5">{book.isbn || "N/A"}</p>
                </div>
                <div>
                  <span className="font-bold text-[#1A1A1A]">Category:</span>
                  <p className="text-[#666666] mt-0.5">
                    {book.category || "N/A"}
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[#1A1A1A]">Publisher:</span>
                  <p className="text-[#666666] mt-0.5">
                    {book.publisher || "N/A"}
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[#1A1A1A]">Language:</span>
                  <p className="text-[#666666] mt-0.5">
                    {book.language || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Description Section with Dynamic Review Counters */}
        <div className="mt-16 border-t border-[#EFEFEF] pt-10">
          <div className="flex gap-8 border-b border-[#EFEFEF] pb-3 text-sm font-semibold">
            <span className="text-[#FF7B6B] border-b-2 border-[#FF7B6B] pb-3 cursor-pointer">
              Description
            </span>
            <span className="text-[#838383] hover:text-[#1A1A1A] cursor-pointer">
              Additional Information
            </span>
            <span className="text-[#838383] hover:text-[#1A1A1A] cursor-pointer">
              Reviews ({book.totalReviews?.toLocaleString()})
            </span>
          </div>
          <div className="py-6 text-sm text-[#666666] leading-relaxed space-y-4">
            <p>{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
