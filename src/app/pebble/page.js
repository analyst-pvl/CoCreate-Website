import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import React from "react";

const Card = (props) => {
  return (
    <div className="rounded-lg border border-black font-bold text-base overflow-hidden flex flex-col">
      <div className="h-28 bg-white rounded-lg"></div>
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="w-4/5">{props.heading}</h3>
          <p className="font-normal text-sm mt-2.5">{props.date}</p>
        </div>
        <div className="flex justify-between mt-10 items-center">
          <div className="font-normal text-sm flex items-center gap-1">
            <Image
              src="/EyeOutline.png"
              width={16}
              height={12}
              className="h-3 w-4"
              alt=""
            />
            {props.views}
          </div>
          <button className="border border-[#3896AB] rounded text-xs text-[#3896AB] px-3 py-2">
            Read full article
          </button>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  const data = [
    {
      heading: "Insights with Gokul Rajaram & Suresh Narasimha",
      date: "June 21, 2021",
      link: "",
      views: "30k",
    },
    {
      heading:
        "This deep-tech-focused micro fund helps student-led startups build scalable businesses",
      date: "June 21, 2021",
      link: "",
      views: "30k",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <div className="container py-20 min-h-screen">
          <div className="flex items-center flex-col">
            <Image src="./Pebble.svg" height={106} width={170} />
            <h1 className="font-semibold text-5xl text-center mt-5 max-w-[800px]">
              Community of future innovators & entrepreneurs on campus
            </h1>
          </div>
          <div className="flex justify-between mt-20 items-end">
            <h2 className="text-5xl font-medium">Latest mentions</h2>
            <p className="text-2xl opacity-70">23 videos</p>
          </div>
          <div className="grid grid-cols-4 mt-20 gap-10">
            {data.map((item, index) => (
              <Card
                key={index}
                heading={item.heading}
                date={item.date}
                views={item.views}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
