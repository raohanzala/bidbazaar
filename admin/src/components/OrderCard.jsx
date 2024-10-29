import React from "react";

const OrderCard = ({ order, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105"
      onClick={onClick}
    >
      <h3 className="text-xl font-bold">{order.buyer}</h3>
      <p className="text-gray-600">Total: {order.total} PKR</p>
      <p className="text-gray-400">Date: {order.date}</p>
    </div>
  );
};

export default OrderCard;
