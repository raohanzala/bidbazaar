import React from "react";
import BuyerCard from "../components/BuyerCard";
import SearchSortBar from "../components/SearchSortBar";

const Buyers = () => {
  return (
    <div>
      <SearchSortBar
        placeholder="Search buyers"
        options={["name", "date", "purchase"]}
      />
      <div className="grid grid-cols-3 gap-8 w-full ">
        <BuyerCard />
        <BuyerCard />
        <BuyerCard />
        <BuyerCard />
        <BuyerCard />
        <BuyerCard />
        <BuyerCard />
      </div>
    </div>
  );
};

export default Buyers;
