import React from "react";
import Link from "next/link";

export default function DropdownLink({ link }) {
  const linkStyle =
    " flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600transition-all duration-200 hover:bg-slate-100 hover:text-black";
  return (
    <>
      <Link href={link.href} className={linkStyle}>
        {React.createElement(link.icon, { size: 17 })}
        Profile
      </Link>
    </>
  );
}
