import React from "react";
import { Play, Star, ArrowRight } from "lucide-react";

// Mock Data for Testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "One of the most powerful takeaways from this view is the emphasis on building a mindset of abundance and possibility. The idea that we can choose to see opportunities rather than limitations is a game changer.",
    name: "Ronald Richards",
    role: "Marketing Coordinator",
    rating: 5,
    company: "envato",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    quote:
      "The idea that we can choose to see opportunities rather than limitations is a game changer. The book encourages readers to step out of their comfort zones and embrace a more positive outlook on life.",
    name: "Eleanor Pena",
    role: "Fitness Manager",
    rating: 5,
    company: "amazon",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    quote:
      "The Art of Possibility by Rosamund Stone Zander and Benjamin Zander is a site that invites beautiful challenges conventional thinking and opens up new possibilities. As a reader, I found myself profoundly moved.",
    name: "Bessie Cooper",
    role: "Marketing Coordinator",
    rating: 5,
    company: "envato",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
];

// Mock Data for Featured Authors
const authors = [
  {
    id: 1,
    name: "Leslie Alexander",
    booksCount: "12 Published Books",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    booksCount: "10 Published Books",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Esther Howard",
    booksCount: "08 Published Books",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Devon Lane",
    booksCount: "15 Published Books",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Robert Fox",
    booksCount: "11 Published Books",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Eleanor Pena",
    booksCount: "20 Published Books",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
];

const AboutPage = () => {
  return (
    <div className="w-full bg-white font-sans text-[#2B303A]">
      {/* 1. Header Breadcrumb Banner */}
      <section className="w-full bg-[#FFF0F3] py-12 text-center border-b border-[#FEE2E2]">
        <h1 className="text-3xl font-bold text-[#2B303A] mb-2">About Us</h1>
        <p className="text-xs text-[#718096] uppercase tracking-wider font-medium">
          <span className="hover:text-[#FF6363] cursor-pointer">Home</span>
          <span className="mx-2 text-[#FF6363]">&gt;</span>
          <span className="text-[#FF6363]">About Us</span>
        </p>
      </section>

      {/* 2. About The Readit Books Store Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Video / Image Thumbnail */}
        <div className="relative rounded-2xl overflow-hidden shadow-sm group">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80"
            alt="Reading Book"
            className="w-full h-[360px] object-cover"
          />
          <div className="absolute inset-0 bg-black/15 flex items-center justify-center">
            <button
              aria-label="Play video"
              className="w-14 h-14 bg-white text-[#FF6363] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <Play size={22} className="fill-[#FF6363] ml-1" />
            </button>
          </div>
        </div>

        {/* Right Side Description */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#2B303A] mb-4">
            About The Readit <br /> Books Store
          </h2>
          <p className="text-sm text-[#718096] leading-relaxed mb-4">
            Auctor neque vitae tempus quam pellentesque. Vitae enim duis
            convallis convallis tellus id interdum velit. Imperdiet proin
            fermentum leo vel orci porta. Suspendisse ultrices gravida dictum
            fusce ut placerat orci nulla. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames.
          </p>
          <p className="text-sm text-[#718096] leading-relaxed mb-6">
            Morbi tristique senectus et netus. Quam viverra orci sagittis eu
            volutpat. Elementum eu facilisis sed odio morbi. Duis at tellus at
            urna condimentum mattis.
          </p>
          <a
            href="#overview"
            className="inline-flex items-center text-[#FF6363] font-semibold text-sm hover:gap-2 transition-all gap-1"
          >
            Overview &gt;
          </a>
        </div>
      </section>

      {/* 3. Promo Banner Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="relative bg-[#FF6363] rounded-2xl p-8 md:p-12 text-white text-center overflow-hidden flex flex-col items-center justify-center shadow-md">
          {/* Discount Badge */}
          <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-xs font-semibold mb-3 tracking-wide">
            Get 25%
          </span>

          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 max-w-xl leading-tight">
            Discount In All Kind Of Super Selling
          </h2>

          <button className="bg-white text-[#FF6363] px-6 py-2.5 rounded-full font-bold text-xs hover:bg-gray-100 transition-colors flex items-center gap-2 shadow">
            Shop Now <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* 4. Customer Feedback Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B303A] mb-2">
            Customer Feedback
          </h2>
          <p className="text-xs text-[#718096]">
            Sollicitudin ac orci phasellus egestas tellus. Duis at tellus at
            urna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-xs text-[#718096] leading-relaxed mb-6">
                "{item.quote}"
              </p>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#2B303A]">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#718096]">{item.role}</p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={11}
                          className="fill-[#FFB800] text-[#FFB800]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Brand / Company logo placeholder */}
                <span className="text-xs font-black text-gray-400 italic">
                  {item.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Featured Author Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 mb-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B303A] mb-2">
            Featured Author
          </h2>
          <p className="text-xs text-[#718096]">
            Sollicitudin ac orci phasellus egestas tellus. Duis at tellus at
            urna.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {authors.map((author) => (
            <div
              key={author.id}
              className="bg-white border border-dashed border-[#E2E8F0] rounded-xl p-4 text-center hover:border-[#FF6363] transition-colors"
            >
              {/* Author Badge Wrapper */}
              <div className="relative inline-block mb-3">
                <div className="w-16 h-16 rounded-full p-1 border-2 border-[#FFB800] mx-auto">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              <h4 className="text-xs font-bold text-[#2B303A] truncate">
                {author.name}
              </h4>
              <p className="text-[10px] text-[#718096] mt-1">
                {author.booksCount}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
