import React from "react";

const Card = (props) => {
  return (
    <div
      className={`flex-1 rounded-lg flex flex-col items-center p-10 ${props.className}`}
    >
      {props.children}
      <h3 className="text-center font-medium">{props.heading}</h3>
      <p className="text-center">{props.parah}</p>
    </div>
  );
};

const Funding = () => {
  return (
    <div className="flex justify-center">
      <div className="container py-20">
        <h2>Funding Upto</h2>
        <p>$200k</p>
        <p>
          In startups with DeepTech as a differentiator created in our Venture
          Studios
        </p>
        <div className="flex gap-x-10 mt-10 text-white">
          <Card
            heading="Idea Stage"
            parah="Reduced time to Market"
            className="bg-[#3EBDD9]"
          ></Card>
          <Card
            heading="Incubation+accelaration"
            parah="Quicker pivots to determina the right Product Market Fit"
            className="bg-[#D6435D]"
          ></Card>
          <Card
            heading="Mentoring & handholding"
            parah="Founder friendly terms (No LP, dragalong, tagalong, no special rights"
            className="bg-[#463BD5]"
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Funding;
