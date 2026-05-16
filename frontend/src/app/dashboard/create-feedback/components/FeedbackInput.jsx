export default function FeedbackInput({
  label,
  type = "input",
  name,
  value,
  onChange,
  placeholder = "",
  options = [],
}) {
  const baseClass =
    "w-full text-sm text-slate-700 bg-slate-50/50 border border-slate-200/60 rounded-lg outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-stone-300 focus:bg-white focus:border-blue-400 focus:ring-[3px] focus:ring-blue-50 focus:shadow-sm focus:shadow-blue-100/30";

  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[13px] font-semibold text-slate-600 tracking-tight"
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
          className={`${baseClass} min-h-[140px] px-4 py-3 resize-none`}
        />
      ) : type === "select" ? (
        <div className="relative">
          <select
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className={`${baseClass} px-4 py-2.5 pr-10 appearance-none cursor-pointer`}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {/* Custom chevron */}
          <svg
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      ) : (
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClass} px-4 py-2.5`}
        />
      )}
    </div>
  );
}
