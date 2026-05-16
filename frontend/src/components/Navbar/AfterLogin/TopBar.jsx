"use client";
import Link from "next/link";
import Logo from "../../Logo/Logo";
import { useAuth } from "../../../app/context/authContext";
import { profileBadgeTransformation } from "../../../app/utils/profileBadge";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  console.log(isOpen);

  return (
    <div className="relative flex justify-between items-center px-8 py-3.5 bg-white border-b border-slate-200/80">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
      <Link href="/">
        <Logo />
      </Link>

      <div className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 
            border border-blue-200/60 text-[13px] font-semibold flex items-center justify-center 
            shadow-sm shadow-blue-100/40 transition-all duration-300 cursor-pointer"
        >
          {profileBadgeTransformation(user?.username && user?.username)}
        </button>
        {isOpen && <DropdownMenu setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}
