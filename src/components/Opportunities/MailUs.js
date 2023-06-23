import React, { useState } from "react";

const MailUs = () => {
  const [hover, sethover] = useState(false);

  return (
    <div
      className="flex justify-center mt-20 bg-[#1F1F1F] text-white"
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
    >
      <div className="container py-20 flex flex-col items-center relative">
        <div
          className={`h-12 w-12 rounded bg-[#D6435D] top-10 absolute left-10 transition-all duration-300 hidden md:block ${
            hover && "top-64 scale-150 -rotate-45"
          }`}
        >
          <div
            className={`triangle transition-all duration-300 opacity-0 rounded ${
              hover && "opacity-40"
            }`}
          ></div>
        </div>

        <div
          className={`h-12 w-12 rounded bg-[#3EBDD9] bottom-10 absolute right-10 transition-all duration-300 hidden md:block ${
            hover && "bottom-64 scale-150 rotate-45"
          }`}
        >
          <div
            className={`triangle transition-all duration-300 opacity-0 rounded ${
              hover && "opacity-40"
            }`}
          ></div>
        </div>
        <h3 className="font-medium text-4xl lg:text-5xl text-center">
          Dont See What You’re Looking For?
        </h3>
        <p className="text-center max-w-[600px] mt-4 mb-10 text-base lg:text-lg">
          Want to be part of the PVL family but not sure how you can contribute?
          Don’t worry! Unique talents are always appreciated here at PVL! Feel
          free to reach out to us via mail!
        </p>
        <button className="border border-white  py-3 px-12 rounded-lg hover:bg-white hover:text-black">
          Mail Us
        </button>
      </div>
    </div>
  );
};

export default MailUs;
