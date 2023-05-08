"use client";

import Image from "next/image";
import placeholder from "@/public/images/placeholder.jpg";

const Avatar = () => {
  return (
    <Image
      alt="Avatar"
      className="rounded-full"
      height={30}
      width={30}
      src={placeholder}
    ></Image>
  );
};

export { Avatar };
