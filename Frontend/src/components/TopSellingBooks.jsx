import React from 'react';
import { Star } from 'lucide-react';

const books = [
  { id: 1, category: "Design Low Book", title: "Qple GPad With Retina Sisplay", price: "$30.00", originalPrice: "$39.99", author: "Hawkins", rating: 4, badge: "Hot", image: "https://via.placeholder.com/120x160?text=UX+Research" },
  { id: 2, category: "Design Low Book", title: "Simple Things You To Save BOOK", price: "$30.00", originalPrice: "$39.99", author: "(Author) Albert", rating: 4, image: "https://via.placeholder.com/120x160?text=Unicorn+Erna" },
  { id: 3, category: "Design Low Book", title: "Simple Things You To Save BOOK", price: "$30.00", originalPrice: "$39.99", author: "Wilson", rating: 4, badges: ["Hot", "-30%"], image: "https://via.placeholder.com/120x160?text=Time+Travel" },
  { id: 4, category: "Design Low Book", title: "How Deal With Very Bad BOOK", price: "$30.00", originalPrice: "$39.99", author: "Alexander", rating: 4, image: "https://via.placeholder.com/120x160?text=Enlight+Yourself" },
  { id: 5, category: "Design Low Book", title: "Qple GPad With Retina Sisplay", price: "$30.00", originalPrice: "$39.99", author: "Esther", rating: 4, image: "https://via.placeholder.com/120x160?text=Grow+Flower" },
];

const TopSellingBooks = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 bg-white font-sans">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">Top Selling Books</h2>
        <button className="bg-[#FF7062] hover:bg-[#e85f52] text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all shadow-sm">
          Explore More <span>&rarr;</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <div key={book.id} className="flex flex-col justify-between group">
            <div>
              <div className="bg-[#FFF0EE] rounded-xl p-6 relative aspect-square flex items-center justify-center mb-4">
                {book.badge && (
                  <span className="absolute top-3 left-3 bg-[#0B132B] text-white text-[10px] font-bold px-2 py-0.5 rounded">Hot</span>
                )}
                {book.badges && book.badges.length > 1 && (
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="bg-[#0B132B] text-white text-[10px] font-bold px-2 py-0.5 rounded text-center">Hot</span>
                    <span className="bg-[#FF7062] text-white text-[10px] font-bold px-2 py-0.5 rounded text-center">-30%</span>
                  </div>
                )}
                <img src={book.image} alt={book.title} className="h-40 object-contain drop-shadow-md" />
              </div>
              <span className="text-xs text-[#8C8C9A] font-medium block mb-1">{book.category}</span>
              <h3 className="text-sm font-bold text-[#0B132B] leading-tight mb-2 min-h-[38px]">{book.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-[#4A5568]">{book.price}</span>
                {book.originalPrice && (
                  <span className="text-sm font-medium text-[#FF7062] line-through">{book.originalPrice}</span>
                )}
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <img src={`https://i.pravatar.cc/30?img=${book.id}`} className="w-5 h-5 rounded-full object-cover" alt={book.author} />
                  <span className="text-xs text-[#8C8C9A]">{book.author}</span>
                </div>
                <div className="flex text-[#FF7062] text-xs gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < book.rating ? "fill-[#FF7062] text-[#FF7062]" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
            </div>
            <button className="w-full bg-[#FFF0EE] text-[#FF7062] hover:bg-[#FF7062] hover:text-white font-semibold text-xs py-2.5 rounded-full transition-colors duration-200">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellingBooks;
