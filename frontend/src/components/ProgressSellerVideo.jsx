import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addVideo } from "../store/features/orderProgressVideoSlice";

function ProgressSellerVideo() {
  const videos = useSelector((state) => state.orderProgressVideo.videos);
  const rejectionCount = useSelector(
    (state) => state.orderProgressVideo.rejectionCount
  );
  const orderConfirmed = useSelector(
    (state) => state.orderProgressVideo.orderConfirmed
  );
  const dispatch = useDispatch();



  const [orderStatus, setOrderStatus] = useState("PENDING"); // Initialize with PENDING
  const [notification, setNotification] = useState("");

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    
    if (
      orderStatus === "APPROVED" &&
      selectedStatus === "DELIVERY"
    ) {
      setOrderStatus("DELIVERY");
      setNotification("Order status updated to DELIVERY.");
    } else if (orderStatus === "IN-PROGRESS" && selectedStatus === "APPROVED") {
      setOrderStatus("APPROVED");
      setNotification("Order approved!");
    } else if (orderStatus === "PENDING" && selectedStatus === "IN-PROGRESS") {
      setOrderStatus("IN-PROGRESS");
      setNotification("Order status updated to IN-PROGRESS.");
    }
  };



  return (
    <div>
      <p className="text-lg font-semibold mb-4 text-gray-700">
        Seller Dashboard
      </p>
      {rejectionCount < 3 ? (
        <div>
          <label htmlFor="statusSelect" className="text-gray-600 font-semibold">
            Order Status :
          </label>
          <select
            id="statusSelect"
            value={orderStatus}
            onChange={handleStatusChange}
            className="block w-full mt-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4ED493] focus:border-[#4ED493] text-gray-700"
            disabled={orderStatus === "DELIVERY"}
          >
            <option value="PENDING" disabled>
              PENDING
            </option>
            <option value="IN-PROGRESS" disabled={orderStatus === "DELIVERY"}>
              IN-PROGRESS
            </option>
            <option
              value="APPROVED"
              disabled={orderStatus === "PENDING" || orderStatus === "DELIVERY"}
            >
              APPROVED
            </option>
            <option value="DELIVERY" disabled={orderStatus !== "APPROVED"}>
              DELIVERY
            </option>
          </select>

          {/* Progress Steps */}
          <div className="mt-8 mb-12">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-gray-600">Progress :</p>
              <p
                className={`text-sm font-bold ${
                  orderStatus === "DELIVERY"
                    ? "text-[#4ED493]"
                    : "text-gray-500"
                }`}
              >
                {orderStatus}
              </p>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full h-2">
              <div
                className={`absolute h-2 rounded-full transition-all duration-300 ${
                  orderStatus === "PENDING"
                    ? "bg-gray-300 w-1/5"
                    : orderStatus === "IN-PROGRESS"
                    ? "bg-yellow-400 w-2/5"
                    : orderStatus === "APPROVED"
                    ? "bg-blue-500 w-4/5"
                    : "bg-[#4ED493] w-full"
                }`}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>PENDING</span>
              <span>IN-PROGRESS</span>
              <span>APPROVED</span>
              <span>DELIVERY</span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <label
              htmlFor="video-upload"
              className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer ${
                videos.some((video) => video.status === "pending")
                  ? "bg-gray-300"
                  : "bg-[#4ED493]"
              } text-white transition-colors duration-200 ease-in-out`}
            >
              <FaVideo />
              {videos.some((video) => video.status === "pending")
                ? "Video Uploaded"
                : "Upload Product Video"}
            </label>
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              onChange={() => dispatch(addVideo(event))}
              className="hidden"
              disabled={videos.some((video) => video.status === "pending")}
            />
            <div className="mt-4 flex gap-10">
              {videos.map((video, index) => {
                return (
                  <div key={index} className="w-full">
                    <video
                      src={video.url}
                      controls
                      disabled={video.status === "rejected"}
                      className={`w-full rounded-lg max-w-80 shadow-md ${
                        video.status === "rejected" ? "opacity-50" : ""
                      }`}
                    />
                    <p
                      className={`text-sm mt-2 ${
                        video.status === "rejected"
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    >
                      {video.status === "rejected"
                        ? "Rejected by buyer"
                        : "Waiting for buyer confirmation..."}
                    </p>
                  </div>
                );
              })}
            </div>
            {rejectionCount > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                {rejectionCount < 2
                  ? `${
                      3 - rejectionCount
                    } chance(s) remaining for video upload.`
                  : "Final upload attempt."}
              </p>
            )}
            {/* {orderConfirmed && (
              <button
                // onClick={handleStatusChange}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Mark as Delivery
              </button>
            )} */}
          </div>
        </div>
      ) : (
        <p className="text-red-500 font-semibold">
          Order automatically canceled due to 3 rejections.
        </p>
      )}
    </div>
  );
}

export default ProgressSellerVideo;
