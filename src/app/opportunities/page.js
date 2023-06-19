"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import data from "../../../data/opportunities";

const Card = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`flex mt-10 justify-between rounded-lg p-5 lg:p-10 items-end flex-col md:flex-row md:items-center ${hover && "bg-white"}`}
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

const Page = () => {
  const [hover, sethover] = useState(false);

  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <div className="container py-20">
          <div className="flex justify-between items-center">
            <div className="md:max-w-[80%]">
              <h1 className="text-4xl lg:text-5xl font-bold text-center md:text-left">
                Opportunities
              </h1>
              <p className="text-xl lg:text-2xl font-medium mt-5 text-center md:text-left">
                We’re looking for fresh talent that is daring enough to venture
                into limitless opportunities. Check out our open positions
                below!
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
      <div
        className="flex justify-center mt-20 bg-[#1F1F1F] text-white"
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
      >
        <div className="container py-20 flex flex-col items-center relative">
          <div
            className={`h-12 w-12 rounded bg-[#D6435D] top-10 absolute left-10 transition-all duration-300 hidden md:block ${
              hover && "top-64 scale-150 -rotate-45"
            }`}
          >
            <div
              class={`triangle transition-all duration-300 opacity-0 rounded ${
                hover && "opacity-40"
              }`}
            ></div>
          </div>

          <div
            className={`h-12 w-12 rounded bg-[#3EBDD9] bottom-10 absolute right-10 transition-all duration-300 hidden md:block ${
              hover && "bottom-64 scale-150 rotate-45"
            }`}
          >
            <div
              class={`triangle transition-all duration-300 opacity-0 rounded ${
                hover && "opacity-40"
              }`}
            ></div>
          </div>
          <h3 className="font-medium text-4xl lg:text-5xl text-center">
            Dont See What You’re Looking For?
          </h3>
          <p className="text-center max-w-[600px] mt-4 mb-10 text-base lg:text-lg">
            Want to be part of the PVL family but not sure how you can
            contribute? Don’t worry! Unique talents are always appreciated here
            at PVL! Feel free to reach out to us via mail!
          </p>
          <button className="border border-white  py-3 px-12 rounded-lg hover:bg-white hover:text-black">
            Mail Us
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
