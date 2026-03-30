import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
export default function PasswordInput({
  label,
  value,
  handlePassword,
  switchToggle,
  toggle,
  name,
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
          className="w-full border-2 border-stone-300 p-[4px] rounded-md"
          type={`${toggle ? "text" : "password"}`}
          name={name}
        />
        <span
          onClick={switchToggle}
          className="absolute top-[30px] right-[10px] cursor-pointer"
        >
          {toggle ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
        </span>
      </div>
    </>
  );
}
