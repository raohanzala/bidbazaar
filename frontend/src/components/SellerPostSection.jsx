import React from "react";
import HeadingLink from "./headingLink";
import ProductCard from "./ProductCard";

function SellerPostSection() {
  return (
    <div className="py-10">
      <HeadingLink heading="Recent Post" link="/posts" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
      {[...Array(8)].map(() => (
            <ProductCard/>
        ))}
      </div>
    </div>
  );
}

export default SellerPostSection;
