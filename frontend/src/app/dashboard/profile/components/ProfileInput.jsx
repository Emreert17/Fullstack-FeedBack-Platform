import React from "react";

export default function ProfileInput({ profile, value }) {
  return (
    <div className={`flex flex-col gap-1 ${profile.input ? "" : "col-span-2"}`}>
      <label
        htmlFor={profile.name}
        className="text-[11px] font-semibold uppercase tracking-wider text-slate-400"
      >
        {profile.label}
      </label>

      {profile.input ? (
        <div className="relative group">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 transition-colors duration-200 group-hover:bg-blue-50/60 group-hover:text-blue-400">
            {profile.icon && React.createElement(profile.icon, { size: 15 })}
          </span>
          <input
            readOnly
            type="text"
            name={profile.name}
            id={profile.name}
            value={value}
            placeholder={profile.placeholder}
            className="w-full text-sm text-slate-700 font-medium py-2.5 pl-9 pr-2 border-b border-slate-200/70 bg-transparent outline-none transition-all duration-200 hover:border-slate-300 focus:border-blue-400 placeholder:text-slate-300"
          />
        </div>
      ) : (
        <textarea
          readOnly
          name={profile.name}
          id={profile.name}
          value={value}
          className="w-full text-sm text-slate-700 font-medium py-2.5 px-3 min-h-[100px] border border-slate-200/60 rounded-lg bg-slate-50/40 outline-none resize-none transition-all duration-200 hover:border-slate-300 focus:border-blue-400 focus:bg-white focus:ring-[3px] focus:ring-blue-50 placeholder:text-slate-300"
        />
      )}
    </div>
  );
}
