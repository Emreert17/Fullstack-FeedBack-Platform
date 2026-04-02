import React from "react";
export default function LoginInput({ input, handleChange, value }) {
  return (
    <>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
          {React.createElement(input.icon)}
        </span>

        <input
          className="w-full text-sm border-2 border-stone-300  border p-2 pl-9 rounded-md placeholder:ps-1"
          onChange={handleChange}
          value={value}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          required
        />
      </div>
    </>
  );
}
