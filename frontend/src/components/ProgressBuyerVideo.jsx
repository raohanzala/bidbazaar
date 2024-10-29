import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, rejectOrder } from '../store/features/orderProgressVideoSlice'

function ProgressBuyerVideo() {

  const videos = useSelector((state)=>  state.orderProgressVideo.videos)
  const rejectionCount = useSelector(state => state.orderProgressVideo.rejectionCount)
  const orderConfirmed = useSelector(state => state.orderProgressVideo.orderConfirmed)
  const dispatch = useDispatch()

  return (
    <div>
          <p className="text-lg font-semibold mb-4 text-gray-700">
            Buyer Dashboard
          </p>
          {videos.length > 0 ? (
            <div className="flex flex-col items-start gap-4">
              <p className="text-gray-600 mb-2">
                Seller uploaded a product video. Confirm or reject the order :
              </p>
              <div className="w-full flex gap-10">
                {videos.map((video, index) => (
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
                        ? "Rejected by you"
                        : "Please confirm or reject this video"}
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={()=> dispatch(confirmOrder())}
                disabled={orderConfirmed === true}
                className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                  orderConfirmed === true ? "bg-gray-300" : "bg-[#4ED493]"
                } text-white font-medium w-full justify-center transition-colors duration-200 ease-in-out`}
              >
                <FaCheck /> Confirm Order
              </button>
              <button
                onClick={()=> dispatch(rejectOrder())}
                disabled={orderConfirmed === false}
                className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                  orderConfirmed === false || rejectionCount >= 3
                    ? "bg-gray-300"
                    : "bg-red-500"
                } text-white font-medium w-full justify-center transition-colors duration-200 ease-in-out`}
              >
                <FaTimes /> Reject Order
              </button>
            </div>
          ) : (
            <p className="text-gray-600">
              Waiting for seller to upload video...
            </p>
          )}
        </div>
  )
}

export default ProgressBuyerVideo