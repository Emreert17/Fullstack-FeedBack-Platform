export default function CompleteProfileInput({ info }) {
  return (
    <>
      <div className={`${info.input ? "" : "col-span-2"}`}>
        <label className="text-xs font-medium">{info.label}</label>
        {info.input ? (
          <>
            <input
              className="w-full text-sm border-2 border-stone-300 p-[4px] rounded-md"
              type="text"
            />
          </>
        ) : (
          <>
            <textarea
              className="w-full h-25 text-sm border-2 border-stone-300 p-[6px] rounded-md"
              placeholder="A short bio about yourself..."
              name=""
              id=""
            ></textarea>
          </>
        )}
      </div>
    </>
  );
}
