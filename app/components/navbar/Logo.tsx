"use client";

import Image from "next/image";
import logo from "@/public/images/logo.png";

const Logo = () => {
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src={logo}
    />
  );
};

export { Logo };
