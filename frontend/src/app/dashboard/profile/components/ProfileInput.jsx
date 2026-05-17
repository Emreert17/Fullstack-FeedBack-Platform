import React from "react";

export default function ProfileInput({ profile, value }) {
  return (
    <div className={`flex flex-col gap-1.5 ${profile.input ? "" : "col-span-2"}`}>
      <label
        htmlFor={profile.name}
        className="text-[10px] font-semibold uppercase tracking-widest text-slate-400"
      >
        {profile.label}
      </label>

      {profile.input ? (
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-350 pointer-events-none">
            {profile.icon && React.createElement(profile.icon, { size: 13, className: "text-slate-400" })}
          </span>
          <input
            readOnly
            type="text"
            name={profile.name}
            id={profile.name}
            value={value}
            placeholder={profile.placeholder}
            className="w-full text-[13px] text-slate-700 font-medium py-2.5 pl-8 pr-3 bg-slate-50/60 border border-slate-200/70 rounded-lg outline-none transition-colors duration-150 hover:border-slate-300 hover:bg-slate-50 placeholder:text-slate-300 cursor-default"
          />
        </div>
      ) : (
        <textarea
          readOnly
          name={profile.name}
          id={profile.name}
          value={value}
          placeholder={profile.placeholder}
          className="w-full text-[13px] text-slate-700 font-medium py-2.5 px-3 min-h-[88px] bg-slate-50/60 border border-slate-200/70 rounded-lg outline-none resize-none transition-colors duration-150 hover:border-slate-300 hover:bg-slate-50 placeholder:text-slate-300 cursor-default"
        />
      )}
    </div>
  );
}
