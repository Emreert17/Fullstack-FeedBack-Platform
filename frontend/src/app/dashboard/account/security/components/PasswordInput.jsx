"use client";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordInput({ passwordInput, form }) {
  const { toggle, password, handleChange, handleToggle } = form;

  return (
    <div
      className={`${passwordInput.colSpan ? "col-span-2" : ""} flex flex-col relative gap-1`}
    >
      <label className="text-xs font-medium">{passwordInput.label}</label>

      <input
        onChange={handleChange}
        value={password[passwordInput.name] || ""}
        className="w-full text-sm border-2 border-stone-300 pl-2 p-[5px] rounded-md"
        type={toggle[passwordInput.name] ? "text" : "password"}
        name={passwordInput.name}
        placeholder={passwordInput.placeholder}
      />

      <span
        onClick={() => handleToggle(passwordInput.name)}
        className="absolute top-[27px] right-[10px] cursor-pointer"
      >
        {toggle[passwordInput.name] ? (
          <FaEye size={20} />
        ) : (
          <FaEyeSlash size={20} />
        )}
      </span>
    </div>
  );
}
