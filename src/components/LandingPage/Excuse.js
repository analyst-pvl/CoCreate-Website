"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SideImage = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsPlaying(true);
      setTimeout(() => {
        setIsPlaying(false);
      }, 4700);
    }
  }, [inView]);

  return (
    <div className="hidden relative items-start justify-center lg:flex flex-1">
      <div className="w-[480px] relative">
        <img
          className="z-10 sticky top-[110px] w-[100%] contain"
          loop={false}
          src={isPlaying ? "./Excuse.gif" : "./Excuse.png"}
          alt="GIF"
          ref={inViewRef}
        />
        <div className="absolute top-0 flex items-center justify-center w-full h-full">
          {!isPlaying && <p className="px-28 text-center">{props.ans}</p>}
        </div>
      </div>
    </div>
  );
};

const Excuse = () => {
  const [ans, setAns] = useState("");

  return (
    <div className="flex justify-center">
      <div className="container py-20 relative">
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%] border-black" />
          <h2 className="text-4xl lg:text-5xl text-center font-medium">
            What’s your Excuse to Startup?
          </h2>
          <div className="border-2 w-[10%] border-black" />
        </div>
        <div className="flex justify-between pt-10 items-stretch gap-20 relative">
          <div className="grid grid-cols-2 gap-10 ">
            <div
              className="max-w-[240px] p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 text-xl"
              onMouseEnter={() => setAns("We are here to help")}
              onMouseLeave={() => setAns("")}
            >
              “I am not sure about the idea that I have”
            </div>
            <div
              className="max-w-[240px]  p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 text-xl"
              onMouseEnter={() => setAns("We are here to help")}
              onMouseLeave={() => setAns("")}
            >
              “I am not sure about the idea that I have”
            </div>
            <div
              className="max-w-[240px]  p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 text-xl"
              onMouseEnter={() => setAns("We are here to help")}
              onMouseLeave={() => setAns("")}
            >
              “I am not sure about the idea that I have”
            </div>
            <div
              className="max-w-[240px]  p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 text-xl"
              onMouseEnter={() => setAns("We are here to help")}
              onMouseLeave={() => setAns("")}
            >
              “I am not sure about the idea that I have”
            </div>
            <div
              className="max-w-[240px]  p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 text-xl"
              onMouseEnter={() => setAns("We are here to help")}
              onMouseLeave={() => setAns("")}
            >
              “I am not sure about the idea that I have”
            </div>
            <div
              className="max-w-[240px]  p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 text-xl"
              onMouseEnter={() => setAns("We are here to help")}
              onMouseLeave={() => setAns("")}
            >
              “I am not sure about the idea that I have”
            </div>
          </div>
          <SideImage ans={ans} />
        </div>
      </div>
    </div>
  );
};

export default Excuse;
