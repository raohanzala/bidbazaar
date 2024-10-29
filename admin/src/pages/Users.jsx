import React from "react";
import TopSellerCard from "../components/SellerCard";
import SearchSortBar from "../components/SearchSortBar";

const Users = () => {
  return (
    <div>
      <SearchSortBar
        placeholder="Search sellers"
        options={["date", "name", "rating", "sales"]}
      />

      <div className="grid grid-cols-4 gap-8 w-full ">
        <TopSellerCard />
        <TopSellerCard />
        <TopSellerCard />
        <TopSellerCard />
        <TopSellerCard />
        <TopSellerCard />
        <TopSellerCard />
        <TopSellerCard />
      </div>
    </div>
  );
};

export default Users;
