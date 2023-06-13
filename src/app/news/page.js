import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import NewsCard from "@/components/NewsCard/NewsCard";
import Image from "next/image";
import React from "react";



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
              <NewsCard key={index} heading={item.heading} date={item.date} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
