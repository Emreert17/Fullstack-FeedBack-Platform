import { FaArrowUpLong } from "react-icons/fa6";

export default function KPICards({ card }) {
  return (
    <div className="group bg-white border border-slate-200/60 p-5 rounded-2xl transition-all duration-300 hover:shadow-md hover:shadow-slate-100/80 hover:border-slate-200">
      <div className="flex items-start justify-between">
        <p className="text-[13px] text-slate-400 font-medium">{card.label}</p>
        <span className="flex items-center gap-1 text-emerald-600 text-[11px] font-semibold bg-emerald-50 border border-emerald-100/60 px-2 py-0.5 rounded-lg">
          <FaArrowUpLong size={9} />
          12%
        </span>
      </div>

      <span className="block text-2xl font-bold text-slate-800 mt-2 tracking-tight">
        {card.value}
      </span>

      <p className="text-[12px] text-slate-400 mt-1.5">{card.sublabel}</p>
    </div>
  );
}
