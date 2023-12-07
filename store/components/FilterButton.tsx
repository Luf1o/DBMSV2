"use client";
import React from "react";
import { useState } from "react";

function FilterButton() {
  const [active, setActiveButton] = useState(null);

  const setFilterMode = (buttonId: any) => {
    if (active === buttonId) {
      setActiveButton(null);
      console.log("deactive" + buttonId);
    } else {
      setActiveButton(buttonId);
      console.log("Set Active" + buttonId);
    }
  };

  return (
    <div>
      <button
        type="button"
        id="showAll"
        className={"w-full h-12 hover:bg-green-500"}
        onClick={() => {
          setFilterMode(1);
        }}
      >
        Show All
      </button>
      <button
        type="button"
        id="outOfStock"
        className="w-full h-12 hover:bg-green-500"
        onClick={() => {
          setFilterMode(1);
        }}
      >
        Out of Stock
      </button>
      <button
        type="button"
        id="inStock"
        className="w-full h-12 hover:bg-green-500"
        onClick={() => {
          setFilterMode(1);
        }}
      >
        in Stock
      </button>
    </div>
  );
}

export default FilterButton;
