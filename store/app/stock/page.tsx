"use client";
import React from "react";
import FilterButton from "@/components/FilterButton";
import ProductCard from "@/components/ProductCard";

export default function page() {
  return (
    <div className="flex flex-auto w-screen min-h-[80vh]">
      <div className="bg-green-300 w-[18vw] h-auto overflow-hidden">
        <div className="flex flex-col">
          <FilterButton />
        </div>
      </div>
      <div className="flex p-2 w-[90] flex-row">
        <ProductCard></ProductCard>
      </div>
    </div>
  );
}
