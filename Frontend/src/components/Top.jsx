import { ChevronDown, Globe, Van } from "lucide-react";
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaThreads } from "react-icons/fa6";
const Top = () => {
  return (
    <div className="bg-[#D16655] text-white">
      <div className=" flex justify-between max-w-[1220px] mx-auto ">
        <div className="flex gap-2">
          <Van />
          <h2>Fastest Delivery In Your City</h2>
        </div>

        <div className="flex items-center gap-2">
          <Globe />
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className=" m-1 flex">
              <h2>English</h2> <ChevronDown />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Bangla</a>
              </li>
              <li>
                <a></a>
              </li>
            </ul>
          </div>

          <div className="flex items-center  gap-3">
            <h2 className="mx-4">|</h2>
            <ImFacebook2 />
            <BiLogoInstagramAlt />
            <FaThreads />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
