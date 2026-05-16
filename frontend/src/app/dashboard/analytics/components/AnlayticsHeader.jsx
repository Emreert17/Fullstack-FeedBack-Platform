import { FaChartLine } from "react-icons/fa";

export default function AnalyticsHeader() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-sm shadow-blue-100/40">
        <FaChartLine className="text-blue-500" size={15} />
      </div>
      <div>
        <h2 className="text-base font-semibold text-slate-800 tracking-tight">
          Analytics
        </h2>
        <p className="text-[13px] text-slate-400 mt-0.5">
          All data shown is from your submissions only.
        </p>
      </div>
    </div>
  );
}
