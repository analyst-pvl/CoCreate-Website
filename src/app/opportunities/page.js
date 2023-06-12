import Image from "next/image";
import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const Card = (props) => {
  return (
    <div className="flex mt-10 justify-between rounded-lg hover:bg-white p-10">
      <div className="flex">
        {props.children}
        <div className="max-w-[55%] ml-10">
          <h3 className="font-bold text-3xl">{props.title}</h3>
          <p className="mt-6 text-xl">{props.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-end w-44">
        <button className="text-white bg-[#323232] py-3.5 px-4 rounded-lg">
          Apply Now
        </button>
      </div>
    </div>
  );
};

const page = () => {
  const data = [
    {
      title: "Lead Partner - Ventures",
      description:
        "The Lead Partner would be in-charge of the portfolio and the seamless execution of their activities as a part of CoCreate.",
      image: "/LeadPartner.svg",
      link: "",
      height: 110,
      width: 42,
    },
    {
      title: "UI/UX Designer",
      description:
        "UI/UX Designer responsibilities include gathering user requirements, designing graphic elements, and building interface components.",
      image: "/Designer.svg",
      link: "",
      height: 73,
      width: 73,
    },
    {
      title: "React Frontend Developer",
      description:
        "Working in tandem with the UI/UX team to develop new features using React.js for the web platform.",
      image: "/Frontend.svg",
      link: "",
      height: 92,
      width: 64,
    },
    {
      title: "Backend Developer",
      description:
        "Work closely with the product head and UX designers to understand the product vision and design philosophy.",
      image: "/Backend.svg",
      link: "",
      height: 61,
      width: 72,
    },
    {
      title: "Fullstack Developer",
      description:
        "Developing end-to-end web applications, Creating rapid prototypes and upgrading them to full-scale applications by working collaboratively with the design and development team",
      image: "/Fullstack.svg",
      link: "",
      height: 66,
      width: 73,
    },
    {
      title: "Cyber Security and Network Engineers",
      description:
        "Looking for dedicated interns who can work in various cybersecurity areas and enhance their experience and relevant skills in cybersecurity.",
      image: "/CyberSecurity.svg",
      link: "",
      height: 70,
      width: 70,
    },
    {
      title: "Content Writer",
      description:
        "If you know and love content creation like we at PVL love innovation, let’s get talking.",
      image: "/ContentWriter.svg",
      link: "",
      height: 70,
      width: 70,
    },
    {
      title: "PR and Outreach Executive",
      description:
        "Accomplishing crucial coverage for portfolio companies and working to enhance media presence of CoCreate in an innovative manner.",
      image: "/PR.svg",
      link: "",
      height: 70,
      width: 70,
    },
    {
      title: "Digital Marketing Executive",
      description:
        "Establishing an end-to-end leads process and guiding the implementation and execution across multiple social media platforms.",
      image: "/DigitalMarketing.svg",
      link: "",
      height: 70,
      width: 70,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <div className="container py-20">
          <div className="flex justify-between">
            <div className="max-w-[80%]">
              <h1 className="text-5xl font-bold">Opportunities</h1>
              <p className="text-2xl font-medium mt-5">
                We’re looking for fresh talent that is daring enough to venture
                into limitless opportunities. Check out our open positions
                below!
              </p>
            </div>
            <p>23 offers</p>
          </div>
          <div>
            {data.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
              >
                <div className="w-20 justify-between items-center flex">
                  <Image
                    src={item.image}
                    height={item.height}
                    width={item.width}
                    alt=""
                    className="max-h-[80%] max-w-[80%]"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
