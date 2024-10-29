import React from "react";
import { LuPlus } from "react-icons/lu";

function CreatedPost() {
  return (
    <div className="w-full rounded-lg h-60 border text-center border-[#a7eac9] overflow-hidden">
      <div className="text-6xl text-[#333] flex justify-center items-center h-[70%] cursor-pointer">
        <img className="w-full h-full object-cover" src={"https://rhizmall.pk/wp-content/uploads/2024/01/Y20.webp"} alt="" />
      </div>
      <div className="h-[30%] pt-2 px-2">
        <h2 className="text-sm m-1">Smart Watch Ultra 2</h2>
        <p className="text-[10px] text-gray-400">3 hrs battery timing, box and charger included</p>
      </div>
    </div>
  );
}

export default CreatedPost;
