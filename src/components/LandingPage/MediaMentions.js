import React from "react";
import NewsCard from "@/components/NewsCard/NewsCard";
import data from "../../../data/mediaMentions";

const MediaMentions = () => {
  return (
    <div className="flex justify-center">
      <div className="container py-20 relative">
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%] border-black" />
          <h2 className="text-4xl lg:text-5xl text-center font-medium">
            Media Mentions
          </h2>
          <div className="border-2 w-[10%] border-black" />
        </div>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-10 ">
          {data.map((item, index) => (
            <NewsCard
              key={index}
              heading={item.heading}
              date={item.date}
              link={item.link}
              src={item.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MediaMentions;
