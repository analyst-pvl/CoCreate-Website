import Image from "next/image";
import React from "react";

const Pointer = (props) => {
  return (
    <div
      className={`flex gap-5 sm:gap-10 lg:gap-14 mb-4 pb-4 ${
        props.index != "04" && "border-b-2"
      } border-[#9F9F9F] max-w-[460px]`}
    >
      <p className="font-bold text-5xl lg:text-6xl">{props.index}</p>
      <div>
        <h4 className="font-bold text-xl lg:text-[28px]">{props.title}</h4>
        <p className="text-lg lg:text-2xl">{props.parah}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const data = [
    {
      index: "01",
      title: "Pitch your Idea",
      parah: "Ideas are evaluated by our investment team",
    },
    {
      index: "02",
      title: "Build",
      parah:
        "Build your Product, Branding, Marketing, Solidify Product-Market Fit, GTM strategy",
    },
    {
      index: "03",
      title: "Legal",
      parah: "Company Formation, IP, Cap Table, Registration, and Licenses",
    },
    {
      index: "04",
      title: "GTM & Series A Hunt",
      parah:
        "Hit the Market, Pitch Decks, Business Plans and use our extensive network to find the right investor",
    },
  ];
  return (
    <div className="flex flex-col items-center bg-[#1F1F1F] text-[#F0F0F0] overflow-x-hidden">
      <Image
        src="/ProcessHead.png"
        width={1816}
        height={210}
        className="w-full max-w-[1800] pt-24 px-5 lg:px-10"
      ></Image>
      <div className="container py-20 relative flex items-center flex-col">
        <div className="flex items-center justify-center gap-x-[10%] w-full">
          <div className="border-2 w-[10%]" />
          <h2 className="text-4xl lg:text-5xl text-center font-medium">
            Our Process
          </h2>
          <div className="border-2 w-[10%]" />
        </div>

        <div className="flex justify-between w-full mt-20 items-center flex-col lg:flex-row gap-10">
          <Image src="/Process.png" width={564} height={536}></Image>
          <div>
            {data.map((item) => (
              <Pointer
                index={item.index}
                title={item.title}
                parah={item.parah}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
