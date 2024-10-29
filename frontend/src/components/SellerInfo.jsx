import React from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import { HiCheckBadge } from "react-icons/hi2";
import { MdStore } from "react-icons/md";

function SellerInfo() {
  return (
    <div className="grid grid-cols-2 justify-items-center items-center mb-16 px-5">
      <div className="overflow-hidden rounded-full w-44 h-44">
        <img
          className="w-full h-full object-cover "
          src={
            "https://img.freepik.com/free-photo/medium-shot-smiley-man-sitting-desk_23-2149927603.jpg?t=st=1729768707~exp=1729772307~hmac=0ff415e497765f67faf7d4689e20433b73a9acc44c2394ac60bf93abdf35d862&w=1380"
          }
          alt=""
        />
      </div>

      <div className="py-8 justify-self-start">
        <h1 className="flex gap-2 items-center text-3xl font-semibold mb-2">
          Asif Iqbal
          <span className="text-[#1f57c3] text-xl">
            <HiCheckBadge />
          </span>
        </h1>
        <p className="flex gap-1 text-md mb-5 items-center text-[#7f7f7f]">
          <span className="text-[#4ED493] text-xl font-semibold">
            <MdStore />
          </span>
          Gadget Wala
        </p>

        <div className="flex text-[#FFD700] items-center gap-1 mb-3">
            <GoStarFill/>
            <GoStarFill/>
            <GoStarFill/>
            <GoStar/>
            <p className="text-xs text-[#333]">Rating 4.00</p>
            </div>
      </div>
    </div>
  );
}

export default SellerInfo;
