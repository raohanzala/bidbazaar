import React from "react";

const OrderDetail = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-bold mb-4">Order Details</h2>
        <p className="text-lg font-semibold">Buyer: {order.buyer}</p>
        <p>Total: {order.total} PKR</p>
        <p>Date: {order.date}</p>
        <h3 className="mt-4 font-semibold">Items:</h3>
        <ul className="list-disc pl-5">
          {order.items.map((item, index) => (
            <li key={index} className="text-gray-600">
              {item}
            </li>
          ))}
        </ul>
        <button
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
