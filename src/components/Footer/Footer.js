import React from "react";
import Logo from "../Logo/Logo";
import LinkedIn from "./LinkedIn";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-[#323232] py-10 text-white">
      <div className="container flex justify-between">
        <div>
          <Logo />
          <p className="mt-10">Privacy Policy- Terms & Conditions- Legal</p>
          <p>© 2021 PVL All Rights Reserved</p>
        </div>
        <div className="flex justify-between flex-col">
          <p>Connect With Us!</p>
          <a className="mt-6">create@cocreate.ventures</a>
          <a className="mt-6">
            <Image src="/LinkedIn.svg" height={36} width={36} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
