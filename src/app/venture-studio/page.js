import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Venture/Hero";
import Process from "@/components/Venture/Process";
import Provide from "@/components/Venture/Provide";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Provide />
      <Process />
      <Footer />
    </>
  );
};

export default page;
