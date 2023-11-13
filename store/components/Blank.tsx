"use client";
const Blank = () => {
  return (
    <div className="w-screen h-[85vh] bg-black text-neutral-600 flex items-center justify-center">
      <div className="flex gap-5 text-3xl">
        <p>BlankSection</p>
        <p>|</p>
        <p>Page On rendering</p>
      </div>
    </div>
  );
};

import { useRouter } from "next/router";

const MyComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/other-page");
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleClick}>Go to Other Page</button>
    </div>
  );
};

export { Blank, MyComponent };
