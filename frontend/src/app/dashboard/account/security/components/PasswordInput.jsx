"use client";

import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordInput({ passwordInput, form }) {
  const { toggle, password, handleChange, handleToggle } = form;

  return (
    <div
      className={`${passwordInput.colSpan ? "col-span-2" : ""} flex flex-col gap-1.5`}
    >
      <label
        htmlFor={passwordInput.name}
        className="text-[11px] font-semibold uppercase tracking-wider text-slate-400"
      >
        {passwordInput.label}
      </label>

      <div className="relative group">
        <input
          id={passwordInput.name}
          onChange={handleChange}
          value={password[passwordInput.name] || ""}
          type={toggle[passwordInput.name] ? "text" : "password"}
          name={passwordInput.name}
          placeholder={passwordInput.placeholder}
          className="w-full text-sm text-slate-700 font-medium bg-slate-50/50 border border-slate-200/60 rounded-lg pl-4 pr-11 py-2.5 outline-none transition-all duration-200 placeholder:text-slate-300 hover:border-slate-300 focus:bg-white focus:border-blue-400 focus:ring-[3px] focus:ring-blue-50 focus:shadow-sm focus:shadow-blue-100/30"
        />

        <button
          type="button"
          onClick={() => handleToggle(passwordInput.name)}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md flex items-center justify-center text-slate-300 transition-all duration-200 hover:text-slate-500 hover:bg-slate-100/80 cursor-pointer"
        >
          {toggle[passwordInput.name] ? (
            <FaEye size={14} />
          ) : (
            <FaEyeSlash size={14} />
          )}
        </button>
      </div>
    </div>
  );
}
