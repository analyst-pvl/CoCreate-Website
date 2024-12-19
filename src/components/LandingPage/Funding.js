"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const List = (props) => {
  return (
    <>
      <li className="font-bold text-8xl"> 0 </li>
      <li className="font-bold text-8xl"> 1 </li>
      <li className="font-bold text-8xl"> 2 </li>
      <li className="font-bold text-8xl"> 3 </li>
      <li className="font-bold text-8xl"> 4 </li>
      <li className="font-bold text-8xl"> 5 </li>
      <li className="font-bold text-8xl"> 6 </li>
      <li className="font-bold text-8xl"> {props.children} </li>
      <li className="font-bold text-8xl"> 8 </li>
      <li className="font-bold text-8xl"> 9 </li>
    </>
  );
};

const Counter = (props) => {
  return (
    <div id="counter" className="animated my-5">
      <ul
        className={`digits digits-second opacity-0 ${
          props.isVisible && "luckie opacity-100"
        }`}
      >
        <List>$</List>
      </ul>
      <ul
        className={`digits digits-third font-bold opacity-0 ${
          props.isVisible && "luckie opacity-100"
        }`}
      >
        <List>2</List>
      </ul>
      <ul
        className={`digits digits-second opacity-0 ${
          props.isVisible && "luckie opacity-100"
        }`}
      >
        <List>0</List>
      </ul>
      <ul
        className={`digits digits-third opacity-0 ${
          props.isVisible && "luckie opacity-100"
        }`}
      >
        <List>0</List>
      </ul>
      <ul
        className={`digits digits-second opacity-0 ${
          props.isVisible && "luckie opacity-100"
        }`}
      >
        <List>k</List>
      </ul>
    </div>
  );
};

const Card = (props) => {
  return (
    <div
      className={`flex-1 rounded-lg flex flex-col w-4/5 items-center p-10 sm:px-20 ${props.className}`}
    >
      {props.children}
      <h3 className="text-center mt-20 font-bold">{props.heading}</h3>
      <p className="text-center mt-5 font-semibold">{props.parah}</p>
    </div>
  );
};

const Funding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="flex justify-center">
      <div
        className="container py-20 flex items-center flex-col"
        ref={inViewRef}
      >
        <h2 className="font-bold text-4xl lg:text-5xl">We are partners to</h2>
        {/* <Counter isVisible={isVisible} /> */}
        <p
          className="font-semibold text-xl lg:text-2xl max-w-[550px] text-center"
          ref={inViewRef}
        >
          {/* In startups with DeepTech as a differentiator created in our Venture */}
          {/* Studios  */}
        </p>
        <div
          className={`flex flex-col sm:flex-row items-center sm:items-stretch gap-10 mt-10 text-white sm:flex-wrap  ${
            isVisible
              ? "lg:animate-fade-in-left lg:opacity-100"
              : "lg:opacity-0"
          }`}
        >
          <Card
            heading="Corporates & Industries"
            parah="Embrace innovation to unlock the value from new economy. We coinvest and partner to create innovations that unlocks inherent value"
            className="bg-[#3EBDD9]"
          >
            <Image
              src="/IdeaStage.svg"
              width={95}
              height={95}
              alt=""
              className="h-24 max-w-[100px]"
            />
          </Card>
          <Card
            heading="GCCs"
            parah="Why outsource when you can Insource the innovators? We invest in teams and innovations to empower GCC’s & their leaders to champion the innovation"
            className="bg-[#D6435D]"
          >
            <Image
              src="/Incubation.svg"
              width={61}
              height={100}
              alt=""
              className="h-24 max-w-[100px]"
            />
          </Card>
          <Card
            heading="Entrepreneurs"
            parah="Bring us an idea and we transform the same in to fundable proposition. We co-invest & cocreate with you"
            className="bg-[#463BD5]"
          >
            <Image
              src="/HandHolding.svg"
              width={102}
              height={56}
              alt=""
              className="h-24 max-w-[100px]"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Funding;
