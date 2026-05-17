import { FaChartLine } from "react-icons/fa";

export default function AnalyticsHeader() {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-sm shrink-0">
          <FaChartLine className="text-white" size={14} />
        </div>
        <div>
          <h2 className="text-[20px] font-bold text-slate-900 tracking-tight leading-none">
            Analytics
          </h2>
          <p className="text-[13px] text-slate-500 mt-1.5 leading-none">
            All data shown is from your submissions only.
          </p>
        </div>
      </div>
    </div>
  );
}
