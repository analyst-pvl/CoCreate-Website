import React from "react";

const ProfileDiv = (props) => {
  return (
    <div className="flex flex-col items-center justify-start z-10 w-full ">
      <img
        src={props.src}
        height={170}
        width={160}
        alt=""
        className="h-[170px] w-[160px] object-cover rounded"
      />
      <p className="mt-2.5 text-2xl text-center">{props.name}</p>
      <p className="mt-2.5 text-2xl underline underline-offset-4 text-center">
        {props.title}
      </p>
    </div>
  );
};

export default ProfileDiv;
