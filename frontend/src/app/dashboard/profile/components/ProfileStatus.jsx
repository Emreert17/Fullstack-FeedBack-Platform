import { MdLocationOn } from "react-icons/md";
import { FaEnvelope, FaRegCalendarAlt } from "react-icons/fa";

export default function ProfileStatus() {
  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden">
      {/* Subtle top accent */}
      <div className="h-1 bg-gradient-to-r from-blue-400/30 via-violet-400/20 to-blue-400/10" />

      {/* Avatar + Identity */}
      <div className="px-6 pt-6 pb-5 flex flex-col items-center text-center">
        <div className="relative">
          <span className="flex justify-center items-center w-[76px] h-[76px] text-xl font-semibold text-blue-600 bg-blue-50 border-2 border-blue-100/80 rounded-2xl tracking-tight select-none">
            EE
          </span>
          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
        </div>
        <h4 className="mt-4 text-[15px] font-semibold text-slate-800 tracking-tight leading-tight">
          Emre Ertugrul
        </h4>
        <p className="text-[13px] text-slate-500 mt-0.5 font-medium">AI Engineer</p>
        <span className="mt-2.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide bg-slate-100 text-slate-500">
          Claude
        </span>
      </div>

      {/* Stats row */}
      <div className="mx-5 mb-5 rounded-xl bg-slate-50/80 border border-slate-100 flex divide-x divide-slate-100">
        <div className="flex-1 flex flex-col items-center py-3">
          <span className="text-[13px] font-semibold text-slate-800">24</span>
          <span className="text-[11px] text-slate-400 mt-0.5 font-medium">Feedbacks</span>
        </div>
        <div className="flex-1 flex flex-col items-center py-3">
          <span className="text-[13px] font-semibold text-slate-800">8</span>
          <span className="text-[11px] text-slate-400 mt-0.5 font-medium">Resolved</span>
        </div>
        <div className="flex-1 flex flex-col items-center py-3">
          <span className="text-[13px] font-semibold text-slate-800">147</span>
          <span className="text-[11px] text-slate-400 mt-0.5 font-medium">Upvotes</span>
        </div>
      </div>

      {/* Contact details */}
      <div className="border-t border-slate-100 px-5 py-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3.5">
          Contact
        </p>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center shrink-0">
              <MdLocationOn className="text-slate-400" size={13} />
            </span>
            <span className="text-[13px] text-slate-600 truncate">Istanbul, Turkey</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center shrink-0">
              <FaEnvelope className="text-slate-400" size={11} />
            </span>
            <span className="text-[13px] text-slate-600 truncate">emre@gmail.com</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center shrink-0">
              <FaRegCalendarAlt className="text-slate-400" size={11} />
            </span>
            <span className="text-[13px] text-slate-600">Joined March 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
