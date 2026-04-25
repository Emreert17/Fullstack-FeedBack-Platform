"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tab({ title, items }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-xs font-bold text-stone-400 border-b-2 py-1 px-2">
        {title}
      </h3>
      {items.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.id}
            className={`${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-600"} 
            flex items-center gap-2 text-sm  rounded-md transition p-2`}
            href={link.href}
          >
            {React.createElement(link.icon, { size: 20 })} {link.label}
          </Link>
        );
      })}
    </div>
  );
}
