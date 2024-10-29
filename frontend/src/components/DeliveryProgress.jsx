import React, { useState } from "react";
import { FaVideo, FaCheck, FaTimes, FaBell } from "react-icons/fa";
import ProgressSellerVideo from "./ProgressSellerVideo";
import ProgressBuyerVideo from "./ProgressBuyerVideo";
import { useSelector } from "react-redux";

function OrderProgress({ role, setRole, setCurrentStep }) {
  const notification = useSelector(state=> state.orderProgressVideo.notification)

  return (
    <div className="border p-8 rounded-lg shadow-lg w-full max-w-screen-xl h-screen mx-auto bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Progress</h2>
      <button
        className="mb-10 bg-slate-400 text-white py-2 px-3"
        onClick={() => setRole(role === "buyer" ? "seller" : "buyer")}
      >
        Switch to {role === "buyer" ? "Seller" : "Buyer"}
      </button>

      {/* Notification */}
      {notification && (
        <div className="flex items-center gap-2 p-3 mb-5 text-sm text-gray-700 bg-gray-100 rounded-md">
          <FaBell className="text-yellow-500" />
          <p>{notification}</p>
        </div>
      )}

      {/* Seller View */}
      {role === "seller" ?<ProgressSellerVideo/> :<ProgressBuyerVideo/>}
    </div>
  );
}

export default OrderProgress; 
