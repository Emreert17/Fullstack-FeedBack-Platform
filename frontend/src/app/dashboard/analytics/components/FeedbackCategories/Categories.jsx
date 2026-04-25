import React from "react";
import { transformUppercase } from "../../../../utils/upperCase";
import { categoriesIcon } from "../../../../data/data";

export default function Categories({ item, total }) {
  const percentage = Math.ceil((item.count / total) * 100);
  const category = categoriesIcon.find((c) => c.key === item._id);
  const icon = category?.icon;

  return (
    <div className="flex items-center justify-between">
      <div className={`${category?.color} rounded-md p-2 mr-5`}>
        <span>{React.createElement(icon)}</span>
      </div>
      <div className="flex flex-col min-w-[80px]">
        <span className="text-sm text-stone-500">
          {transformUppercase(item._id)}
        </span>
        <span className="text-sm font-semibold text-stone-800">
          {item.count}
        </span>
      </div>

      <div className="flex-1 h-2 border border-stone-100 bg-stone-200 rounded-full overflow-hidden">
        <div
          style={{ width: `${percentage}%` }}
          className="h-full bg-red-500 rounded-full transition-all duration-500"
        />
      </div>

      <span className="text-sm text-stone-600 w-[40px] text-right">
        {percentage}%
      </span>
    </div>
  );
}
