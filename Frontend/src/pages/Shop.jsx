import { useState } from "react";
import { Search, ChevronDown, Star, Grid, List, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Simple Things You Save BOOK",
    price: 30.0,
    oldPrice: null,
    rating: 3.4,
    reviews: 25,
    badges: ["Hot", "-30%"],
    image: null,
  },
  {
    id: 2,
    title: "How Deal With Very Bad BOOK",
    price: 39.0,
    oldPrice: null,
    rating: 3.4,
    reviews: 25,
    badges: [],
    image: null,
  },
  {
    id: 3,
    title: "The Hidden Mystery Behind",
    price: 30.0,
    oldPrice: 39.0,
    rating: 3.4,
    reviews: 25,
    badges: [],
    image: null,
  },
  {
    id: 4,
    title: "Qpie GPad With Retina Display",
    price: 39.0,
    oldPrice: null,
    rating: 3.4,
    reviews: 25,
    badges: ["-12%"],
    image: null,
  },
  {
    id: 5,
    title: "Flovely And Unicorn Erna",
    price: 19.0,
    oldPrice: null,
    rating: 3.4,
    reviews: 25,
    badges: [],
    image: null,
  },
  {
    id: 6,
    title: "Castle In The Sky",
    price: 16.0,
    oldPrice: null,
    rating: 3.4,
    reviews: 25,
    badges: [],
    image: null,
  },
  {
    id: 7,
    title: "Simple Things You Save BOOK",
    price: 30.0,
    oldPrice: null,
    rating: 3.4,
    reviews: 25,
    badges: ["Hot", "-30%"],
    image: null,
  },
  {
    id: 8,
    title: "How Deal With Very Bad BOOK",
    price: 39.0,
    oldPrice: null,
    rating: 3.4,
    reviews: 25,
    badges: [],
    image: null,
  },
  {
    id: 9,
    title: "The Hidden Mystery Behind",
    price: 30.0,
    oldPrice: 39.0,
    rating: 3.4,
    reviews: 25,
    badges: [],
    image: null,
  },
  {
    id: 10,
    title: "Qpie GPad With Retina Display",
    price: 39.0,
    oldPrice: null,
    rating: 3.4,
    reviews: 25,
    badges: ["-12%"],
    image: null,
  },
  {
    id: 11,
    title: "Flovely And Unicorn Erna",
    price: 19.0,
    oldPrice: null,
    rating: 3.4,
    reviews: 25,
    badges: [],
    image: null,
  },
  {
    id: 12,
    title: "Castle In The Sky",
    price: 16.0,
    oldPrice: null,
    rating: 3.4,
    reviews: 25,
    badges: [],
    image: null,
  },
];

const categories = [
  "Biographies & Memoirs",
  "Christian Books & Bibles",
  "Research & Publishing Guides",
  "Sports & Outdoors",
  "Food & Drink",
];

const StarRating = ({ count, filledColor = "#FFB800", emptyColor = "#CBD5E0" }) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? filledColor : "transparent"}
          stroke={i < count ? filledColor : emptyColor}
          strokeWidth={2}
        />
      ))}
    </div>
  );
};

const Shop = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between border border-[#E2E8F0] rounded-lg px-4 py-3 mb-8">
          <p className="text-sm text-[#718096]">Showing 1–3 Of 34 Results</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border border-[#E2E8F0] rounded-md px-3 py-1.5 text-sm text-[#2B303A] cursor-pointer">
              Default Sorting
              <ChevronDown size={16} className="text-[#718096]" />
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setView("grid")}
                className={`p-1.5 rounded ${
                  view === "grid" ? "bg-[#FF6363] text-white" : "text-[#718096] hover:bg-gray-100"
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-1.5 rounded ${
                  view === "list" ? "bg-[#FF6363] text-white" : "text-[#718096] hover:bg-gray-100"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 flex-shrink-0">
            {/* Search Box */}
            <div className="mb-6">
              <h3 className="text-base font-bold text-[#2B303A] mb-2">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full border border-[#E2E8F0] rounded-md px-4 py-2.5 pr-10 text-sm text-[#2B303A] focus:outline-none focus:border-[#FF6363]"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718096]" size={18} />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-base font-bold text-[#2B303A] mb-3">Categories</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 rounded-md bg-[#FF6363] text-white text-sm font-medium">
                  Arts & Photography
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="w-full text-left px-4 py-2 rounded-md border border-[#E2E8F0] bg-white text-[#2B303A] text-sm font-medium hover:border-[#FF6363] hover:text-[#FF6363] transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Status */}
            <div className="mb-6">
              <h3 className="text-base font-bold text-[#2B303A] mb-3">Product Status</h3>
              <div className="space-y-3">
                <div className="relative">
                  <select className="w-full border border-[#E2E8F0] rounded-md px-4 py-2.5 text-sm text-[#2B303A] focus:outline-none focus:border-[#FF6363] appearance-none bg-white">
                    <option>In Stock</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718096]" size={16} />
                </div>
                <div className="relative">
                  <select className="w-full border border-[#E2E8F0] rounded-md px-4 py-2.5 text-sm text-[#2B303A] focus:outline-none focus:border-[#FF6363] appearance-none bg-white">
                    <option>On Sale</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718096]" size={16} />
                </div>
              </div>
            </div>

            {/* Filter By Price */}
            <div className="mb-6">
              <h3 className="text-base font-bold text-[#2B303A] mb-3">Filter By Price</h3>
              <div className="relative h-2 mb-4">
                <div className="absolute h-full w-full bg-[#E2E8F0] rounded-full"></div>
                <div className="absolute h-full w-2/3 bg-[#FF6363] rounded-full"></div>
              </div>
              <div className="relative h-2 -mt-2 mb-4">
                <div
                  className="absolute w-4 h-4 bg-[#FF6363] rounded-full shadow border-2 border-white cursor-pointer"
                  style={{ left: "20%", transform: "translateX(-50%)" }}
                ></div>
                <div
                  className="absolute w-4 h-4 bg-[#FF6363] rounded-full shadow border-2 border-white cursor-pointer"
                  style={{ left: "66%", transform: "translateX(-50%)" }}
                ></div>
              </div>
              <div className="flex items-center justify-between">
                <button className="px-4 py-1.5 bg-[#FF6363] text-white text-xs font-medium rounded-md">
                  Filter
                </button>
                <p className="text-xs text-[#718096]">Price: $100 — $1000</p>
              </div>
            </div>

            {/* By Review */}
            <div className="mb-2">
              <h3 className="text-base font-bold text-[#2B303A] mb-3">By Review</h3>
              <div className="space-y-3">
                {[
                  { stars: 5, count: 35 },
                  { stars: 4, count: 24 },
                  { stars: 3, count: 15 },
                  { stars: 2, count: 2 },
                  { stars: 1, count: 1 },
                ].map((item) => (
                  <label key={item.stars} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#FF6363] rounded" />
                    <StarRating count={item.stars} />
                    <span className="text-xs text-[#718096]">({item.count})</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "flex flex-col gap-4"
              }
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white border border-[#E2E8F0] rounded-lg overflow-hidden ${
                    view === "list" ? "flex flex-row" : ""
                  }`}
                >
                  {/* Image Container */}
                  <div
                    className={`relative bg-[#FFF2F2] flex items-center justify-center ${
                      view === "list" ? "w-48 h-40 flex-shrink-0" : "aspect-[4/5]"
                    }`}
                  >
                    <div className="w-3/4 h-3/4 bg-gray-200 rounded-md"></div>
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`absolute top-2 text-xs font-bold px-2.5 py-1 rounded-full ${
                          badge === "Hot"
                            ? "left-2 bg-[#1E242B] text-white"
                            : "right-2 bg-[#FF6363] text-white"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Card Info */}
                  <div className={`p-3 flex flex-col ${view === "list" ? "flex-1 justify-center" : ""}`}>
                    <h4 className="text-sm font-bold text-[#2B303A] truncate mb-2">{product.title}</h4>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#2B303A]">${product.price.toFixed(2)}</span>
                        {product.oldPrice && (
                          <span className="text-xs text-[#718096] line-through">
                            ${product.oldPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={13} fill="#FFB800" stroke="#FFB800" strokeWidth={2} />
                        <span className="text-xs text-[#718096]">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center justify-center gap-1.5 text-[#FF6363] text-sm font-semibold hover:bg-[#FFF2F2] transition-colors py-1.5 rounded-md">
                      <ShoppingCart size={15} />
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
