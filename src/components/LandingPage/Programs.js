"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 2500);
    }
  }, [inView]);

  return (
    <div className="flex justify-center bg-[#1F1F1F] text-[#F0F0F0]">
      <div className="container py-20 relative" ref={inViewRef}></div>
    </div>
  );
};

export default Programs;
