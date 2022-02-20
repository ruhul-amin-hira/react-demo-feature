import React, { useState } from "react";
import { toast } from "react-toastify";
import Indata from "../data";
import { getInsideData, useFetch } from "../hooks/fetchData";
import Card from "./Card";
import ConfirmBtn from "./ConfirmBtn";
import Loading from "./Loading";

const Inside = () => {
  const [select, setSelect] = useState({});

  const { data, isLoading, isError } = useFetch("inside", getInsideData);
  // console.log(data, isError);

  const handleClick = (el) => {
    setSelect(el);
    // console.log(el);
  };
  const handleConfirm = () => {
    if (select && select.id) {
      toast.dismiss();
      toast.clearWaitingQueue();
      toast.success(`Thanks for buying ${select.id}`);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2>Inside Dhaka (ISD)</h2>
      <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {data &&
          data.data?.map((el) => {
            return (
              <Card
                key={el.id}
                data={el}
                active={select && select.id == el.id ? true : false}
                fn={handleClick}
              />
            );
          })}
      </div>
      {isError ? (
        <p className="text-center">
          Can't retrieve data. Please start the JSON server
        </p>
      ) : (
        ""
      )}
      <div className="pt-8 flex justify-end">
        <ConfirmBtn title={"Confirm"} fn={handleConfirm} />
      </div>
    </div>
  );
};

export default Inside;
