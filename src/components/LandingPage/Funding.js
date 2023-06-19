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
    <div id="counter" class="animated my-5">
      <ul
        class={`digits digits-second opacity-0 ${
          props.isVisible && "luckie opacity-100"
        }`}
      >
        <List>$</List>
      </ul>
      <ul
        class={`digits digits-third font-bold opacity-0 ${
          props.isVisible && "luckie opacity-100"
        }`}
      >
        <List>2</List>
      </ul>
      <ul
        class={`digits digits-second opacity-0 ${
          props.isVisible && "luckie opacity-100"
        }`}
      >
        <List>0</List>
      </ul>
      <ul
        class={`digits digits-third opacity-0 ${
          props.isVisible && "luckie opacity-100"
        }`}
      >
        <List>0</List>
      </ul>
      <ul
        class={`digits digits-second opacity-0 ${
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
      className={`flex-1 rounded-lg flex flex-col items-center py-10 px-20 ${props.className}`}
    >
      {props.children}
      <h3 className="text-center mt-10 font-bold">{props.heading}</h3>
      <p className="text-center mt-5 font-semibold">{props.parah}</p>
    </div>
  );
};

const Funding = () => {
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
      <div
        className="container py-20 flex items-center flex-col"
        ref={inViewRef}
      >
        <h2 className="font-bold text-5xl">Funding Upto</h2>
        <Counter isVisible={isVisible} />
        <p className="font-semibold text-2xl max-w-[550px] text-center">
          In startups with DeepTech as a differentiator created in our Venture
          Studios
        </p>
        <div
          className={`flex gap-x-10 mt-10 text-white opacity-0  ${
            isVisible && "animate-fade-in-left opacity-100"
          }`}
        >
          <Card
            heading="Idea Stage"
            parah="Reduced time to Market"
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
            heading="Incubation+accelaration"
            parah="Quicker pivots to determina the right Product Market Fit"
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
            heading="Mentoring & handholding"
            parah="Founder friendly terms (No LP, dragalong, tagalong, no special rights"
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
