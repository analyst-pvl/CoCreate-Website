import React from "react";

const Card = (props) => {
  return (
    <div className="bg-[#2b2b2b] p-10 md:p-14 rounded flex items-center justify-center">
      <p className="text-center">{props.parah}</p>
    </div>
  );
};

const Innovation = () => {
  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0]">
      <div className="container pt-20 pb-40 relative">
        <div className="hidden lg:block absolute w-16 h-16 rounded-md bg-[#D6435D] top-36 left-36"></div>
        <div className="hidden lg:block absolute w-16 h-16 rounded-md bg-[#463AD4] top-36 right-36"></div>
        <div className="hidden lg:block absolute w-16 h-16 rounded-md bg-[#3EBDD9] bottom-16 left-44"></div>
        <div className="hidden lg:block absolute w-16 h-16 rounded-md bg-[#E7B73D] bottom-16 right-44"></div>
        <div className="flex items-center justify-center">
          <h2 className="text-4xl lg:text-5xl text-center  font-medium lg:w-3/5">
            This is a great synergy between needs of corporates & mission of
            CoCreate
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-[3%] mt-20">
          <Card parah="A pipeline for deeptech innovation that comes from brightest minds across the country" />
          <Card parah="Participate in collaborative solutioning with our digital platforms and engagements" />
          <Card parah="Lower the cost & risk of venture participation with rights & visibility" />
          <Card parah="Get entrepreneurial talent with proven track record of innovation & ownership" />
          <Card parah="Pace & scale the investment in innovation with the results" />
          <Card parah="Reduce front loading of infrastructure & resource costs & scale the efforts based on results" />
        </div>
      </div>
    </div>
  );
};

export default Innovation;
