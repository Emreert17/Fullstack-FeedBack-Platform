import React from "react";
export default function ProfileInput({ profile, value }) {
  const inputStyle =
    "w-full text-sm font-medium text-stone-800 py-2 pl-9 border-b border-gray-300 bg-transparent outline-none transition-all";
  const labelStyle = "text-xs font-bold text-blue-400";
  return (
    <>
      <div
        className={`flex flex-col gap-1 ${profile.input ? "" : "col-span-2"}`}
      >
        <label htmlFor={profile.name} className={labelStyle}>
          {profile.label}
        </label>
        {profile.input ? (
          <>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                {profile.icon && React.createElement(profile.icon)}
              </span>
              <input
                readOnly
                type="text"
                name={profile.name}
                className={inputStyle}
                placeholder={profile.placeholder}
                value={value}
              />
            </div>
          </>
        ) : (
          <>
            <textarea
              readOnly
              className={`${inputStyle} h-[100px]`}
              name={profile.name}
              id={profile.name}
              value={value}
            ></textarea>
          </>
        )}
      </div>
    </>
  );
}
