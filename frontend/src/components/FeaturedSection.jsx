import React from "react";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import CreatePost from "./CreatePost";
import { Navigation, Autoplay } from "swiper/modules";
import HeadingLink from "./headingLink";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function FeaturedSection() {
  return (
    <div className="py-12">
      <HeadingLink heading="Featured Post" link="/posts" />
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{ delay: 1000 }}
      >
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index}>
            <ProductCard />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        {/* <div className="custom-prev">
          <button className="absolute text-2xl text-[#46bf84] bg-white p-1 rounded-full left-4 z-10 top-1/2 transform -translate-y-1/2 shadow-lg">
            <IoIosArrowBack />
          </button>
        </div>
        <div className=" custom-next">
          <button className="absolute text-2xl bg-white p-1 rounded-full right-4 text-[#46bf84] top-1/2 z-10 transform -translate-y-1/2 shadow-lg">
            <IoIosArrowForward />
          </button>
        </div> */}
      </Swiper>
    </div>
  );
}

export default FeaturedSection;
