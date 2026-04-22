import { FaArrowUpLong } from "react-icons/fa6";
export default function KPICards({ card }) {
  return (
    <div className="bg-white border border-stone-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <h4 className="text-sm text-stone-500 font-medium">{card.label}</h4>

      <div className="flex items-end justify-between mt-2">
        <span className="text-xl font-bold text-stone-800">{card.value}</span>

        <div className="flex items-center gap-1 text-green-600 text-xs font-semibold bg-green-50 px-2 py-1 rounded-md">
          <FaArrowUpLong size={14} />
          12%
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-2">{card.sublabel}</p>
    </div>
  );
}
