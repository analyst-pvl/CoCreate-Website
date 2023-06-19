"use client";
import React, { useState } from "react";

const Hero = () => {
  const [display, setDisplay] = useState(false);

  setTimeout(() => {
    setDisplay(true);
  }, 200);

  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0]">
      <div className="container pt-20 pb-40 flex flex-col items-center">
        <h1 className="font-semibold text-5xl text-center max-w-[600px]">
          SOLVING PROBLEMS, BUILDING BUSINESSES
        </h1>
        <p
          className={`text-2xl mt-10 text-center max-w-[540px] opacity-0 relative transition-all duration-500 ${
            display && "opacity-100"
          }`}
        >
          We enable bright students to build amazing startups before leaving the
          campus
        </p>
        <button className="bg-[#F0F0F0] text-black mt-7 font-semibold py-2 px-8 rounded hover:bg-gradient-to-r hover:from-sky-500 hover:to-emerald-500 to-90%">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
