"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../Logo/Logo";

const NavBar = (props) => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <div className="sticky top-0 z-20 w-full">
      <div className=" bg-[#1E1E1F] flex justify-center">
        <div className="container flex justify-between text-white py-5">
          <Link href="/">
            <Logo />
          </Link>
          <div className="italic items-center gap-10 hidden md:flex">
            {/* <Link href="/pebble">Pebble</Link> */}
            <Link href="/venture-studio">Venture Studio</Link>
            <Link href="/news">News</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/opportunities">Opportunities</Link>
            <button className="bg-[#3BDAFF] text-black py-4 px-6 rounded-lg font-medium">
              Apply Now
            </button>
          </div>
          <div className="gap-x-10 flex-1 justify-end flex md:hidden">
            <button
              className="flex flex-col h-12 w-12 border-2 border-white rounded justify-center items-center group"
              onClick={() => setShowNavMenu(!showNavMenu)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  showNavMenu
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  showNavMenu
                    ? "opacity-0"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  showNavMenu
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      {showNavMenu && (
        <div
          className={`flex flex-col text-white items-center justify-center md:hidden bg-[#1E1E1F]`}
        >
          <Link
            href="/pebble"
            className="cursor-pointer px-5 py-4 w-full text-center"
          >
            Pebble
          </Link>
          {/* <Link href="/venture-studio">Venture Studio</Link> */}
          <Link
            href="/news"
            className="cursor-pointer px-5 py-4 w-full text-center"
          >
            News
          </Link>
          <Link
            href="/portfolio"
            className="cursor-pointer px-5 py-4 w-full text-center"
          >
            Portfolio
          </Link>
          <Link
            href="/opportunities"
            className="cursor-pointer px-5 py-4 w-full text-center"
          >
            Opportunities
          </Link>
          <button
            className="yellowButton px-5 py-4 font-medium text-[#060919] w-full rounded-none bg-white border-[#1E1E1F] border"
            onClick={() => {
              window.open(
                "https://6inc.typeform.com/idea-submission#name=xxxxx&email=xxxxx&source=pvl&linkedin_url=xxxxx",
                "_blank"
              );
            }}
          >
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
