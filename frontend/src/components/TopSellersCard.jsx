import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { FaRegClock, FaRegMoneyBillAlt, FaRegStar } from "react-icons/fa";
import { GoStar, GoStarFill } from "react-icons/go";
import { HiCheckBadge } from "react-icons/hi2";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdStore } from "react-icons/md";
import { Link } from "react-router-dom";

function TopSellersCard() {
  return (
    <Link
      to="/sellerdetails"
      className="flex items-center p-5 justify-between relative rounded-lg shadow-sm border hover:shadow-lg hover:border-[#4ED493] w-full duration-300"
    >
        <div className="absolute -top-3 rounded-sm shadow-lg -right-4 p-1 bg-gradient-to-r from-[#1f57c3] to-[#4bc1b2]">
          <h3 className="text-xs uppercase text-white">Top Rated Plus</h3>
        </div>
      <div>
        <h4 className="text-xl flex items-center gap-1 md:text-2xl mb-1 font-semibold">Amir Shahzad <span className="text-[#1f57c3] text-lg"><HiCheckBadge/></span></h4>{" "}
        {/* Responsive text size */}
        <p className="flex gap-1 text-md mb-5 items-center text-[#7f7f7f]">
         <span className="text-[#4ED493] text-xl font-semibold"><MdStore />
         </span>  Gadget Wala
        </p>

            <div className="flex text-[#FFD700] items-center gap-1 mb-3">
            <GoStarFill/>
            <GoStarFill/>
            <GoStarFill/>
            <GoStar/>
            <p className="text-xs text-[#333]">Rating 4.00</p>
            </div>

            <div className="flex gap-2">
                <div className="bg-[#f1f1f1] capitalize text-xs text-[#555] p-1 px-2 rounded-[30px]">Electronic</div>
                <div className="bg-[#f1f1f1] capitalize text-xs p-1 px-2 rounded-[30px]">gadgets</div>
                <div className="bg-[#f1f1f1] capitalize text-xs p-1 px-2 rounded-[30px]">electronic</div>
            </div>
      </div>

      <div>
        <img className="w-28 h-28 rounded-full object-cover " src={'https://www.mediabistro.com/wp-content/uploads/2016/06/successful-freelancer-repeat-work_opt.jpg'} alt="" />
      </div>
    </Link>
  );
}

export default TopSellersCard;
