"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import MailUs from "@/components/Opportunities/MailUs";
import OpportunitiesLayout from "@/components/Opportunities/OpportunitiesLayout";
import Modal from "@/components/Opportunities/Modal";

const Page = () => {
  const [showModal, setShowModal] = useState(-1);

  useEffect(() => {
    if (showModal >= 0) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showModal]);

  return (
    <>
      {showModal >= 0 && (
        <Modal setShowModal={setShowModal} showModal={showModal} />
      )}
      <NavBar />
      <OpportunitiesLayout setShowModal={setShowModal} />
      <MailUs />
      <Footer />
    </>
  );
};

export default Page;
