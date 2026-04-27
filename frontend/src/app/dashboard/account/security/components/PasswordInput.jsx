"use client";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function PasswordInput({ passwordInput, form }) {
  const { toggle, password, handleChange, handleToggle } = form;

  return (
    <div
      className={`${passwordInput.colSpan ? "col-span-2" : ""} flex flex-col gap-1.5`}
    >
      <label
        className="text-sm font-semibold text-stone-700"
        htmlFor={passwordInput.name}
      >
        {passwordInput.label}
      </label>

      <div className="relative">
        <input
          onChange={handleChange}
          value={password[passwordInput.name] || ""}
          className="w-full text-sm text-stone-800 placeholder:text-stone-400 bg-white border border-stone-200 rounded-xl px-4 py-3 pr-12 outline-none transition-all duration-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          type={toggle[passwordInput.name] ? "text" : "password"}
          name={passwordInput.name}
          id={passwordInput.name}
          placeholder={passwordInput.placeholder}
        />

        <button
          type="button"
          onClick={() => handleToggle(passwordInput.name)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600 transition-colors duration-200 cursor-pointer"
        >
          {toggle[passwordInput.name] ? (
            <FiEye className="w-4 h-4" />
          ) : (
            <FiEyeOff className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
