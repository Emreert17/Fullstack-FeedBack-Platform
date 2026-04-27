export default function FeedbackInput({
  label,
  type = "input",
  name,
  value,
  onChange,
  placeholder = "",
  options = [],
}) {
  const baseInput =
    "w-full text-sm text-stone-800 placeholder:text-stone-400 bg-white border border-stone-200 rounded-xl outline-none transition-all duration-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-sm font-semibold text-stone-700"
        htmlFor={name}
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={6}
          className={`${baseInput} px-4 py-3 resize-none`}
        />
      ) : type === "select" ? (
        <div className="relative">
          <select
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className={`${baseInput} px-4 py-3 appearance-none cursor-pointer`}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      ) : (
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseInput} px-4 py-3`}
        />
      )}
    </div>
  );
}
