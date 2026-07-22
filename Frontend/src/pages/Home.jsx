import React from "react";
import Banner from "../components/Banner";
import { HandCoins, Headset, Shield, Truck } from "lucide-react";
import FeaturedBooks from "../components/FeaturedBooks";
import TopSellingBooks from "../components/TopSellingBooks";

export const Home = () => {
  return (
    <div className="geomini">
      <Banner></Banner>
      <div className="mt-10 h-20 p-2 flex items-center bg-[#FFEFEF] rounded-2xl">
        <div className="flex gap-2 bg-[#FFEFEF] w-2xs mx-auto">
          <div className="">
            <div className="bg-[#FF7B6B] p-4 rounded-2xl">
              <Truck className="text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold">Return & refund</h2>
            <p className="text-[#949191] text-[12px]">Money back guarantee</p>
          </div>
        </div>


        <div className="flex gap-2 bg-[#FFEFEF] w-2xs">
          <div className="">
            <div className="bg-[#FF7B6B] p-4 rounded-2xl">
              <Shield className="text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold">
Secure Payment</h2>
            <p className="text-[#949191] text-[12px]">30% off by subscribing

</p>
          </div>
        </div>
        <div className="flex gap-2 bg-[#FFEFEF] w-2xs">
          <div className="">
            <div className="bg-[#FF7B6B] p-4 rounded-2xl">
              <Headset className="text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold">Quality Support</h2>
            <p className="text-[#949191] text-[12px]">Always online 24/7</p>
          </div>
        </div>
        <div className="flex gap-2 bg-[#FFEFEF] w-2xs">
          <div className="">
            <div className="bg-[#FF7B6B] p-4 rounded-2xl">
              <HandCoins  className="text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold">Daily Offers</h2>
            <p className="text-[#949191] text-[12px]">20% off by subscribing</p>
          </div>
        </div>
      </div>


{/* Top Selling Books */}
      <TopSellingBooks></TopSellingBooks>

      {/* Featured Books */}
      <FeaturedBooks></FeaturedBooks>
    </div>
  );
};
