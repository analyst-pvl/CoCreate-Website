import Image from "next/image";
import React from "react";

const ProfileDiv = (props) => {
  return (
    <div className="flex flex-col items-center justify-start">
      <Image src={props.src} height={170} width={160} alt="" />
      <p className="mt-2.5 text-2xl">{props.name}</p>
      <p className="mt-2.5 text-2xl underline underline-offset-4">{props.title}</p>
    </div>
  );
};

const Team = () => {
  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0]">
      <div className="container py-20 relative">
        <div className="flex items-center justify-center gap-x-[10%]">
          <div className="border-2 w-[10%]" />
          <h2 className="text-5xl text-center font-medium">Meet the Team</h2>
          <div className="border-2 w-[10%]" />
        </div>
        <div className="grid grid-cols-4 gap-y-48 mt-24">
          <ProfileDiv src="/SureshNarsimha.png" name="Suresh Narsimha" title="MD"/>
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
