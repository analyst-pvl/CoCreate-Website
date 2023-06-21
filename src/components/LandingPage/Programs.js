"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
  return (
    <div className="bg-[#f1f1f0] w-4/5  md:w-full rounded-b-lg">
      <div className="flex justify-between">
        <div
          className={`transition-all delay-150 duration-1000 flex ${
            props.isVisible ? "w-full" : "w-0"
          }`}
        >
          <div className="bg-[#D6435D] flex-1 h-2" />
          <div className="bg-[#463AD4] flex-1 h-2" />
        </div>
        <div
          className={`transition-all delay-150 duration-1000 flex ${
            props.isVisible ? "w-full" : "w-0"
          }`}
        >
          <div className="bg-[#3EBDD9] flex-1 h-2" />
          <div className="bg-[#E7B73D] flex-1 h-2" />
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center h-48 px-10">
        {props.children}
        <p className="text-center text-black font-bold text-lg">
          {props.parah}
        </p>
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
        <div className="flex-1 gap-10 flex flex-col items-center">
          <Card parah="Brightest in academics" isVisible={isVisible}>
            <Image src="BrightInAcademics.svg" width={58} height={48} />
          </Card>
          <Card parah="Legal compliance" isVisible={isVisible}>
            <Image src="LegalCompliance.svg" width={52} height={49} />
          </Card>
        </div>
        <div className="flex-[1.2_1.2_0%] flex items-center justify-center">
          <Card parah="Teams with high energy" isVisible={isVisible}>
            <Image src="TeamsWithHighEnergy.svg" width={85} height={51} />
          </Card>
        </div>
        <div className="flex-1 gap-10 flex flex-col items-center">
          <Card parah="Digital compliance" isVisible={isVisible}>
            <Image src="DigitalCompliance.svg" width={44} height={42} />
          </Card>
          <Card parah="Brand compliance" isVisible={isVisible}>
            <Image src="BrandCompliance.svg" width={45} height={40} />
          </Card>
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
        <div className="flex-1 gap-10 flex flex-col items-center">
          <Card parah="Academic flexibility & timing" isVisible={isVisible}>
            <Image src="AcademicFlexibility.svg" width={52} height={52} />
          </Card>
          <Card parah="Career Insurance" isVisible={isVisible}>
            <Image src="CareerInsurance.svg" width={52} height={50} />
          </Card>
        </div>
        <div className="flex-[1.2_1.2_0%] flex items-center justify-center">
          <Card
            parah="Entreprenuership safer & better from idea stage all the way to success"
            isVisible={isVisible}
          >
            <Image src="EntreprenuershipSafer.svg" width={52} height={52} />
          </Card>
        </div>
        <div className="flex-1 gap-10 flex flex-col  items-center ">
          <Card parah="Angel approved" isVisible={isVisible}>
            <Image src="AngelApproved.svg" width={50} height={49} />
          </Card>
          <Card parah="Comprehensive Support" isVisible={isVisible}>
            <Image src="ComprehensiveSupport.svg" width={52} height={52} />
          </Card>
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
