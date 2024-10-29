import React from "react";
import { IoShirtSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function CategoryCard() {
  return (
    <div>

    <Link className="flex flex-col gap-4 items-center py-5 justify-center w-full h-auto">
        <div className="text-6xl p-10 rounded-full bg-[#f3f3f3] text-[#4ED493]">

        <IoShirtSharp />
        </div>

        <h2 className="text-2xl">Cloth</h2>
     
    </Link>
    </div>
  );
}

export default CategoryCard;
