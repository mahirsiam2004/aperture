import React from "react";

import heroBg from "../assets/hero-bg-1.jpg";
import Model from "../assets/hero-girl-1.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-[500px] lg:min-h-[600px]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay to make text pop */}
      <div className="hero-overlay bg-opacity-50"></div>

      <div className="flex">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">New Collection</h1>
            <p className="mb-5">
              Upgrade your lifestyle with our latest arrivals. Quality meets
              affordability in every piece.
            </p>
            <button className="btn btn-primary px-8">Get Started</button>
          </div>
        </div>

        <div>
          <img className="h-200" src={Model} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
