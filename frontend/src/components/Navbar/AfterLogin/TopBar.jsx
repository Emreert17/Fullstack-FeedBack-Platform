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

  return (
    <div className="relative flex justify-between items-center px-8 py-3.5 bg-white border-b border-stone-200/70">
      {/* subtle accent strip — matches the editorial language across the app */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300/50 to-transparent" />

      <Link href="/">
        <Logo />
      </Link>

      <div className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`
            w-9 h-9 rounded-full
            bg-gradient-to-br from-violet-100 to-violet-200/70
            text-violet-700 ring-1 ring-violet-200/50
            text-[13px] font-semibold
            flex items-center justify-center
            transition-all duration-300 cursor-pointer
            hover:shadow-[0_4px_16px_-4px_rgba(139,92,246,0.25)]
            active:scale-95
            ${isOpen ? "ring-violet-300/70 shadow-[0_4px_16px_-4px_rgba(139,92,246,0.25)]" : ""}
          `}
        >
          {profileBadgeTransformation(user?.username && user?.username)}
        </button>
        {isOpen && <DropdownMenu setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}
