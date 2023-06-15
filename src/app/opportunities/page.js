import Image from "next/image";
import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import data from "../../../data/opportunities";

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
          <div className="mt-20">
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
      <div className="flex justify-center mt-20 bg-[#1F1F1F] text-white">
        <div className="container py-20 flex flex-col items-center">
          <h3 className="font-medium text-5xl text-center">
            Dont See What You’re Looking For?
          </h3>
          <p className="text-center max-w-[600px] mt-4 mb-10 text-lg">
            Want to be part of the PVL family but not sure how you can
            contribute? Don’t worry! Unique talents are always appreciated here
            at PVL! Feel free to reach out to us via mail!
          </p>
          <button className="border border-white  py-3 px-12 rounded-lg">
            Mail Us
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
