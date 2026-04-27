import React from "react";

export default function ProfileInput({ profile, value }) {
  const baseInput =
    "w-full text-sm text-stone-800 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 pl-10 outline-none read-only:cursor-default read-only:text-stone-600 transition-all duration-200";

  return (
    <div
      className={`flex flex-col gap-1.5 ${profile.input ? "" : "col-span-2"}`}
    >
      <label
        htmlFor={profile.name}
        className="text-sm font-semibold text-stone-700"
      >
        {profile.label}
      </label>

      {profile.input ? (
        <div className="relative">
          {profile.icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
              {React.createElement(profile.icon, { size: 16 })}
            </span>
          )}
          <input
            readOnly
            type="text"
            name={profile.name}
            id={profile.name}
            className={baseInput}
            placeholder={profile.placeholder}
            value={value}
          />
        </div>
      ) : (
        <textarea
          readOnly
          className="w-full text-sm text-stone-600 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none resize-none read-only:cursor-default"
          name={profile.name}
          id={profile.name}
          value={value}
          rows={4}
        />
      )}
    </div>
  );
}
