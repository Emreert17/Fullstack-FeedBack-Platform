"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tab({ title, items }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-[11px] font-semibold uppercase tracking-widest text-stone-400 px-3 mb-1">
        {title}
      </h3>
      {items.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.id}
            className={`flex items-center gap-3 text-sm font-medium rounded-xl px-3 py-2.5 transition-all duration-200
              ${
                isActive
                  ? "bg-brand-50 text-brand-700 shadow-sm"
                  : "text-stone-500 hover:bg-stone-100 hover:text-stone-800"
              }`}
            href={link.href}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200
                ${
                  isActive
                    ? "bg-brand-100 text-brand-600"
                    : "bg-stone-100 text-stone-400 group-hover:bg-stone-200"
                }`}
            >
              {React.createElement(link.icon, { size: 16 })}
            </span>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
