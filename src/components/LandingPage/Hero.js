"use client";
import React, { useState } from "react";

const Hero = () => {
  const [display, setDisplay] = useState(false);

  setTimeout(() => {
    setDisplay(true);
  }, 200);

  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0] relative">
      <div className="hidden lg:block absolute w-16 h-16 rounded-md bg-[#D6435D] top-10 left-20"></div>
      <div className="hidden lg:block absolute w-16 h-16 rounded-md bg-[#463AD4] top-10 right-20"></div>
      <div className="hidden lg:block absolute w-16 h-16 rounded-md bg-[#3EBDD9] bottom-40 left-36"></div>
      <div className="hidden lg:block absolute w-16 h-16 rounded-md bg-[#E7B73D] bottom-40 right-36"></div>
      <img
        className="hidden lg:block absolute w-32 h-32 rounded-md bottom-96 left-48"
        src="/RotatingCube1.gif"
      ></img>
      <img
        className="hidden lg:block absolute w-32 h-32 rounded-md bottom-96 right-48"
        src="/RotatingCube2.gif"
      ></img>
      <div className="container py-20 flex flex-col items-center">
        <h1 className="font-semibold text-4xl lg:text-5xl text-center max-w-[600px]">
          SOLVING PROBLEMS, BUILDING BUSINESSES
        </h1>
        <p
          className={`text-xl lg:text-2xl mt-10 text-center max-w-[540px] opacity-0 relative transition-all duration-500 ${
            display && "opacity-100"
          }`}
        >
          A venture studio for cocreation
        </p>
        <button
          className="bg-[#F0F0F0] text-black mt-7 font-semibold py-2 px-8 rounded hover:bg-gradient-to-r hover:from-sky-500 hover:to-emerald-500 to-90%"
          onClick={() => {
            window.open(
                "https://www.createoncampus.org/",
              "_blank"
            );
          }}
        >
          Foundation
        </button>
        <button
          className="bg-[#F0F0F0] text-black mt-7 font-semibold py-2 px-8 rounded hover:bg-gradient-to-r hover:from-sky-500 hover:to-emerald-500 to-90%"
          onClick={() => {
            window.open(
                "https://www.arambh.vc/",
              "_blank"
            );
          }}
        >
          Fund
        </button>
        <img src="/hero2.gif" className="w-56 mt-10" />
      </div>
    </div>
  );
};

export default Hero;
