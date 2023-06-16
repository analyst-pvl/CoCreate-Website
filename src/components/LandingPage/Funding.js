import Image from "next/image";
import React from "react";

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
  return (
    <div className="flex justify-center">
      <div className="container py-20 flex items-center flex-col">
        <h2 className="font-bold text-5xl">Funding Upto</h2>
        <div className="mt-10 flex items-center">
          <p className="font-bold text-8xl">$</p>
          <div className="w-2 rounded bg-[#463AD5] h-3/5 mx-3"></div>
          <p className="font-bold text-8xl">2</p>
          <div className="w-2 rounded bg-[#D16F37] h-3/5 mx-3"></div>
          <p className="font-bold text-8xl">0</p>
          <div className="w-2 rounded bg-[#3EBDD9] h-3/5 mx-3"></div>
          <p className="font-bold text-8xl">0</p>
          <div className="w-2 rounded bg-[#D6435D] h-3/5 mx-3"></div>
          <p className="font-bold text-8xl">K</p>
        </div>
        <p className="font-semibold text-2xl max-w-[550px] text-center">
          In startups with DeepTech as a differentiator created in our Venture
          Studios
        </p>
        <div className="flex gap-x-10 mt-10 text-white">
          <Card
            heading="Idea Stage"
            parah="Reduced time to Market"
            className="bg-[#3EBDD9]"
          >
            <Image src="/IdeaStage.svg" width={95} height={95} alt="" className="h-24 max-w-[100px]"/>
          </Card>
          <Card
            heading="Incubation+accelaration"
            parah="Quicker pivots to determina the right Product Market Fit"
            className="bg-[#D6435D]"
          >
            <Image src="/Incubation.svg" width={61} height={100} alt="" className="h-24 max-w-[100px]"/>
          </Card>
          <Card
            heading="Mentoring & handholding"
            parah="Founder friendly terms (No LP, dragalong, tagalong, no special rights"
            className="bg-[#463BD5]"
          >
            <Image src="/HandHolding.svg" width={102} height={56} alt="" className="h-24 max-w-[100px]"/>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Funding;
