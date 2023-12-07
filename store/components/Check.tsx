import React from "react";
import { CartData } from "@/constants/demoData.js";

const Check = () => {
  type propsObj = {
    name: string;
    val1: string;
    val2: string;
    id: string;
  };
  return (
    <div className="flex-wrap min-h-[75vh]">
      <div className="text-white ">
        <ul className=" flex-col justify-center">
          {CartData.map((cartItems) => (
            <div
              className="flex bg-neutral-600 h-[8vh] mb-2 mx-2 gap-10 text-white justify-items-start items-center rounded-md text-2xl "
              key={cartItems.id}
            >
              <div className="w-[50vw]">{cartItems.name}</div>
              <div className="w-[30vw]">{cartItems.amt}</div>
              <div className="w-[15vw] flex justify-end">{cartItems.price}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Check;
