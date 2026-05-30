"use client";
import { useAuth } from "../../../app/context/authContext";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { dropdownLinks } from "../../../app/data/navigation/dropdown";
import DropdownLink from "./DropdownLink";

export default function DropdownMenu({ setIsOpen }) {
  const router = useRouter();
  const { setUser, user } = useAuth();
  const dropdownRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // trigger enter animation on mount
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleEscClick = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscClick);
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
      style={{
        transformOrigin: "top right",
      }}
      className={`
        absolute right-0 top-[48px] w-64
        rounded-2xl border border-stone-200/70
        bg-white/95 backdrop-blur-xl
        shadow-[0_1px_2px_rgba(0,0,0,0.02),0_12px_40px_-8px_rgba(0,0,0,0.12)]
        p-2 z-50 overflow-hidden
        transition-all duration-200 ease-out
        ${isMounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95"}
      `}
    >
      {/* subtle accent strip — matches the editorial language */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-300/60 to-transparent" />

      {/* User Info */}
      <div className="px-3 pt-3 pb-3 border-b border-stone-100">
        <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-stone-400">
          Signed in as
        </p>

        <span className="font-serif text-[15px] font-medium text-stone-800 truncate block mt-1.5 tracking-tight">
          {user?.username}
        </span>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-0.5 py-2">
        {dropdownLinks.map((link, i) => (
          <div
            key={link.id}
            style={{
              transitionDelay: isMounted ? `${60 + i * 30}ms` : "0ms",
            }}
            className={`
              transition-all duration-300 ease-out
              ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"}
            `}
          >
            <DropdownLink link={link} />
          </div>
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
          text-[13px] font-medium
          text-red-500
          transition-all duration-200
          hover:bg-red-50/70 hover:text-red-600
        "
      >
        <span>Logout</span>

        <MdLogout
          size={16}
          className="
            text-red-400
            transition-all duration-200
            group-hover:translate-x-0.5 group-hover:text-red-500
          "
        />
      </button>
    </div>
  );
}
