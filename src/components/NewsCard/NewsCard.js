import React from "react";

const NewsCard = (props) => {
  return (
    <div className="rounded-lg border border-black font-bold text-base overflow-hidden flex flex-col">
      <div className="h-28 bg-white rounded-lg"></div>
      <div className="p-5 flex flex-col justify-between">
        <h3 className="w-4/5">{props.heading}</h3>
        <div className="flex justify-between mt-10 items-end">
          <p className="font-normal text-sm">{props.date}</p>
          <button className="border border-[#3896AB] rounded text-xs text-[#3896AB] px-3 py-2">
            Read full article
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
