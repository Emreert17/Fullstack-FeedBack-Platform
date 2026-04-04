import React from "react";
export default function CompleteProfileInput({ info, handleChange, value }) {
  return (
    <>
      {info.name === "bio" && (
        <h3 className="col-span-2 text-sm font-semibold text-gray-700 mt-4 pt-6 border-t-2 border-stone-200">
          About you
        </h3>
      )}
      <div className={`${info.input ? "" : "col-span-2"}`}>
        <label
          className="text-xs font-semibold text-gray-700 mb-1 block"
          htmlFor={info.name}
        >
          {info.label}
        </label>
        {info.input ? (
          <>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                {info.icon && React.createElement(info.icon)}
              </span>
              <input
                onChange={handleChange}
                value={value}
                className="w-full text-sm border-2 border-stone-300 p-2 pl-9 rounded-md placeholder:text-gray-400"
                type="text"
                placeholder={info.placeholder}
                name={info.name}
              />
            </div>
          </>
        ) : (
          <>
            <textarea
              onChange={handleChange}
              value={value}
              className="w-full h-25 text-sm border-2 border-stone-300 p-[6px] rounded-md"
              placeholder={info.placeholder}
              name={info.name}
              id={info.name}
            ></textarea>
          </>
        )}
      </div>
    </>
  );
}
