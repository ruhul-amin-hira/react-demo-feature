import React from "react";

const ConfirmBtn = ({ fn, title }) => {
  return (
    <div
      onClick={fn}
      className={`cursor-pointer px-8 py-3  hover:bg-opacity-70 inline-block  min-w-[8rem] rounded bg-blue text-white 
    }`}
    >
      <p className="text-xl font-medium">{title}</p>
    </div>
  );
};

export default ConfirmBtn;
