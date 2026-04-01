export default function CompleteProfileInput({ info, handleChange, value }) {
  return (
    <>
      <div className={`${info.input ? "" : "col-span-2"}`}>
        <label className="text-xs font-medium" htmlFor={info.name}>
          {info.label}
        </label>
        {info.input ? (
          <>
            <input
              onChange={handleChange}
              value={value}
              className="w-full text-sm border-2 border-stone-300 p-[6px] rounded-md"
              type="text"
              placeholder={info.placeholder}
              name={info.name}
            />
          </>
        ) : (
          <>
            <textarea
              className="w-full h-25 text-sm border-2 border-stone-300 p-[6px] rounded-md"
              placeholder={info.placeholder}
              name=""
              id=""
            ></textarea>
          </>
        )}
      </div>
    </>
  );
}
