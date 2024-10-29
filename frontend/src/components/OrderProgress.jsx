import React from "react";

function OrderProgress({ currentStep}) {
  const steps = [
    { label: "In Progress" },
    { label: "Video Confirm or Rejected" },
    { label: "Out for Delivery" },
    { label: "Delivered" },
  ];

  return (
    <div className="w-full flex items-center justify-between py-5 relative">
      <div className="absolute top-1/2 left-0 h-[1px] -z-10 bg-[#d2d2d2] w-full transform -translate-y-1/2"></div>
      <div
        className={`absolute top-1/2 left-0 h-[1px] bg-[#4ED493] transform -translate-y-1/2 transition-all duration-500`}
        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
      ></div>

      {steps.map((step, index) => (
        <div key={index} className="flex items-center flex-col">
          <p
            className={`flex items-center justify-center rounded-full w-12 h-12 ${
              index <= currentStep
                ? "bg-[#4ED493] text-white"
                : "bg-gray-300 text-white"
            }`}
          >
            {index + 1}
          </p>
          <p className="text-center">{step.label}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderProgress;
