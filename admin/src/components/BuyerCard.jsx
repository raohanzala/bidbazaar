import React from 'react';

const BuyerCard = ({ buyer }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row p-4 transition-transform transform hover:scale-105">
      <div className="flex-shrink-0">
        <img
          src='https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='asd'
          className="w-24 h-24 object-cover rounded-full border-2 border-[#4ED493] shadow-md"
        />
      </div>
      <div className="ml-4 flex-1">
        <h3 className="text-xl font-bold text-[#333]">Polard Devin</h3>
        <p className="text-sm text-gray-600">polarddevin@gmail.com</p>
        <p className="mt-2 text-md font-semibold text-[#4ED493]">
          Total Purchases: <span className="text-lg">34,000/- PKR</span>
        </p>
      </div>
    </div>
  );
};

export default BuyerCard;
