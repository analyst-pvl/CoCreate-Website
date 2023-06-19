"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProfileDiv = (props) => {
  return (
    <div className="flex flex-col items-center justify-start z-10">
      <Image src={props.src} height={170} width={160} alt="" />
      <p className="mt-2.5 text-2xl">{props.name}</p>
      <p className="mt-2.5 text-2xl underline underline-offset-4">
        {props.title}
      </p>
    </div>
  );
};

const Team = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0] relative">
      <div
        className="container py-20 relative flex items-center flex-col"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="flex items-center justify-center gap-x-[10%] w-full">
          <div className="border-2 w-[10%]" />
          <h2 className="text-5xl text-center font-medium">Meet the Team</h2>
          <div className="border-2 w-[10%]" />
        </div>
        <div
          className={`bg-[#D6435D] w-10 h-2 absolute left-[calc(50%-95px)] top-40 transition-all duration-300 ${
            hover &&
            "w-32 min-h-[128px] rounded top-80 left-[calc(100%-20px)] rotate-45"
          }`}
        ></div>
        <div
          className={`bg-[#463AD4] w-10 h-2 absolute left-[calc(50%-45px)]  top-40 transition-all duration-300 ${
            hover &&
            "w-32 min-h-[128px] rounded top-[calc(100%-200px)] left-[calc(-40px)] rotate-45"
          }`}
        ></div>
        <div
          className={`bg-[#3EBDD9] w-10 h-2 absolute left-[calc(50%+5px)]  top-40 transition-all duration-300 ${
            hover &&
            "w-32 min-h-[128px] rounded top-10 left-[calc(100%-40px)] rotate-45"
          }`}
        ></div>
        <div
          className={`bg-[#E7B73D] w-10 h-2 absolute left-[calc(50%+55px)] top-40 transition-all duration-300 ${
            hover &&
            "w-32 min-h-[128px] rounded top-[calc(100%-400px)] left-[calc(100%-20px)] rotate-45"
          }`}
        ></div>
        <div className="grid grid-cols-4 gap-y-48 mt-24 w-full">
          <ProfileDiv
            src="/SureshNarsimha.png"
            name="Suresh Narsimha"
            title="MD"
          />
          <ProfileDiv src="/ChetanShirnali.png" name="Chetan Shirnali" />
          <ProfileDiv src="/SunnopBalaraman.png" name="Sunnop Balaraman" />
          <ProfileDiv src="/KavyaShastry.png" name="Kavya Shastry" />
          <ProfileDiv src="/AnilJ.png" name="Anil J" />
          <ProfileDiv src="/MadhuV.png" name="Madhu V" />
          <ProfileDiv src="/KiritiKapavari.png" name="Kiriti Kapavari" />
          <ProfileDiv src="/SantoshBishnoi.png" name="Santosh Bishnoi" />
        </div>
      </div>
    </div>
  );
};

export default Team;
