import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full max-w-screen-2xl mx-auto  px-10">
      <div className="">
        <h1 className="text-7xl font-semibold text-[#333] mb-5 animate-slideUp overflow-hidden">
          Find Your <br /> Needy Product With <span className="relative text-6xl bid-bazaar-after z-20">BidBazaar</span> !
        </h1>
        <p className="text-md text-[#555] mb-12 animate-slideUpDelayed">
          BidBazaar offers the world's best quality products tailored to your
          preferences at very low prices through bidding.
        </p>

        <div className="flex gap-8 items-center animate-slideUpMoreDelayed">
          <div className="flex items-center">
            <img
              className="w-12 -mr-4 h-12 rounded-full object-cover border-[3px] border-[#fff]"
              src={
                "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
            />
            <img
              className="w-12 -mr-4 h-12 rounded-full object-cover border-[3px] border-[#fff]"
              src={
                "https://images.pexels.com/photos/28971890/pexels-photo-28971890/free-photo-of-casual-portrait-of-a-bearded-man-in-cap.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
            />
            <img
              className="w-12 -mr-4 h-12 rounded-full object-cover border-[3px] border-[#fff]"
              src={
                "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
            />
            <img
              className="w-12 -mr-4 h-12 rounded-full object-cover border-[3px] border-[#fff]"
              src={
                "https://images.pexels.com/photos/28971890/pexels-photo-28971890/free-photo-of-casual-portrait-of-a-bearded-man-in-cap.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
            />
            <img
              className="w-12 -mr-4 h-12 rounded-full object-cover border-[3px] border-[#fff]"
              src={
                "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
            />
          </div>

          <div>
            <h3 className="text-lg">
              <span className="text-[#4ed493] font-semibold">250,000+ </span>
              satisfied customers!
            </h3>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        //   pagination={{ clickable: false }}
        autoplay={{ delay: 1000 }}
        loop={true}
        className="relative w-full h-full flex items-center justify-center md:h-[400px] lg:h-[500px] overflow-hidden"
      >
        <SwiperSlide className="relative">
          <img className='w-full h-full' src={'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
          {/* <img src={assets.hero_img} alt="Slide 1" className="w-full h-full object-cover" /> */}
          <div className="absolute top-[50%] translate-y-[-50%] left-12   bg-black bg-opacity-30 text-white p-4 rounded-lg">
            {/* <h3 className='text-sm font-semibold italic mb-3'>NEW COLLECTION</h3> */}
            <h1 className=" text-6xl font-semibold">SUMMER SALE</h1>
            <h2 className="text-xl font-semibold tracking-wider mb-7">
              Massive Discount
            </h2>
            <button className="text-lg py-2 px-5 bg-[red]">
              Discover Now !
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          {/* <img src={assets.hero_img2} alt="Slide 2" className="w-full h-full object-cover" /> */}
          <div className="absolute top-[50%] translate-y-[-50%] left-12   bg-black bg-opacity-30 text-white p-4 rounded-lg">
            <h3 className="text-sm font-semibold italic mb-3">
              NEW COLLECTION
            </h3>
            <h2 className="text-3xl font-semibold tracking-tight">
              upto 70% OFF
            </h2>
            <h1 className="tracking-wider text-6xl font-semibold mb-7">
              BIGGEST SALE
            </h1>
            <button className="text-lg py-2 px-5 bg-[red]">
              Discover Now !
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
