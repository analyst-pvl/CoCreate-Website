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
    <div className="flex justify-center lg:items-start lg:justify-center flex-1 sticky top-[96px] lg:top-0 -m-5 lg:m-0 lg:relative bg-[#D9D9D9] drop-shadow lg:drop-shadow-none">
      <div className="w-[400px] lg:w-[400px] sticky top-[110px]">
        <img
          className="z-10 w-[100%] contain"
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

  const data = [
    {
      question: "“Outsourcing can help me only solve immediate needs”",
      ans: "Innovation fuels long-term growth by driving unique, transformative business solutions",
    },
    {
      question: "“My organisation is limited to existing tools delivered by partners”",
      ans: "Innovation enables the creation of customised technologies that fit specific organisational needs",
    },
    {
      question: "“Outsourcing means no people for my team”",
      ans: "Innovation attracts and retains top tech talent that is ever eager to solve challenging problems",
    },
    {
      question: "“My company has to rely on service providers to keep up with trends”",
      ans: "Innovation empowers organisations in adapating quickly to emerging market trends and technologies",
    },
    {
      question: "“Organisation is limited to packaging built solutions”",
      ans: "Innovation fosters competetive advantages by embracing cutting edge advancements in deep innovation",
    },
    {
      question: "“Outsourcing limits my company in advancing expertise”",
      ans: "Innovation promotes a culture of continuous learning and in-house technological expertise development",
    },
    // {
    //   question: "“I don't want my academics to be affected”",
    //   ans: "Working with us will not only motivate you to perform better in coursework, but we also work with institutions to lessen the burden on student entrepreneurs",
    // },
    // {
    //   question: "“Who will invest in my idea”",
    //   ans: "Investments will come in through our Fund, with interest from other Investors for future rounds along with participation initially",
    // },
  ];

  return (
    <div className="flex justify-center">
      <div className="container py-20 relative">
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%] border-black" />
          <h2 className="text-4xl lg:text-5xl text-center font-medium">
            Innovation vs Outsourcing
          </h2>
          <div className="border-2 w-[10%] border-black" />
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between pt-10 items-stretch gap-x-20 gap-y-10 relative">
          <div className="grid grid-cols-2 gap-10 ">
            {data.map((item, index) => (
              <div
                className="max-w-[240px] p-5 sm:p-10 hover:bg-[#3BDAFF] hover:text-white rounded transition-all duration-500 text-lg sm:text-xl text-center lg:text-left mx-auto lg:mx-0"
                onMouseEnter={() => setAns(item.ans)}
                onMouseLeave={() => setAns("")}
                onTouchStart={() => setAns(item.ans)}
                onTouchEnd={() => setAns("")}
              >
                <p>{item.question}</p>
              </div>
            ))}
          </div>
          <SideImage ans={ans} />
        </div>
      </div>
    </div>
  );
};

export default Excuse;
