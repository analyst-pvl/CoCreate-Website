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
        <div className="flex justify-between pt-10 items-center">
          <div className="grid grid-cols-2 gap-y-20 flex-1">
            <div className="max-w-[200px] p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 ">
              “I am not sure about the idea that I have”
            </div>
            <div className="max-w-[200px]  p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 ">
              “I am not sure about the idea that I have”
            </div>
            <div className="max-w-[200px]  p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 ">
              “I am not sure about the idea that I have”
            </div>
            <div className="max-w-[200px]  p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 ">
              “I am not sure about the idea that I have”
            </div>
            <div className="max-w-[200px]  p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 ">
              “I am not sure about the idea that I have”
            </div>
            <div className="max-w-[200px]  p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 ">
              “I am not sure about the idea that I have”
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="./Excuse.gif" className="z-10 relative" loop={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excuse;
