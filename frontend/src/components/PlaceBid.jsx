import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { FiHash } from "react-icons/fi";
import { RiTimerLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function PlaceBid() {

  const navigate = useNavigate()

  return (
    <div className="w-full border mb-4">
      <div className="py-2 px-5">
        <div className="flex justify-between border-b-2 mb-2">
          <div className="flex items-center gap-3 mb-1">
            <p>Current Bid</p>
            <p className="flex items-center text-sm gap-1 text-[#7f7f7f]">
              <span className="text-[#4ED493]">
                <BsPersonFill />
              </span>
              Kamran Gull
            </p>
          </div>

          <h3 className="text-3xl font-semibold mb-3">19,500 PKR</h3>
        </div>

        <div className="flex justify-between px-4">
          <div className="flex gap-3 items-center ">
            <p className="text-lg">End Date</p>
            <p className="flex items-center text-sm gap-1 text-[#7f7f7f]">
              <span className="text-[#4ED493]">
                <RiTimerLine />
              </span>
              2 days
            </p>
          </div>
          <div className="flex gap-3 items-center border-x-2 px-5">
            <p className="text-lg">Seller</p>
            <p className="flex items-center text-sm gap-1 text-[#7f7f7f]">
              <span className="text-[#4ED493]">
                <BsPersonFill />
              </span>
              Kashif Ameen
            </p>
          </div>
          <div className="flex gap-3 items-center ">
            <p className="text-lg">Bids</p>
            <p className="flex items-center text-sm gap-1 text-[#7f7f7f]">
              <span className="text-[#4ED493]">
                <FiHash />
              </span>
              12
            </p>
          </div>


        </div>


      </div>
      <div className="bg-[#a7eac9]">
        <button onClick={()=> navigate('/orderdetails')}  className="text-lg font-semibold bg-[#4ED493] text-white w-full border-0 px-5 py-2">
          Place Your Bid
        </button>
      </div>
    </div>
  );
}

export default PlaceBid;
