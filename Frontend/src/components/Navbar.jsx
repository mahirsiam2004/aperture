import React from "react";
import Top from "./Top";
import Logo from "./LOGO/logo";
// Ensure this path is correct for your project structure
// import logo from "../assets/logo.png"; 

const Navbar = () => {
  // Define links here to avoid repeating them for mobile and desktop
  const navLinks = (
    <>
      <li><a className="font-medium">Home</a></li>
      <li><a className="font-medium">Shop</a></li>
      <li><a className="font-medium">Services</a></li>
      <li><a className="font-medium">Contact</a></li>
    </>
  );

  return (
    <div className="w-full bg-[#fafafa]">
 
      <Top />

      {/* Main Navbar */}
      <div className="navbar shadow-sm px-2 md:px-8">
        
        {/* Left Side: Mobile Menu & Logo */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo and Brand Text */}
          <a className=" flex items-center gap-2 px-2">
<Logo></Logo>
          </a>
        </div>

        {/* Center Side: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks}
          </ul>
        </div>

        {/* Right Side: Action Button */}
        <div className="navbar-end">
          <a className="btn btn-primary btn-sm md:btn-md px-6 rounded-full">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;