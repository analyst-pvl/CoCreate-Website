import React from "react";

const Card = (props) => {
  return (
    <div className="flex-1 flex items-center flex-col">
      <div
        className={`w-44 h-44  flex items-center justify-center ${props.className}`}
      >
        <div
          className={`w-8 h-8 flex items-center justify-center ${props.className}`}
        >
          <div className={`w-6 h-6 ${props.className}`} />
        </div>
      </div>
      <p className="text-center mt-10 w-3/5">{props.parah}</p>
    </div>
  );
};

const Highlights = () => {
  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0]">
      <div className="container py-20 relative">
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%]" />
          <h2 className="text-5xl text-center font-medium">HighLights</h2>
          <div className="border-2 w-[10%]" />
        </div>
        <div className="flex gap-20 mt-20">
          <Card
            parah="Startups with deep-tech as a differentiator launched in 12 months"
            className="blue-gradient"
          />
          <Card
            parah="Businesses transformed to help them embrace digital and become enduring ventures"
            className="red-gradient"
          />
          <Card
            parah="20+ student entrepreneurs that includes 7 female founders building 12 amazing campus startups"
            className="orange-gradient"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
