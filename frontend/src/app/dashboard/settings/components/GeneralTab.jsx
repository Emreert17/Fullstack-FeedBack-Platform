import { LuChevronRight } from "react-icons/lu";
import { shortcuts } from "../../../data/settings/shortcuts";

export default function GeneralTab({ setActiveTab }) {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-100">
        <h3 className="text-[14px] font-semibold text-slate-800 tracking-tight">
          General
        </h3>
        <p className="text-[12px] text-slate-400 mt-0.5">
          An overview of your account settings.
        </p>
      </div>

      <div className="px-6 py-1">
        {shortcuts.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center gap-3.5 py-4 text-left cursor-pointer group
                transition-colors duration-100
                ${index < shortcuts.length - 1 ? "border-b border-slate-100" : ""}
              `}
            >
              <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 transition-colors duration-100 group-hover:bg-slate-200/80">
                <Icon size={14} className="text-slate-500" />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-100">
                  {item.title}
                </p>
                <p className="text-[12px] text-slate-400 mt-0.5">
                  {item.description}
                </p>
              </div>
              <LuChevronRight
                size={14}
                className="text-slate-300 group-hover:text-slate-500 transition-colors duration-100 shrink-0"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
