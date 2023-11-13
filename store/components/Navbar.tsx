import { NavLinks, NavSecondLinks } from "@/constants/Navlinks";
import Link from "next/link";
import React from "react";

/*
function pageDirect() {
  const router = useRouter();
  try {
    const handleClick = () => {
      router.push("/components/Cart");
    };
  } catch (error: any) {
    console.log(error);
  }
}
<button
className="w-24 h-8 rounded-lg bg-white text-black hover:bg-red-200"
onClick={pageDirect}
>
TestButton
</button>
*/

const Navbar = () => {
  return (
    <nav className="flex flex-col w-screen h-max  bg-black text-white">
      <div className="flex flex-1 text-white p-4 justify-between ">
        <div>Logo</div>
        <div className="flex items-center justify-center gap-2">
          <div>
            <p>User</p>
          </div>
          <div className="w-10 h-10 bg-red-300 rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap p-4 ">
        <ul>
          {NavLinks.map((links) => (
            <Link
              href={links.href}
              key={links.key}
              className=" p-3 rounded-lg hover:bg-red-400 "
            >
              {links.text}
            </Link>
          ))}
        </ul>
        <ul className="flex hustify-between gap-2 ">
          {NavSecondLinks.map((filterCt) => (
            <Link
              href={filterCt.href}
              key={filterCt.id}
              className=" p-3 rounded-lg hover:bg-red-300 hover:text-black "
            >
              {filterCt.text}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
