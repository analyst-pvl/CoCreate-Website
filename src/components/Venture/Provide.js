import React from "react";
import NewsCard from "@/components/NewsCard/NewsCard";
import data from "../../../data/mediaMentions";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="border-2 border-[#2c2c2c] p-10 relative overflow-hidden flex items-center flex-col rounded-[20px]">
      {props.children}
      <Image height={127} width={127} src={props.image} />
      <h3 className="text-center text-[#0E0E0E] font-bold text-[28px] mt-5">
        {props.title}
      </h3>
      <p className="text-center text-[#0E0E0E] text-base mt-5">{props.parah}</p>
    </div>
  );
};

const Provide = () => {
  return (
    <div className="flex justify-center relative">
      <div className="absolute -bottom-16 right-0 hidden lg:block">
        <div className="rounded-sm bg-[#D6435D] h-14 w-14 shadow-black shadow-md relative -left-14"></div>
        <div className="rounded-sm bg-[#D6435D] h-32 w-24 shadow-black shadow-md"></div>
      </div>
      <div className="absolute -top-20 right-0 hidden lg:block">
        <div className="rounded-sm bg-[#463AD4] h-14 w-14 shadow-black shadow-md relative -left-14"></div>
        <div className="rounded-sm bg-[#463AD4] h-40 w-28 shadow-black shadow-md"></div>
      </div>
      <div className="absolute -top-14 left-0 hidden lg:block">
        <div className="rounded-sm bg-[#D16F37] h-40 w-28 shadow-black shadow-md"></div>
        <div className="rounded-sm bg-[#D16F37] h-14 w-14 shadow-black shadow-md relative -right-28"></div>
      </div>
      <div className="container py-36">
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%] border-black" />
          <h2 className="text-4xl lg:text-5xl text-center font-medium">
            What We Provide
          </h2>
          <div className="border-2 w-[10%] border-black" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10">
          <Card
            image="/Provide1.png"
            title="Resources on Demand"
            parah="Product Design, Packaging, Technology Expertise, Full Stack Development, Access to Labs, Branding and Marketing, IP and Legal, Finance and Operations"
          >
            <div className="absolute top-0 w-full bg-[#ED7633] h-5 left-0"></div>
          </Card>
          <Card
            image="/Provide2.png"
            title="Platforms & Tools"
            parah="Product Design, Packaging, Technology Expertise, Full Stack Development, Access to Labs, Branding and Marketing, IP and Legal, Finance and Operations"
          >
            <div className="absolute top-0 w-full bg-[#D6435D] h-5 left-0"></div>
          </Card>
          <Card
            image="/Provide3.png"
            title="Mentoring"
            parah="Product Design, Packaging, Technology Expertise, Full Stack Development, Access to Labs, Branding and Marketing, IP and Legal, Finance and Operations"
          >
            <div className="absolute top-0 w-full bg-[#463AD4] h-5 left-0"></div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Provide;
