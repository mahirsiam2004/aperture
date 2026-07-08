import React from "react";
import heroBg from "../assets/hero-bg-1.jpg";
import Model from "../assets/hero-girl-1.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-[500px] lg:min-h-[620px] relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* 1. Replaced the dark black overlay with a vibrant coral/terracotta gradient linear mask */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#591C24]/95 via-[#913B34]/85 to-[#E8735C]/20 mix-blend-multiply"
      ></div>

      {/* 2. Structured layout to align content nicely and keep it clean */}
      <div className="hero-content max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 z-10 px-4 sm:px-8">
        
        {/* Left Side: Typography and CTA */}
        <div className="text-left max-w-2xl text-white space-y-5">
          <div className="space-x-2 flex items-center">
            <span className="bg-[#A43B33] text-white text-xs font-semibold px-2.5 py-1 rounded">
              Editor Choice Best Books
            </span>
            <span className="bg-neutral-900/40 text-white text-xs font-semibold px-2.5 py-1 rounded border border-white/20">
              Up To 50% Off
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
            Your Next Favorite Book <br />
            Is Just A <span className="text-[#E8735C] underline decoration-2 underline-offset-4">Click Away</span>
          </h1>

          <p className="text-sm md:text-base text-gray-200 font-medium max-w-lg leading-relaxed">
            Upgrade your lifestyle with our latest arrivals. Quality meets
            affordability in every piece. Sed ac arcu sed felis vulputate molestie.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button className="btn border-none bg-[#E8735C] hover:bg-[#d65f49] text-white font-bold px-8 rounded-l-full rounded-r-full shadow-lg">
              Shop Now &rarr;
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black font-bold px-8 rounded-l-full rounded-r-full">
              View All Books
            </button>
          </div>
        </div>

        {/* Right Side: Image container positioned neatly */}
        <div className="self-end mt-6 md:mt-0 max-w-md lg:max-w-lg">
          <img 
            className="w-full h-auto object-cover object-bottom max-h-[450px] lg:max-h-[550px]" 
            src={Model} 
            alt="Model highlighting collection" 
          />
        </div>

      </div>




    </div>
  );
};

export default Banner;