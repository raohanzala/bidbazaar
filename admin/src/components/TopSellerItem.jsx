import React from 'react'
import { GoStar, GoStarFill } from 'react-icons/go'
import { HiCheckBadge } from 'react-icons/hi2'
import { MdStore } from 'react-icons/md'

function TopSellerItem() {
  return (
    <div className="pb-3 px-4 border-b flex justify-between items-center relative mb-5">
              <div className="w-12 h-12 object-cover rounded-full overflow-hidden">
                <img
                  className="w-full h-full"
                  src={
                    "https://images.unsplash.com/photo-1549049950-48d5887197a0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                />
              </div>
              <div className="absolute -top-3 rounded-sm shadow-lg -right-2 p-1 bg-gradient-to-r from-[#1f57c3] to-[#4bc1b2]">
                <h3 className="text-xs uppercase text-white">Top Rated Plus</h3>
              </div>
              <div className="mr-auto ml-5">
                <p className="text-lg flex items-center gap-1">
                  Amir Akmal{" "}
                  <span className="text-[#1f57c3] text-lg">
                    <HiCheckBadge />
                  </span>
                </p>

                <p className="flex gap-1 text-xs  items-center text-[#7f7f7f]">
                  <span className="text-[#4ED493] text-sm font-semibold">
                    <MdStore/>
                  </span>{" "}
                  Gadget Wala
                </p>
              </div>
              <div className="flex text-[#FFD700] text-xs mt-2 items-center gap-1">
                <p className="text-xs text-[#333]">Rating</p>
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStar />
              </div>
            </div>
  )
}

export default TopSellerItem