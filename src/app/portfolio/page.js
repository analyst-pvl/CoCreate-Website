"use client";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import React, { useState } from "react";
import data from "../../../data/portfolio";
import Image from "next/image";

const Card = (props) => {
  return (
    <div
      className={`${props.color} rounded-md w-full pt-[100%] relative`}
      onMouseEnter={() => props.showData(props.index)}
      onMouseLeave={props.hideData}
    >
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
        {props.children}
      </div>
    </div>
  );
};

const Page = () => {
  const [viewData, setViewData] = useState(false);
  const middleIndex = Math.floor(data.length / 2);
  const [index, setIndex] = useState(0);

  const showData = (id) => {
    setIndex(id);
    setViewData(true);
  };

  const hideData = (src, des) => {
    setViewData(false);
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-[#1F1F1F]">
        <div className="container py-20 min-h-screen flex items-center gap-10">
          <div className="grid grid-cols-2 flex-1 gap-10">
            {data.slice(0, middleIndex).map((item, index) => (
              <Card
                key={index}
                color={item.color}
                name={item.name}
                des={item.description}
                link={item.link}
                showData={showData}
                hideData={hideData}
                index={index}
              >
                <Image
                  src={item.url}
                  height={item.ImgHeight}
                  width={item.ImgWidth}
                  alt={item.name}
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-4 flex-grow-[2] gap-10 max-w-[50%]">
            {data.slice(0, 5).map((item, index) => (
              <Card
                key={index}
                color={item.color}
                name={item.name}
                des={item.description}
                link={item.link}
                showData={showData}
                hideData={hideData}
                index={index}
              >
                <Image
                  src={item.url}
                  height={item.ImgHeight}
                  width={item.ImgWidth}
                  alt={item.name}
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              </Card>
            ))}
            <div className="col-start-2 col-end-4 col-span-2 row-span-2">
              <div
                className={`w-full h-full flex justify-center items-center  rounded-md  flex-col transition-all duration-500 p-10  gap-10 ${
                  viewData ? data[index].color + " opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={data[index].url}
                  width={223}
                  height={214}
                  className="max-w-[50%] max-h-[50%] object-contain"
                  alt=""
                />
                <p className="text-center font-medium">
                  {data[index].description}
                </p>
              </div>
            </div>
            {data.slice(5, 12).map((item, index) => (
              <Card
                key={index}
                color={item.color}
                name={item.name}
                des={item.description}
                link={item.link}
                showData={showData}
                hideData={hideData}
                index={index + 5}
              >
                <Image
                  src={item.url}
                  height={item.ImgHeight}
                  width={item.ImgWidth}
                  alt={item.name}
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-2 flex-1 gap-10">
            {data
              .slice(middleIndex, middleIndex + middleIndex)
              .map((item, index) => (
                <Card
                  key={index}
                  color={item.color}
                  name={item.name}
                  des={item.description}
                  link={item.link}
                  showData={showData}
                  hideData={hideData}
                  index={index + middleIndex}
                >
                  <Image
                    src={item.url}
                    height={item.ImgHeight}
                    width={item.ImgWidth}
                    alt={item.name}
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                </Card>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
