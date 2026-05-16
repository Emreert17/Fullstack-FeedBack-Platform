"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tab({ link }) {
  const pathname = usePathname();

  const isActive = pathname === link.href;

  return (
    <Link
      href={link.href}
      className={`
        group relative flex items-center gap-3 px-3 py-2 rounded-xl text-[14px] font-medium
        transition-all duration-300 ease-out
        ${
          isActive
            ? "bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-600 shadow-sm shadow-blue-100/60"
            : "text-slate-600 hover:bg-gradient-to-r hover:from-blue-50/70 hover:to-transparent hover:text-blue-600 hover:translate-x-0.5"
        }
      `}
    >
      {/* Active Indicator */}
      {isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-blue-500" />
      )}

      {/* Icon */}
      <span
        className={`
          flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300
          ${
            isActive
              ? "bg-blue-500/10 text-blue-600"
              : "bg-slate-100 text-slate-400 group-hover:bg-blue-500/10 group-hover:text-blue-500 group-hover:scale-105"
          }
        `}
      >
        {React.createElement(link.icon, {
          size: 15,
          strokeWidth: 1.6,
        })}
      </span>

      {/* Label */}
      <span>{link.label}</span>
    </Link>
  );
}
