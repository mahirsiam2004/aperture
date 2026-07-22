import React from 'react';
import { Heart, RefreshCw, Eye, Star } from 'lucide-react';

const books = [
  { id: 1, category: "Design Low Book", title: "Simple Things You To Save BOOK", price: "$30.00", author: "William", rating: 4 },
  { id: 2, category: "Design Low Book", title: "How Deal With Very Bad BOOK", price: "$30.00", author: "William", rating: 4 },
  { id: 3, category: "Design Low Book", title: "Opie GPad With Retina Display", price: "$30.00", author: "William", rating: 4 },
  { id: 4, category: "Design Low Book", title: "Flovely And Unicorn Ema", price: "$10.00", author: "William", rating: 4 },
  { id: 5, category: "Design Low Book", title: "Castle In The Sky", price: "$18.00", author: "William", rating: 4 },
  { id: 6, category: "Design Low Book", title: "The Hidden Mystery Behind", price: "$30.00", author: "William", rating: 4 },
];

const TopRatingBooks = () => {
  return (
    <div className="bg-[#FFF5F5] py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#1A1A1A]">Top Rating Books</h2>
          <button className="bg-[#FF6B6B] hover:bg-[#E05555] text-white text-sm font-semibold py-2 px-5 rounded-full transition-colors">
            View More Books &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {books.map((book) => (
            <div key={book.id} className="border border-[#EEEEEE] rounded-xl p-4 flex gap-4 relative bg-white hover:shadow-md transition-shadow">
              <div className="w-20 h-24 bg-[#FFF0F0] rounded-lg flex-shrink-0 flex items-center justify-center p-1">
                <div className="w-full h-full bg-gray-300 rounded flex items-center justify-center text-xs text-gray-500">
                  Cover
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-[#888888]">{book.category}</span>
                  <h3 className="text-sm font-bold text-[#1A1A1A] truncate">{book.title}</h3>
                  <p className="text-sm font-semibold text-[#444444] mt-0.5">{book.price}</p>
                </div>

                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-4 h-4 rounded-full bg-gray-300" />
                  <span className="text-[11px] text-[#888888]">{book.author}</span>
                </div>

                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < book.rating ? "fill-[#FF6B6B] text-[#FF6B6B]" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#FF6B6B]">
                  <Heart size={12} />
                </button>
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#FF6B6B]">
                  <RefreshCw size={12} />
                </button>
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#FF6B6B]">
                  <Eye size={12} />
                </button>
              </div>

              <button className="absolute bottom-3 right-3 bg-[#FFE8E8] text-[#FF6B6B] text-xs font-medium px-3 py-1.5 rounded-md hover:bg-[#FFD6D6] transition-colors">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatingBooks;
