import React, { useState } from "react";
import data from "../../../data/opportunities";
import Image from "next/image";

const Card = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`flex mt-10 justify-between rounded-lg p-5 lg:p-10 items-end flex-col md:flex-row md:items-center ${
        hover && "bg-white"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(true)}
      onTouchEnd={() => setHover(false)}
    >
      <div className="flex">
        {props.children}
        <div className="md:max-w-[55%] md:ml-10">
          <h3 className="font-bold text-2xl lg:text-3xl">{props.title}</h3>
          <p className="mt-6 text-lg lg:text-xl">{props.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-end px-3 py-2 relative mt-5 md:mt-0">
        <div
          className={`w-10 h-5 rounded bg-[#D16F37] absolute top-0 left-0 scale-0 transition-all duration-300 ${
            hover && "scale-100"
          }`}
        ></div>
        <div
          className={`w-10 h-5 rounded bg-[#E7B73D] absolute top-0 right-0 scale-0 transition-all duration-300 ${
            hover && "scale-100"
          }`}
        ></div>
        <button
          className={`text-white bg-[#323232] py-3.5 px-4 rounded-lg min-w-[140px] z-10 ${
            hover && "bg-[#463AD4]"
          }`}
          onClick={() => {
            props.setShowModal(props.index);
            // window.open(props.link, "_blank");
          }}
        >
          Apply Now
        </button>
        <div
          className={`w-10 h-5 rounded bg-[#3EBDD9] absolute bottom-0 left-0 scale-0 transition-all duration-300 ${
            hover && "scale-100"
          }`}
        ></div>
        <div
          className={`w-10 h-5 rounded bg-[#D6435D] absolute bottom-0 right-0 scale-0 transition-all duration-300 ${
            hover && "scale-100"
          }`}
        ></div>
      </div>
    </div>
  );
};

const OpportunitiesLayout = (props) => {
  return (
    <div className="flex justify-center">
      <div className="container py-20">
        <div className="flex justify-between items-center">
          <div className="md:max-w-[80%]">
            <h1 className="text-4xl lg:text-5xl font-bold text-center md:text-left">
              Opportunities
            </h1>
            <p className="text-xl lg:text-2xl font-medium mt-5 text-center md:text-left">
              We’re looking for fresh talent that is daring enough to venture
              into limitless opportunities. Check out our open positions below!
            </p>
          </div>
          <p className="text-sm lg:text-base hidden md:block">23 offers</p>
        </div>
        <div className="mt-20">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
              setShowModal={props.setShowModal}
              index={index}
            >
              <div className="w-20 justify-between items-center hidden md:flex">
                <Image
                  src={item.image}
                  height={item.height}
                  width={item.width}
                  alt=""
                  className="max-h-[80%] max-w-[80%]"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesLayout;
