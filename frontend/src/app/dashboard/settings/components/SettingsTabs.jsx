import { LuSettings2, LuUserCog, LuShieldCheck } from "react-icons/lu";

const TAB_ICONS = {
  general: LuSettings2,
  profile: LuUserCog,
  security: LuShieldCheck,
};

export default function SettingsTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <aside className="w-48 shrink-0">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 px-2.5 mb-2">
        Account
      </p>
      <nav className="flex flex-col gap-0.5">
        {tabs.map((tab) => {
          const Icon = TAB_ICONS[tab.id];
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] text-left w-full cursor-pointer
                transition-colors duration-100
                ${
                  isActive
                    ? "bg-slate-950/[0.06] text-slate-900 font-semibold"
                    : "text-slate-500 font-medium hover:bg-slate-950/[0.03] hover:text-slate-700"
                }
              `}
            >
              <Icon
                size={14}
                className={isActive ? "text-slate-700" : "text-slate-400"}
              />
              {tab.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
