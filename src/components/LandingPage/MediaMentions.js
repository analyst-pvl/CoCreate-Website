import React from "react";

import NewsCard from "@/components/NewsCard/NewsCard";

const MediaMentions = () => {
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
  ];

  return (
    <div className="flex justify-center">
      <div className="container py-20 relative">
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%] border-black" />
          <h2 className="text-5xl text-center font-medium">Media Mentions</h2>
          <div className="border-2 w-[10%] border-black" />
        </div>
        <div className="grid grid-cols-4 mt-20 gap-10">
          {data.map((item, index) => (
            <NewsCard key={index} heading={item.heading} date={item.date} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MediaMentions;
