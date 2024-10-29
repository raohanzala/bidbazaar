import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";

function Header() {

  return (
    <div className="w-full bg-white">
      <div className="border-b w-full">
      <div className="flex justify-between items-center py-4 px-5 max-w-[1444px] mx-auto bg-white">
        <Link to="/">
          <Logo/>
        </Link>
        <nav className="flex gap-4 text-sm text-[#333]">
          <NavLink to="/about">What's a BidBazaar?</NavLink>
          <NavLink to="/posts">All products</NavLink>
          <NavLink to="/myposts">My posts</NavLink>
          {/* <NavLink to='/about'>What's a BidBazaar</NavLink> */}
        </nav>

        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:shadow-md transition-shadow duration-300 ">
          <span className="flex items-center pl-3">
            <FiSearch />
          </span>
          <input
            className="py-2 px-2 text-sm w-64 focus:outline-none shadow-sm"
            type="text"
            placeholder="Search your product..."
            />
        </div>

        <div className="space-x-5">
          <button className="bg-gradient-to-r from-[#4ED493] to-[#4bc1b2] hover:from-[#4bc1b2] hover:to-[#4ED493] text-[#fff] rounded-full py-2 px-4 font-semibold text-sm shadow-sm">SignUp</button>
          <button className="bg-white border  text-[#333] rounded-full py-2 px-4 font-semibold text-sm">Become a seller</button>
        </div>
      </div>
            </div>

      <div className="shadow-md py-3 px-4">
      <nav className="flex justify-center gap-6 text-sm text-[#333]">
          <NavLink to="/about">Men's Clothing</NavLink>
          <NavLink to="/posts">Tv and Home Appliances</NavLink>
          <NavLink to="/myposts">Watches and Jewellery</NavLink>
          <NavLink to="/myposts">Crockery</NavLink>
          <NavLink to="/about">Men's Clothing</NavLink>
          <NavLink to="/posts">Tv and Home Appliances</NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
