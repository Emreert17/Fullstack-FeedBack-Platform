import React from "react";
import { transformUppercase } from "../../../../utils/upperCase";
import { categoriesIcon } from "../../../../data/data";

export default function Categories({ item, total }) {
  const percentage = Math.ceil((item.count / total) * 100);
  const category = categoriesIcon.find((c) => c.key === item._id);
  const icon = category?.icon;

  return (
    <div className="group flex items-center gap-4 py-2 px-1 rounded-lg transition-colors duration-200 hover:bg-slate-50/60">
      {/* Icon */}
      <span
        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${category?.color}`}
      >
        {React.createElement(icon, { size: 14 })}
      </span>

      {/* Label + count */}
      <div className="flex flex-col min-w-[90px]">
        <span className="text-sm font-medium text-slate-700">
          {transformUppercase(item._id)}
        </span>
        <span className="text-[12px] text-slate-400">{item.count} items</span>
      </div>

      {/* Progress bar */}
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          style={{ width: `${percentage}%` }}
          className="h-full bg-blue-400 rounded-full transition-all duration-700 ease-out"
        />
      </div>

      {/* Percentage */}
      <span className="text-[13px] font-semibold text-slate-500 w-[40px] text-right tabular-nums">
        {percentage}%
      </span>
    </div>
  );
}
