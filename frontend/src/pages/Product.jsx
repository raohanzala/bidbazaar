import React from "react";
import { FaRegClock, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineNumbers, MdStore } from "react-icons/md";
import ProductDetailsImage from "../components/ProductDetailsImage";
import BiddingInfoBoar from "../components/BiddingInfoBoar";
import PlaceBid from "../components/PlaceBid";
import ProductCard from "../components/ProductCard";
import SeactionHeading from "../components/SeactionHeading";
import HeadingLink from "../components/headingLink";
import { BsPersonCircle } from "react-icons/bs";
import { HiCheckBadge } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

function Product() {

  const navigate = useNavigate()

  return (
    <div className="w-full max-w-screen-xl mx-auto py-10">
      <ProductDetailsImage />

      <hr />

      <div className="grid grid-cols-[2fr_1fr] gap-8 mt-2 py-3">
        <div>
          <div className="flex gap-3 mb-7">
            <BiddingInfoBoar />
            <button onClick={()=> navigate('/orderdetails')} className="font-semibold text-nowrap text-lg uppercase bg-gradient-to-r text-slate-50 rounded-md px-3 py-2 from-[#4ED493] to-[#4bc1b2] hover:from-[#4bc1b2] hover:to-[#4ED493]">
              Place Bid
            </button>
          </div>

          <div className="mb-5  p-4 border">
            <h1 className="text-3xl font-semibold mb-2">Grapes 2kg</h1>

            <p className="flex gap-1 text-md mb-4 items-center text-[#7f7f7f]">
              <span className="text-[#4ED493] text-xl font-semibold">
                <MdStore />
              </span>{" "}
              <h4 className="flex items-center gap-2 text-[#7f7f7f]"><Link to='/sellerdetails' className='hover:underline'>Gedget Wala</Link> </h4>
            </p>

            <div className="">
              <h3 className="text-xl font-semibold mb-2">Product Details</h3>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                excepturi beatae repudiandae quam temporibus aspernatur deserunt
                doloremque minima nemo, id sequi dolor, laboriosam facere nisi
                voluptates ad praesentium magnam dolore, cupiditate ducimus.
                Iste veniam earum quidem id unde assumenda, magnam reiciendis
                sequi laudantium repellendus illo nemo dignissimos facilis,
                deserunt minima vitae iure inventore voluptas quam alias! Eum
                hic est a ab magnam, sed inventore quasi quibusdam? Eum
                laboriosam, minus vitae expedita quam temporibus doloremque
                atque voluptatibus? Harum accusamus nisi voluptatum provident
                maiores natus repellat inventore ipsum minima, optio sint cum ut
                quo veritatis quod, quae repellendus debitis nemo. Dicta, odit!
              </p>
            </div>
          </div>
          <PlaceBid />


<div>
    
    <div>


    <h3 className="text-2xl font-semibold mb-2">Comments & Bids</h3>
    </div>

    <input type="text" placeholder="Add a Comment..." className="border-2 text-lg py-2 px-3 rounded-sm w-full" />

    <div className="space-y-5 py-4">
      <div className="p-3 flex gap-3">
        <div className="text-2xl text-[#333]"><BsPersonCircle /></div>
        <div>
            <h4 className="flex items-center gap-2 text-[#7f7f7f]"><Link to='/sellerdetails' className='hover:underline'>Umer Shakeel</Link>  <span className="text-[#1f57c3] text-lg"><HiCheckBadge/></span></h4>
            <p>Alignment sheet from after the tie rods were installed. I will be in meetings for most of the day today but will try my best to get back to any questions between meetings.</p>
        </div>
      </div>
      <div className="p-3 flex gap-3">
        <div className="text-2xl text-[#333]"><BsPersonCircle /></div>
        <div>
            <h4 className="flex items-center gap-2 text-[#7f7f7f]"><Link to='/sellerdetails' className='hover:underline'>Umer Shakeel</Link>  <span className="text-[#1f57c3] text-lg"><HiCheckBadge/></span></h4>
            <p>Alignment sheet from after the tie rods were installed. I will be in meetings for most of the day today but will try my best to get back to any questions between meetings.</p>
        </div>
      </div>
      <div className="p-3 flex gap-3">
        <div className="text-2xl text-[#333]"><BsPersonCircle /></div>
        <div>
            <h4 className="flex items-center gap-2 pb-2 text-[#7f7f7f]"><Link to='/sellerdetails' className='hover:underline'>Umer Shakeel</Link>  <span className="text-[#1f57c3] text-lg"><HiCheckBadge/></span></h4>
            <div className="py-2 px-3 text-lg bg-[#edfbf4] text-[#4ed493]">Bid 18,000 PKR</div>
        </div>
      </div>
    </div>
</div>


        </div>

        <div>
          <HeadingLink heading="Featured" link="/posts" />

          <div className="grid grid-cols-2 gap-3 gap-y-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
