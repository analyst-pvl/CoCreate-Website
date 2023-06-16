import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <div className=" bg-[#1E1E1F] flex justify-center ">
      <div className="container flex justify-between text-white py-5">
        <Link href="/">
          <Logo />
        </Link>
        <div className="italic flex items-center gap-10">
          <Link href="/pebble">Pebble</Link>
          {/* <Link href="/venture-studio">Venture Studio</Link> */}
          <Link href="/news">News</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/opportunities">Opportunities</Link>
          <button className="bg-[#3BDAFF] text-black py-4 px-6 rounded-lg font-medium">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
