import React, { useState } from "react";

const DeliveryProgress = () => {
  // States to manage the current stage and video upload status
  const [stage, setStage] = useState(1);
  const [videoUploaded, setVideoUploaded] = useState(false);

  // Function to simulate the seller uploading a video
  const uploadVideo = () => {
    setVideoUploaded(true);
    setStage(2); // Move to the next stage after video upload
  };

  // Functions for the buyer to confirm or reject the order
  const confirmOrder = () => setStage(3);
  const rejectOrder = () => setStage(0); // Reset if rejected

  return (
    <div className="flex flex-col items-center py-8">
      {/* Order Placed Stage */}
      <div className={`w-4/5 border-l-4 ${stage >= 1 ? 'border-green-500' : 'border-gray-300'} py-4`}>
        <div className="ml-8">
          <p className="text-xl font-semibold">Order Placed</p>
          <p className="text-gray-600">Buyer: You placed an order.</p>
        </div>
      </div>

      {/* Video Upload Stage */}
      <div className={`w-4/5 border-l-4 ${stage >= 2 ? 'border-green-500' : 'border-gray-300'} py-4`}>
        <div className="ml-8">
          <p className="text-xl font-semibold">Seller: Upload Product Video</p>
          {stage === 1 && !videoUploaded && (
            <button onClick={uploadVideo} className="mt-2 bg-green-500 text-white py-1 px-3 rounded">
              Upload Video
            </button>
          )}
          {videoUploaded && <p className="text-green-500 font-semibold mt-2">Video Uploaded</p>}
        </div>
      </div>

      {/* Buyer Confirmation Stage */}
      {videoUploaded && (
        <div className={`w-4/5 border-l-4 ${stage >= 3 ? 'border-green-500' : 'border-gray-300'} py-4`}>
          <div className="ml-8">
            <p className="text-xl font-semibold">Buyer: Confirm or Reject</p>
            {stage === 2 && (
              <div className="flex gap-4 mt-2">
                <button onClick={confirmOrder} className="bg-green-500 text-white py-1 px-3 rounded">
                  Confirm
                </button>
                <button onClick={rejectOrder} className="bg-red-500 text-white py-1 px-3 rounded">
                  Reject
                </button>
              </div>
            )}
            {stage === 3 && <p className="text-green-500 font-semibold mt-2">Order Confirmed by Buyer</p>}
          </div>
        </div>
      )}

      {/* Order Shipped Stage */}
      {stage === 3 && (
        <div className="w-4/5 border-l-4 border-green-500 py-4">
          <div className="ml-8">
            <p className="text-xl font-semibold">Order Shipped</p>
            <p className="text-gray-600">Seller: Order is in transit.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryProgress;
