import React from "react";
import TechCard from "@/components/TechCard/TechCard";
import data from "../../../data/Technologies";

const Solutions = () => {
  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0]">
      <div className="container py-20 relative">
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%] border-black" />
          <h2 className="text-4xl lg:text-5xl text-center font-medium">
            Solutions & Frameworks
          </h2>
          <div className="border-2 w-[10%] border-black" />
        </div>
        <div className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-10 ">
          {data.map((item, index) => (
            <TechCard
              key={index}
              heading={item.heading}
              src={item.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Solutions;
