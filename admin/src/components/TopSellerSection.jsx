import React from "react";
import HeadingLink from "./HeadingLink";
import TopSellerItem from "./TopSellerItem";

function TopSellerSection() {
  return (
    <div>
      <HeadingLink heading="Top Sellers" link="/sellers" />

      <div className="bg-white rounded-xl min-h-[380px] w-full px-5 py-7 shadow-sm">
        <TopSellerItem />
        <TopSellerItem />
        <TopSellerItem />
        <TopSellerItem />
        <TopSellerItem />
        <TopSellerItem />
      </div>
    </div>
  );
}

export default TopSellerSection;
