import React from 'react'
import { FaRegClock, FaRegMoneyBillAlt } from 'react-icons/fa'
import { MdOutlineNumbers } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function BiddingInfoBoar() {

  return (
    <div className="flex justify-between items-center w-full p-4 py-3 rounded-md bg-[rgba(30,30,30,0.75)] backdrop-blur-md backdrop-brightness-75 shadow-lg">
            <div className="flex gap-2 text-xl uppercase items-center">
              <div className="text-[#FF5E5E]">
                <FaRegClock />
              </div>
              <p className="text-slate-200">Time left</p>
              <p className="font-bold text-slate-50">2:43:12</p>
            </div>

            <div className="flex gap-2 text-xl uppercase items-center">
              <div className="text-[#FF5E5E]">
                <MdOutlineNumbers />
              </div>
              <p className="text-slate-200">Bids</p>
              <p className="font-bold text-slate-50">10</p>
            </div>
            <div className="flex gap-2 text-xl uppercase items-center">
              <div className="text-[#FF5E5E]">
                <FaRegMoneyBillAlt />
              </div>
              <p className="text-slate-200">High Bid</p>
              <p className="font-bold text-slate-50">10,000/- PKR</p>
            </div>
          </div>
  )
}

export default BiddingInfoBoar