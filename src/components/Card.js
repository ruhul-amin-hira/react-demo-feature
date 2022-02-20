import React from "react";

const Card = ({ data, active, fn }) => {
  return (
    <div
      onClick={() => fn(data)}
      className={`p-4 bg-white rounded outline-2 outline-offset-8  cursor-pointer text-center hover:shadow-md ${
        active ? "outline outline-blue" : ""
      }`}
    >
      <h2>{`> ${data.weight}`}</h2>
      <p className="pt-2">Delivery charge:</p>
      <p>
        <span className="line-through pr-4 text-xl text-slate-600">
          {data.price}
        </span>
        <span className="text-red-500 text-xl">{data.offer}</span>
        <span className="pl-2">{data.date}</span>
      </p>
      <p className="text-lg">
        {data.currentPrice} <span>BDT</span>
      </p>
    </div>
  );
};

export default Card;
