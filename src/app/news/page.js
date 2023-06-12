import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import React from "react";

const Card = (props) => {
  return (
    <div className="rounded-lg border border-black font-bold text-base overflow-hidden flex flex-col">
      <div className="h-28 bg-white rounded-lg"></div>
      <div className="p-5 flex flex-col justify-between">
        <h3 className="w-4/5">{props.heading}</h3>
        <div className="flex justify-between mt-10 items-end">
          <p className="font-normal text-sm">{props.date}</p>
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
      heading:
        "This deep-tech-focused micro fund helps student-led startups build scalable businesses",
      date: "June 21, 2021",
      link: "",
    },
    {
      heading:
        "This deep-tech-focused micro fund helps student-led startups build scalable businesses",
      date: "June 21, 2021",
      link: "",
    },
    {
      heading:
        "This deep-tech-focused micro fund helps student-led startups build scalable businesses",
      date: "June 21, 2021",
      link: "",
    },
    {
      heading:
        "This deep-tech-focused micro fund helps student-led startups build scalable businesses",
      date: "June 21, 2021",
      link: "",
    },
    {
      heading:
        "This deep-tech-focused micro fund helps student-led startups build scalable businesses",
      date: "June 21, 2021",
      link: "",
    },
    {
      heading:
        "This deep-tech-focused micro fund helps student-led startups build scalable businesses",
      date: "June 21, 2021",
      link: "",
    },
    {
      heading:
        "This deep-tech-focused micro fund helps student-led startups build scalable businesses",
      date: "June 21, 2021",
      link: "",
    },
    {
      heading:
        "This deep-tech-focused micro fund helps student-led startups build scalable businesses",
      date: "June 21, 2021",
      link: "",
    },
    {
      heading:
        "This deep-tech-focused micro fund helps student-led startups build scalable businesses",
      date: "June 21, 2021",
      link: "",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <div className="container py-20 min-h-screen">
          <div className="">
            <h1 className="font-bold text-5xl text-center">Latest mentions</h1>
            <h2 className="text-3xl opacity-70 text-center mt-4">
              23 articles
            </h2>
          </div>
          <div className="grid grid-cols-4 mt-20 gap-10">
            {data.map((item, index) => (
              <Card key={index} heading={item.heading} date={item.date} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
