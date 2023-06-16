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
      className="flex mt-10 justify-between rounded-lg hover:bg-white p-10 items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex">
        {props.children}
        <div className="max-w-[55%] ml-10">
          <h3 className="font-bold text-3xl">{props.title}</h3>
          <p className="mt-6 text-xl">{props.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-end px-3 py-2 relative">
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
          <div className="flex justify-between">
            <div className="max-w-[80%]">
              <h1 className="text-5xl font-bold">Opportunities</h1>
              <p className="text-2xl font-medium mt-5">
                We’re looking for fresh talent that is daring enough to venture
                into limitless opportunities. Check out our open positions
                below!
              </p>
            </div>
            <p>23 offers</p>
          </div>
          <div className="mt-20">
            {data.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
              >
                <div className="w-20 justify-between items-center flex">
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
            className={`h-12 w-12 rounded bg-[#D6435D] top-10 absolute left-0 transition-all duration-300 ${
              hover && "top-64 scale-150 -rotate-45"
            }`}
          >
            <div
              class={`triangle transition-all duration-300 opacity-0 ${
                hover && "opacity-40"
              }`}
              rounded
            ></div>
          </div>

          <div
            className={`h-12 w-12 rounded bg-[#3EBDD9] bottom-10 absolute right-0 transition-all duration-300 ${
              hover && "bottom-64 scale-150 rotate-45"
            }`}
          >
            <div
              class={`triangle transition-all duration-300 opacity-0 ${
                hover && "opacity-40"
              }`}
              rounded
            ></div>
          </div>
          <h3 className="font-medium text-5xl text-center">
            Dont See What You’re Looking For?
          </h3>
          <p className="text-center max-w-[600px] mt-4 mb-10 text-lg">
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
