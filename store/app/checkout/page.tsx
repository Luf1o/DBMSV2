"use client";

import Check from "@/components/Check";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-screen h-max">
      <div className="flex flex-col">
        <div className="flex flex-row  bg-red-300 py-4 items-center justify-between">
          <div className="pl-2 flex gap-2 items-center justify-center">
            <p className="text-xl">TotalPrice</p>
            <p>Rs/-46,959</p>
          </div>
          <button
            type="button"
            className="px-4 py-2 mr-2 bg-red-500 rounded-lg"
            hidden
          >
            Checkout
          </button>
          <Link
            href="/checkout/purchased/"
            key="CheckedOut"
            className="px-4 py-2 mr-2 bg-red-500 rounded-lg"
          >
            Checkout
          </Link>
        </div>
        <div className="flex justify-between items-center mx-2">
          <h4 className="pr-32">Item Name</h4>
          <h4>Item Price</h4>

          <div>Amount</div>
        </div>
        <div className="min-w-screen h-auto">
          <Check />
        </div>
      </div>
    </div>
  );
};

export default page;
