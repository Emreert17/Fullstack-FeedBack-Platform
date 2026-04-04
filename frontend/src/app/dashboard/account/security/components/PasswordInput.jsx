import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
export default function PasswordInput({
  label,
  value,
  handlePassword,
  switchToggle,
  toggle,
  name,
  placeholder,
}) {
  return (
    <>
      <div className="flex flex-col relative gap-1">
        <label className="text-xs font-medium" htmlFor="password">
          {label}
        </label>

        <input
          onChange={handlePassword}
          value={value}
          className="w-full text-sm border-2 border-stone-300 pl-2 p-[5px] rounded-md"
          type={`${toggle ? "text" : "password"}`}
          name={name}
          placeholder={placeholder}
        />
        <span
          onClick={switchToggle}
          className="absolute top-[27px] right-[10px] cursor-pointer"
        >
          {toggle ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
        </span>
      </div>
    </>
  );
}
