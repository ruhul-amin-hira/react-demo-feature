import React from "react";

const ButtonDefault = ({ title, fn, exClass }) => {
  return (
    <div
      onClick={fn}
      className={`cursor-pointer px-8 py-2  hover:bg-opacity-70 inline-block  min-w-[8rem] rounded ${
        exClass ? "bg-blue text-white" : "bg-white text-black"
      }`}
    >
      <p className="text-lg font-medium">{title}</p>
    </div>
  );
};

export default ButtonDefault;
