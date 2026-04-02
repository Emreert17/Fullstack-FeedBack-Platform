import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function QuickLink({ link }) {
  return (
    <>
      <div className="flex justify-between items-center gap-4 py-[8px] px-[4px] border-b-2 border-stone-200 rounded-md hover:bg-yellow-50">
        <div className={`${link.color} text-stone-800 p-1 rounded-full`}>
          <span>{React.createElement(link.icon, { size: 20 })}</span>
        </div>
        <div>
          <h4 className="text-sm text-stone-800 font-semibold">{link.title}</h4>
          <p className="text-xs text-stone-500 font-medium">
            {link.description}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`${link.color} text-xs px-[8px] py-[4px] rounded-full`}
          >
            {link.badge}
          </span>
          <span>
            <MdKeyboardArrowRight size={22} />
          </span>
        </div>
      </div>
    </>
  );
}
