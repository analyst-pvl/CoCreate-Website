"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
  return (
    <div className="bg-[#f1f1f0] text-black font-bold w-full">
      <div className={`flex`}>
        <div className="bg-[#D6435D] flex-1 h-1" />
        <div className="bg-[#463AD4] flex-1 h-1" />
        <div className="bg-[#3EBDD9] flex-1 h-1" />
        <div className="bg-[#E7B73D] flex-1 h-1" />
      </div>
      <div className="flex items-center justify-center h-44 px-10">
        {/* <Image /> */}
        <p className="text-center">{props.parah}</p>
      </div>
    </div>
  );
};

const TopDiv = () => {
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
    <div ref={inViewRef}>
      <h2 className="text-center font-semibold text-3xl lg:text-4xl">
        CoCreate companies are clearly different
      </h2>
      <div
        className={`flex py-10 gap-x-10 flex-col md:flex-row gap-y-10 opacity-0 transition-all duration-500 ${
          isVisible && "opacity-100"
        }`}
      >
        <div className="flex-1 gap-10 flex flex-col">
          <Card parah="Brightest in academics" isVisible={isVisible} />
          <Card parah="Legal compliance" isVisible={isVisible} />
        </div>
        <div className="flex-[1.2_1.2_0%] flex items-center justify-center">
          <Card parah="Teams with high energy" isVisible={isVisible} />
        </div>
        <div className="flex-1 gap-10 flex flex-col">
          <Card parah="Digital compliance" isVisible={isVisible} />
          <Card parah="Brand compliance" isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
};

const BottomDiv = () => {
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
    <div ref={inViewRef}>
      <h2
        className="text-center font-semibold text-3xl lg:text-4xl"
        ref={inViewRef}
      >
        Bright students love us as we make
      </h2>
      <div
        className={`flex py-10 gap-x-10 flex-col md:flex-row gap-y-10 opacity-0 transition-all duration-500 ${
          isVisible && "opacity-100"
        }`}
      >
        <div className="flex-1 gap-10 flex flex-col">
          <Card parah="Academic flexibility & timing" />
          <Card parah="Career Insurance" />
        </div>
        <div className="flex-[1.2_1.2_0%] flex items-center justify-center">
          <Card parah="Entreprenuership safer & better from idea stage all the way to success" />
        </div>
        <div className="flex-1 gap-10 flex flex-col">
          <Card parah="Angel approved" />
          <Card parah="Comprehensive Support" />
        </div>
      </div>
    </div>
  );
};

const Programs = () => {
  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0]">
      <div className="container py-20 relative">
        <TopDiv />
        <BottomDiv />
      </div>
    </div>
  );
};

export default Programs;
