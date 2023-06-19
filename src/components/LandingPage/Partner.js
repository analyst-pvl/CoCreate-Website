"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Partner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="flex justify-center">
      <div className="container py-20 relative" ref={inViewRef}>
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%] border-black" />
          <h2 className="text-5xl text-center font-medium">Partner with Us</h2>
          <div className="border-2 w-[10%] border-black" />
        </div>
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-20 gap-20 opacity-0  ${
            isVisible && "animate-fade-in-left opacity-100"
          }`}
        >
          <div>
            <div className="w-full pt-[100%] bg-[url('/Universities.png')] bg-transparent rounded-lg bg-center bg-cover bg-no-repeat"></div>
            <p className="text-xl font-semibold text-center mt-10">
              Universities
            </p>
          </div>
          <div>
            <div className="w-full pt-[100%] bg-[url('/Incubators.png')] bg-transparent rounded-lg bg-center bg-cover bg-no-repeat"></div>
            <p className="text-xl font-semibold text-center mt-10">
              Incubators
            </p>
          </div>
          <div>
            <div className="w-full pt-[100%] bg-[url('/Accelarators.png')] bg-transparent rounded-lg bg-center bg-cover bg-no-repeat"></div>
            <p className="text-xl font-semibold text-center mt-10">
              Accelarators
            </p>
          </div>
          <div>
            <div className="w-full pt-[100%] bg-[url('/VcFunds.png')] bg-transparent rounded-lg bg-center bg-cover bg-no-repeat"></div>
            <p className="text-xl font-semibold text-center mt-10">VC Funds</p>
          </div>
          <div>
            <div className="w-full pt-[100%] bg-[url('/IndustryAssociates.png')] bg-transparent rounded-lg bg-center bg-cover bg-no-repeat"></div>
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
