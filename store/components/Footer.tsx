import { FooterLinks } from "@/constants/Navlinks";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-screen h-auto p-3 flex flex-wrap bg-black text-white items-center justify-center">
      <ul className="flex gap-4">
        {FooterLinks.map((links) => (
          <Link href={links.href} key={links.key} id={links.key}>
            {links.text}
          </Link>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
