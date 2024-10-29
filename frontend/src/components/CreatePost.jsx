import React from "react";
import { LuPlus } from "react-icons/lu";
import CreatedPost from "./CreatedPost";

function CreatePost() {
  return (

    <div className="w-64 rounded-lg h-60 border-2 text-center overflow-hidden border-[#a7eac9]">
      <div className="text-6xl text-[rgba(106,106,106,0.88)] bg-[#edfbf4] flex justify-center items-center h-[80%] cursor-pointer">
        <LuPlus />
      </div>
      <div className="h-[20%] pt-2">
        <h2 className="text-lg text-[#333]">Create Post</h2>
      </div>
    </div>
  );
}

export default CreatePost;
