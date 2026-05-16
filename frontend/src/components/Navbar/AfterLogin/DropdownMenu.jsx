"use client";
import { useAuth } from "../../../app/context/authContext";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { dropdownLinks } from "../../../app/data/data";
import DropdownLink from "./DropdownLink";

export default function DropdownMenu({ setIsOpen }) {
  const router = useRouter();
  const { setUser, user } = useAuth();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser("");
    router.push("/");
  };

  return (
    <div
      ref={dropdownRef}
      className="
        absolute right-0 top-[45px] w-64
        rounded-2xl border border-stone-200/70
        bg-white/95 backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        p-2 z-50
      "
    >
      {/* User Info */}
      <div className="px-3 py-3 border-b border-stone-100">
        <p className="text-xs text-slate-400 font-medium">Signed in as</p>

        <span className="text-sm font-semibold text-slate-700 truncate block mt-1">
          {user?.username}
        </span>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-1 py-2">
        {dropdownLinks.map((link) => (
          <DropdownLink key={link.id} link={link} />
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-stone-100 my-1" />

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="
          group w-full
          flex items-center justify-between
          px-3 py-2.5 rounded-xl
          text-sm font-medium
          text-red-500
          transition-all duration-200
          hover:bg-red-50
        "
      >
        <span>Logout</span>

        <MdLogout
          size={18}
          className="
            transition-transform duration-200
            group-hover:translate-x-1
          "
        />
      </button>
    </div>
  );
}
