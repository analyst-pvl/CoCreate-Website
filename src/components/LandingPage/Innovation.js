import React from "react";

const Card = (props) => {
  return (
    <div className="flex items-stretch justify-center rounded-e-sm">
      <div className="w-4/5 sm:w-auto bg-[#2b2b2b] p-10 md:p-14 rounded">
        <p className="text-center">{props.parah}</p>
      </div>
    </div>
  );
};

const Innovation = () => {
  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0]">
      <div className="container py-20 lg:pb-40 relative">
        <div className="hidden lg:block absolute w-16 h-16 rounded-md bg-[#D6435D] top-36 left-36"></div>
        <div className="hidden lg:block absolute w-16 h-16 rounded-md bg-[#463AD4] top-36 right-36"></div>
        <div className="hidden lg:block absolute w-16 h-16 rounded-md bg-[#3EBDD9] bottom-16 left-44"></div>
        <div className="hidden lg:block absolute w-16 h-16 rounded-md bg-[#E7B73D] bottom-16 right-44"></div>
        <div className="flex items-center justify-center">
          <h2 className="text-4xl lg:text-5xl text-center  font-medium lg:w-3/5">
            Innovation VS Outsourcing
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-[3%] mt-20">
          <Card parah="Innovation fuels long-term growth by driving unique, transformative business solutions" />
          <Card parah="It enables the creation of customised technologies that fit specific organisational needs" />
          <Card parah="Attracts and retains top tech talent that is ever eager to solve challenging problems" />
          <Card parah="Empowers organisations in adapating quickly to emerging market trends and technologies" />
          <Card parah="Fosters competivite advantages by embracing cutting edge advancements in deep innovation" />
          <Card parah="Promotes a culture of continuous learning and in-house technological expertise development" />
        </div>
      </div>
    </div>
  );
};

export default Innovation;
