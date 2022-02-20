import React from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className=" w-full pt-12 flex justify-center items-center">
      <BeatLoader size={20} color={"#1276ff"} />
    </div>
  );
};

export default Loading;
