import Footer from "@/components/Footer/Footer";
import Innovation from "@/components/LandingPage/Innovation";
import Funding from "@/components/LandingPage/Funding";
import NavBar from "@/components/NavBar/NavBar";
import React from "react";
import Highlights from "@/components/LandingPage/Highlights";
import MediaMentions from "@/components/LandingPage/MediaMentions";
import Team from "@/components/LandingPage/Team";
import Partner from "@/components/LandingPage/Partner";
import Hero from "@/components/LandingPage/Hero";

const page = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Funding />
      <Innovation />
      <Highlights />
      <Partner />
      <Team />
      <MediaMentions />
      <Footer />
    </>
  );
};

export default page;
