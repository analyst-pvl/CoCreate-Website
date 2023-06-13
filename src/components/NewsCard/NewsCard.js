"use client";
import React, { useState } from "react";

const NewsCard = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`rounded-lg border border-black font-bold text-base flex flex-col relative bg-[#D9D9D9] transition-all duration-300 ${
        hover && "bg-[#F1F1F1]"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`absolute w-full h-full bg-red-400 rounded-lg -z-10  transition-all duration-300 ${
          hover && "rotate-3"
        }`}
      ></div>
      <div className="h-28 bg-white rounded-lg"></div>
      <div className="p-5 flex flex-col justify-between">
        <h3 className="w-4/5">{props.heading}</h3>
        <div className="flex justify-between mt-10 items-end">
          <p className="font-normal text-sm">{props.date}</p>
          <button
            className={`border border-[#3896AB] rounded text-xs text-[#3896AB] px-3 py-2 duration-300 ${
              hover && "text-white bg-[#3896AB]"
            }`}
          >
            Read full article
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
