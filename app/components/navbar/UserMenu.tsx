"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "@/components/Avatar";
import { MenuItem } from "@/components/navbar/MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleIsOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shaow-md transtion"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 w-[40vw] md:w-3/4 top-12 rounded-xl shadow-md bg-white overflow-hidden text-sm">
          <ul className="flex flex-col cursor-pointer">
            <MenuItem label="Login" onClick={() => {}} />
            <MenuItem label="Sign up" onClick={() => {}} />
          </ul>
        </div>
      )}
    </div>
  );
};

export { UserMenu };
