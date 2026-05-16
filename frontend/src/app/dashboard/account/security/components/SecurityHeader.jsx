import { FaShieldAlt } from "react-icons/fa";

export default function SecurityHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-sm shadow-blue-100/40">
        <FaShieldAlt className="text-blue-500" size={15} />
      </div>
      <div>
        <h4 className="text-base font-semibold text-slate-800 tracking-tight">
          Update Password
        </h4>
        <p className="text-[13px] text-slate-400 mt-0.5">
          At least 6 characters with a mix of letters, numbers and symbols.
        </p>
      </div>
    </div>
  );
}
