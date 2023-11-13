"use client";
import React from "react";
import { DemoData } from "@/constants/demoData.js";

const Items = () => {
  return (
    <div className="w-screen min-h-[80vh]">
      <div className="flex flex-wrap my-2 justify-center gap-4 m-1">
        {DemoData.map((props) => (
          <div
            key={props.id}
            className="w-[30vw] p-2 h-[80px] rounded-lg flex justify-between  items-center bg-neutral-700 text-neutral-200 font-semibold"
          >
            <div>{props.name}</div>
            <div>{props.price}</div>
            <div className="flex flex-row justify-between items-center w-[auto] gap-4 h-auto">
              <input
                type="number"
                className="w-[50px] h-12  text-black rounded-sm"
                id="nom"
                min={0}
                max={5}
              />
              <button
                type="button"
                className="p-1 rounded-full bg-purple-300 text-neutral-800"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
