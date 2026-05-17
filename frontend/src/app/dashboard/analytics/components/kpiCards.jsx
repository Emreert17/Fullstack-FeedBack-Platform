import { FaArrowUpLong } from "react-icons/fa6";

export default function KPICards({ card }) {
  return (
    <div className="group bg-white border border-slate-200/60 px-5 py-5 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] transition-all duration-200 hover:shadow-[0_4px_14px_0_rgba(0,0,0,0.07)] hover:border-slate-300/50 hover:-translate-y-px">
      <div className="flex items-start justify-between mb-4">
        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider leading-none">
          {card.label}
        </p>
        <span className="flex items-center gap-1 text-emerald-600 text-[10px] font-semibold bg-emerald-50 border border-emerald-100/80 px-2 py-0.5 rounded-md">
          <FaArrowUpLong size={8} />
          12%
        </span>
      </div>

      <span className="block text-[30px] font-bold text-slate-900 tracking-tight leading-none">
        {card.value}
      </span>

      <p className="text-[12px] text-slate-400 mt-3 leading-snug">{card.sublabel}</p>
    </div>
  );
}
