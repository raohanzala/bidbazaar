import React from "react";
import { FaRegClock, FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function PostCard() {
  return (
    <Link>
    <div className="w-full border overflow-hidden rounded-xl">
      <div className="relative border-b-2 border-[#4ED493]">
        <div className="min-h-80 w-full">
          <img
            className="w-full h-full object-cover"
            src={
              "https://img.freepik.com/free-photo/sportive-man-black-shirt-posing_114579-17580.jpg?t=st=1729760655~exp=1729764255~hmac=75d63feae5e8406ddb1be761c4430198d71b3b78acdb1c54b8d4b33f7d9d7d4f&w=1380"
            }
            alt=""
          />
        </div>
        <div className="absolute bottom-3  left-2 flex gap-4 bg-[rgba(54,54,54,0.65)] py-1 px-3 shadow-2xl rounded-md text-gray-50 text-lg">
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

      <div className="bg-white py-3 px-4">
        <h2 className="text-2xl mb-3 font-semibold">Men's Round Neck T-Shirt</h2>
        <p className="text-lg text-[#7f7f7f]">
          6-Speed Manual, S54 6-Cylinder, Southern-Owned, Some Modifications
        </p>

      </div>
      </div>
    </Link>
  );
}

export default PostCard;
