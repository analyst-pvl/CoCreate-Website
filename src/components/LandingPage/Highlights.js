"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
  return (
    <div className="flex-1 flex items-center flex-col">
      <div
        className={`relative w-44 h-44  flex items-center justify-center ${props.className}`}
      >
        <div className="absolute w-full h-full top-0 left-0 items-center justify-center flex">
          <p className="text-black text-7xl z-10">{props.highlight}</p>
        </div>
        <div
          className={`w-8 h-8 transition-all duration-1000 opacity-70 ${
            props.className
          } ${props.isVisible && "scale-[5]"}`}
        ></div>
        <div className="absolute w-full h-full top-0 left-0 items-center justify-center flex">
          <div
            className={`w-6 h-6 transition-all duration-1000 opacity-70 delay-1000 ${
              props.className
            } ${props.isVisible && "scale-[5]"}`}
          />
        </div>
      </div>
      <p className="text-center mt-10 w-3/5">{props.parah}</p>
    </div>
  );
};

const Highlights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 2500);
    }
  }, [inView]);

  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0]">
      <div className="container py-20 relative" ref={inViewRef}>
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%]" />
          <h2 className="text-4xl lg:text-5xl text-center font-medium">HighLights</h2>
          <div className="border-2 w-[10%]" />
        </div>
        <div className="flex gap-20 mt-20 flex-wrap">
          <Card
            parah="Startups with deep-tech as a differentiator launched in 12 months"
            className="blue-gradient"
            highlight="40+"
            isVisible={isVisible}
          />
          <Card
            parah="Businesses transformed to help them embrace digital and become enduring ventures"
            className="red-gradient"
            highlight="15"
            isVisible={isVisible}
          />
          <Card
            parah="20+ student entrepreneurs that includes 7 female founders building 12 amazing campus startups"
            className="orange-gradient"
            highlight="20+"
            isVisible={isVisible}
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
