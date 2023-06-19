"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Programs = () => {
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
        <h2 className="text-center font-semibold text-3xl lg:text-4xl">
          CoCreate companies are clearly different
        </h2>
        <div className="flex">
          <div>
            <div className="">
              <Image />
              <p>Brightest in academics</p>
            </div>
            <div className="">
              <Image />
              <p>Legal compliance</p>
            </div>
          </div>
          <div>
            <Image />
            <p>Teams with high energy</p>
          </div>
          <div>
            <div>
              <Image />
              <p>Digital compliance</p>
            </div>
            <div>
              <Image />
              <p>Brand compliance</p>
            </div>
          </div>
        </div>
        <h2 className="text-center font-semibold text-3xl lg:text-4xl">
          Bright students love us as we make
        </h2>
        <div></div>
      </div>
    </div>
  );
};

export default Programs;
