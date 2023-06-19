import React from "react";

const Programs = () => {
  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0]">
      <div className="container py-20 relative" ref={inViewRef}>
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%]" />
          <h2 className="text-5xl text-center font-medium">HighLights</h2>
          <div className="border-2 w-[10%]" />
        </div>
        <div className="flex gap-20 mt-20">
          <Card
            parah="Startups with deep-tech as a differentiator launched in 12 months"
            className="blue-gradient"
            highlight="40+"
            isVisible={isVisible}
          />
          <Card
            parah="Businesses transformed to help them embrace digital and become enduring ventures"
            className="red-gradient"
            highlight="15"
            isVisible={isVisible}
          />
          <Card
            parah="20+ student entrepreneurs that includes 7 female founders building 12 amazing campus startups"
            className="orange-gradient"
            highlight="20+"
            isVisible={isVisible}
          />
        </div>
      </div>
    </div>
  );
};

export default Programs;
