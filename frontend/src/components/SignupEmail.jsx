import React, { useState } from "react";
import SeactionHeading from "./SeactionHeading";

function SignupEmail() { 

    const onSubmitHandler = (e)=> {
        e.preventDefault()
    }

  return (
      <div className=" flex items-center flex-col justify-center  rounded-lg py-12 w-full">
        <h2 className="text-3xl font-semibold text-center text-[#333] mb-6">
          Join Our Community
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Sign up to receive the latest news, updates, and exclusive offers!
        </p>
        <form onSubmit={onSubmitHandler} className="flex gap-2" >
                <input className="border p-3 rounded-md flex w-[400px] focus:shadow-md outline-none transition-shadow duration-300 " required type="email" placeholder="Enter your email for newslatter" />
                <button type="submit" className="bg-gradient-to-r from-[#4ED493] to-[#4bc1b2] hover:from-[#4bc1b2] hover:to-[#4ED493] border-none text-[#fff] rounded-md py-2 px-4 font-semibold text-md shadow-sm">SignUp</button>
        </form>
        <p className="text-center text-gray-600 mt-4 text-sm">
          By signing up, you agree to our{" "}
          <span className="text-[#4ED493] cursor-pointer">Terms of Service</span> and{" "}
          <span className="text-[#4ED493] cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
  );
}

export default SignupEmail;
