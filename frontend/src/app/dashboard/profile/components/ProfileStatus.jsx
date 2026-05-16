import { MdLocationOn } from "react-icons/md";
import { FaEnvelope, FaRegCalendarAlt } from "react-icons/fa";

export default function ProfileStatus() {
  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden">
      {/* Avatar + Identity */}
      <div className="px-6 pt-7 pb-5 flex flex-col items-center text-center">
        <span className="flex justify-center items-center w-16 h-16 text-lg font-semibold text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 rounded-full shadow-sm shadow-blue-100/40">
          EE
        </span>
        <h4 className="mt-3 text-[15px] font-semibold text-slate-800 tracking-tight">
          Emre Ertugrul
        </h4>
        <p className="text-sm text-slate-500 mt-0.5">AI Engineer</p>
        <span className="text-xs text-slate-400 mt-0.5">Claude</span>
      </div>

      {/* Stats row */}
      <div className="mx-5 rounded-xl bg-slate-50/80 border border-slate-100 flex divide-x divide-slate-100">
        <div className="flex-1 flex flex-col items-center py-3.5">
          <span className="text-base font-semibold text-slate-800">24</span>
          <span className="text-[11px] font-medium text-slate-400 mt-0.5">
            Feedbacks
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center py-3.5">
          <span className="text-base font-semibold text-slate-800">8</span>
          <span className="text-[11px] font-medium text-slate-400 mt-0.5">
            Resolved
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center py-3.5">
          <span className="text-base font-semibold text-slate-800">147</span>
          <span className="text-[11px] font-medium text-slate-400 mt-0.5">
            Upvotes
          </span>
        </div>
      </div>

      {/* Contact details */}
      <div className="px-6 py-5 mt-3 border-t border-slate-100">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-slate-100/80 flex items-center justify-center">
              <MdLocationOn className="text-slate-400" size={14} />
            </span>
            <span className="text-[13px] text-slate-600">Istanbul, Turkey</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-slate-100/80 flex items-center justify-center">
              <FaEnvelope className="text-slate-400" size={12} />
            </span>
            <span className="text-[13px] text-slate-600">emre@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-slate-100/80 flex items-center justify-center">
              <FaRegCalendarAlt className="text-slate-400" size={12} />
            </span>
            <span className="text-[13px] text-slate-600">
              Joined March 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
