import React from "react";
import { Checkout } from "@/constants/demoData.js";

const Check = () => {
  return (
    <div className="flex-wrap min-h-[75vh]">
      <div className="text-white ">
        <ul className=" flex-col justify-center">
          {Checkout.map((cartItems) => (
            <div
              className="flex bg-neutral-600 h-[8vh] mb-2 mx-2 text-white justify-between items-center rounded-md text-2xl "
              key={cartItems.id}
            >
              <p className="pl-2">{cartItems.name}</p>
              <p>{cartItems.price}</p>
              <p>{cartItems.amt}</p>
              <p className="pr-2">{cartItems.id}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Check;
