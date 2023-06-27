"use client";
import React, { useState } from "react";
import ProfileDiv from "./ProfileDiv";
import data from "../../../data/Entrepreneurs";

const Entrepreneurs = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0] relative overflow-x-hidden">
      <div
        className="container py-20 relative flex items-center flex-col"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="flex items-center justify-center gap-x-[10%] w-full">
          <div className="border-2 w-[10%]" />
          <h2 className="text-4xl lg:text-5xl text-center font-medium">
            Entrepreneurs and Team
          </h2>
          <div className="border-2 w-[10%]" />
        </div>
        <div
          className={`bg-[#D6435D] w-10 h-2 rounded absolute  transition-all duration-300 hidden lg:block ${
            hover
              ? "w-32 min-h-[128px]  top-80 left-[calc(-20px)] rotate-45"
              : "left-[calc(50%-95px)] top-40"
          }`}
        ></div>
        <div
          className={`bg-[#463AD4] w-10 h-2 rounded absolute transition-all duration-300 hidden lg:block ${
            hover
              ? "w-32 min-h-[128px] top-[calc(100%-200px)] left-[calc(0%-40px)] rotate-45"
              : "left-[calc(50%-45px)]  top-40"
          }`}
        ></div>
        <div
          className={`bg-[#3EBDD9] rounded w-10 h-2 absolute transition-all duration-300 hidden lg:block ${
            hover
              ? "w-32 min-h-[128px] top-40 left-[calc(100%-40px)] rotate-45"
              : "left-[calc(50%+5px)]  top-40"
          }`}
        ></div>
        <div
          className={`bg-[#E7B73D] rounded w-10 h-2 absolute transition-all duration-300 hidden lg:block ${
            hover
              ? "w-32 min-h-[128px] top-[calc(100%-400px)] left-[calc(100%-20px)] rotate-45"
              : " left-[calc(50%+55px)] top-40"
          }`}
        ></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-10 mt-24 w-full max-w-[1000px]">
          {data.map((item, index) => (
            <ProfileDiv
              src={item.src}
              name={item.name}
              title={item.title}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Entrepreneurs;
