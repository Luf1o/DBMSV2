"use client";

import { DemoData } from "@/constants/demoData";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  return (
    <div className="flex flex-auto w-screen min-h-[80vh]">
      <div className="bg-green-300 w-[18vw] h-auto overflow-hidden">
        <div className="flex flex-col">
          <div>Show All</div>
          <div>Show All</div>
          <div>Show All</div>
        </div>
      </div>
      <div className="flex p-2 w-[90] flex-row">
        <ul className="">
          <li className=" flex flex-wrap  gap-2 justify-start">
            {DemoData.map((obj) => (
              <div className="w-[160px] h-[180px] flex flex-col justify-center items-center rounded-lg border border-neutral-400  bg-green-200">
                <div>
                  <p>{obj.price}</p>
                </div>
                <div className="flex gap-2">
                  <p>{obj.name}</p>
                  <p>~</p>
                  <p>{obj.id}</p>
                </div>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
