export default function FeedbackInput({
  label,
  type = "input",
  name,
  value,
  onChange,
  placeholder = "",
  options = [],
}) {
  const className = "text-sm border-3 border-stone-200 rounded-md";

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold" htmlFor={name}>
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${className} h-[150px] p-[8px]`}
        />
      ) : type === "select" ? (
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className={`${className} p-[6px]`}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${className} p-[6px]`}
        />
      )}
    </div>
  );
}
