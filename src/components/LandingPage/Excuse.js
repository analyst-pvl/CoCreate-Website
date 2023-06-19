import React from "react";

const Excuse = () => {
  return (
    <div className="flex justify-center">
      <div className="container py-20 relative">
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%] border-black" />
          <h2 className="text-5xl text-center font-medium">
            What’s your Excuse to Startup?
          </h2>
          <div className="border-2 w-[10%] border-black" />
        </div>
        <div className="flex justify-between">
          <div className="grid grid-cols-2">
            <div className="max-w-[140px]">
              “I am not sure about the idea that I have”
            </div>
            <div className="max-w-[140px]">
              “I am not sure about the idea that I have”
            </div>
            <div className="max-w-[140px]">
              “I am not sure about the idea that I have”
            </div>
            <div className="max-w-[140px]">
              “I am not sure about the idea that I have”
            </div>
            <div className="max-w-[140px]">
              “I am not sure about the idea that I have”
            </div>
            <div className="max-w-[140px]">
              “I am not sure about the idea that I have”
            </div>
          </div>
          <div className="relative">
            <img src="./Excuse.gif" className="z-10" loop={false} />
            <div className="flex h-full w-full items-center justify-center absolute top-0">
              <p>We are here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excuse;
