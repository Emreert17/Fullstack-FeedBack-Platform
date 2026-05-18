import React from "react";
export default function RegisterInput({ input, handleChange, value }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-stone-700">
        {input.placeholder}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none text-[15px]">
          {React.createElement(input.icon)}
        </span>
        <input
          className="w-full text-sm bg-white border border-stone-200 rounded-lg py-2.5 pl-9 pr-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-colors"
          onChange={handleChange}
          value={value}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          required
        />
      </div>
    </div>
  );
}
