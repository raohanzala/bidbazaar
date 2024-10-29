import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CreatedPost from "./CreatedPost";
import "swiper/css";
import 'swiper/css/scrollbar';
import CreatePost from "./CreatePost";
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CreateSearchPost() {
  return (
    <div className="flex gap-10 py-12 bg-white rounded-xl border px-5">
      <CreatePost />
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={5}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
      >
        {/* Render multiple CreatedPost components */}
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index}>
            <CreatedPost />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-prev">
          <button className="absolute text-2xl text-[#46bf84] bg-white p-1 rounded-full left-4 z-10 top-1/2 transform -translate-y-1/2 shadow-lg">
            <IoIosArrowBack />
          </button>
        </div>
        <div className=" custom-next">
          <button className="absolute text-2xl bg-white p-1 rounded-full right-4 text-[#46bf84] top-1/2 z-10 transform -translate-y-1/2 shadow-lg">
            <IoIosArrowForward />
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default CreateSearchPost;
