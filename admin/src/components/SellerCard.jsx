import React from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import { HiCheckBadge } from "react-icons/hi2";
import { MdStore } from "react-icons/md";

const SellerCard = ({ seller }) => {
  return (
    <div className="bg-white rounded-md border transition-transform transform hover:scale-105">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="mens"
          className="w-full min-h-16 max-h-24 rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute bottom-2 left-2 text-white">
          <h3 className="text-lg font-bold">
            David John{" "}
            
          </h3>
          <p className="flex gap-1 text-xs  items-center text-white">
            <span className="text-[#4ED493] text-sm font-semibold">
              <MdStore />
            </span>{" "}
            Gadget Wala
          </p>
        </div>
        <div className="absolute -top-3 rounded-sm shadow-lg -right-2 p-1 bg-gradient-to-r from-[#1f57c3] to-[#4bc1b2]">
          <h3 className="text-xs uppercase text-white">Top Rated Plus</h3>
        </div>
      </div>

      <div className="p-4">

      <div className="flex text-[#FFD700] items-center gap-1 mb-3">
            <GoStarFill/>
            <GoStarFill/>
            <GoStarFill/>
            <GoStar/>
            <p className="text-xs text-[#333]">Rating 4.00</p>
            </div>

        <h4 className="text-gray-700 font-semibold">Total Sales :</h4>
        <p className="text-xl font-bold text-[#4ED493]">200,000/- PKR</p>

        {/* <button className="mt-4 bg-[#4ED493] text-white py-2 px-4 rounded-md hover:bg-[#4bc1b2] transition duration-200 w-full">
          View Profile
        </button> */}
      </div>
    </div>
  );
};

export default SellerCard;
