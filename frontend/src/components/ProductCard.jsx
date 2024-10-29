import React from "react";
import { FaRegClock, FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <Link
      to="/product"
    >
      <div className="w-full h-auto max-w-[390px] rounded-md mx-auto shadow-md border hover:opacity-80 overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-full object-cover max-h-36 md:max-h-48 lg:max-h-60"
          src={
            "https://images.pexels.com/photos/161430/bread-coffee-food-breakfast-161430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
        />

        <div className="absolute top-2 rounded-sm shadow-lg right-2 p-1 bg-gradient-to-r from-[#4ED493] to-[#4bc1b2]">
            <h3 className="text-xs uppercase text-white">Best selling</h3>
        </div>

        <div className="absolute bottom-3  left-2 flex gap-2 bg-[rgba(54,54,54,0.65)] p-1 shadow-xl rounded-sm text-gray-50 text-xs">
          <p className="flex items-center gap-1">
            <span className="text-[#FF5E5E]">
              <FaRegClock />
            </span>
            1 Day
          </p>
          <p className="flex items-center gap-1">
            <span className="text-[#FFD700]">
              <FaRegMoneyBillAlt />
            </span>
            Bid 200/- PKR
          </p>
        </div>
        
      </div>
      <div className="p-3">
        <h4 className="text-xl md:text-2xl">Tea Cup</h4>{" "}
        {/* Responsive text size */}
        <p className="text-xs text-[#7f7f7f]">
          6-Speed Manual, S54 6-Cylinder, Southern-Owned, Some Modifications
        </p>
      </div>
      </div>
    </Link>
  );
}

export default ProductCard;
