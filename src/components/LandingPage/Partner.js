import React from "react";

const Partner = () => {
  return (
    <div className="flex justify-center">
      <div className="container py-20 relative">
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%] border-black" />
          <h2 className="text-5xl text-center font-medium">Partner with Us</h2>
          <div className="border-2 w-[10%] border-black" />
        </div>
        <div className="grid grid-cols-5 mt-20 gap-20">
          <div>
            <div className="w-full pt-[100%] bg-[url('/Universities.png')] bg-black rounded-lg"></div>
            <p className="text-xl font-semibold text-center mt-10">
              Universities
            </p>
          </div>
          <div>
            <div className="w-full pt-[100%] bg-[url('/Incubators.png')] bg-black rounded-lg"></div>
            <p className="text-xl font-semibold text-center mt-10">
              Incubators
            </p>
          </div>
          <div>
            <div className="w-full pt-[100%] bg-[url('/Accelarators.png')] bg-black rounded-lg"></div>
            <p className="text-xl font-semibold text-center mt-10">
              Accelarators
            </p>
          </div>
          <div>
            <div className="w-full pt-[100%] bg-[url('/VcFunds.png')] bg-black rounded-lg"></div>
            <p className="text-xl font-semibold text-center mt-10">VC Funds</p>
          </div>
          <div>
            <div className="w-full pt-[100%] bg-[url('/IndustryAssociates.png')] bg-black rounded-lg"></div>
            <p className="text-xl font-semibold text-center mt-10">
              Industry Associations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
