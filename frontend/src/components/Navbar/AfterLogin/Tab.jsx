import React from "react";
import Link from "next/link";

export default function Tab({ title, items }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-xs font-bold text-stone-400 border-b-2 py-1 px-2">
        {title}
      </h3>
      {items.map((link) => (
        <Link
          key={link.id}
          className="text-sm flex items-center gap-2 rounded-md text-gray-300 hover:bg-gray-600 transition p-2"
          href={link.href}
        >
          {React.createElement(link.icon, { size: 20 })} {link.label}
        </Link>
      ))}
    </div>
  );
}
